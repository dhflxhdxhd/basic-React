import { useReducer, useState, useEffect, useId } from "react";
import { openDB } from "idb";

/**
 ＊IndexedDB를 관리하는 리듀서 함수
 * @param {*} state 현재 상태 데이터
 * @param {*} action action 객체
 * @returns 업데이트 된 상태 || 에러
 */
function idbReducer(state, action) {
  switch (action.type) {
    case "ADD_DATA":
      return [...state, action.payload];
    case "SET_DATA":
      return [...action.payload];
    case "DELETE_ALL_DATA":
      return [];
    default:
      throw new Error("[idb] Error: unknown action type");
  }
}

/**
 * IndexedDB를 활용한 데이터 저장 및 관리 커스텀 훅
 * @param {String} dbName 데이터베이스 이름
 * @param {String} storeName 오브젝트 스토어 이름
 * @param {Array} initialValue 초기 상태 값
 * @returns {[Array, Function, Function]} 상태, 전체 데이터 조회 함수, 데이터 추가 함수
 */
const useIdbReducer = (dbName, storeName, initialValue) => {
  const [state, dispatch] = useReducer(idbReducer, initialValue);
  const [dbInstance, setDbInstance] = useState(null);

  useEffect(() => {
    const initDB = async () => {
      try {
        const db = await openDB(dbName, 1, {
          upgrade(db) {
            if (!db.objectStoreNames.contains(storeName)) {
              db.createObjectStore(storeName, {
                keyPath: "id",
                autoIncrement: true,
              });
            }
          },
        });

        console.log("[idb] idb initialized");
        setDbInstance(db);
      } catch (error) {
        console.log("[idb] Error: idb initialized failed", error);
      }
    };

    initDB();
  }, []);

  useEffect(() => {
    if (dbInstance === null) return;
    getAllData();
  }, [dbInstance]);

  const getTransactionAndStore = (storeName, mode) => {
    const transaction = dbInstance.transaction(storeName, mode);
    const store = transaction.objectStore(storeName);

    return [transaction, store];
  };

  /**
   * IndexedDB에서 전체 데이터를 가져오는 함수
   * @param {IDBDatabase} db 사용할 데이터베이스 인스턴스
   * @returns {Promise<void>}
   */
  const getAllData = async () => {
    if (!dbInstance) return;

    const [transaction, store] = getTransactionAndStore(storeName, "readonly");

    try {
      const data = await store.getAll();

      dispatch({ type: "SET_DATA", payload: data });

      transaction.oncomplete = async () => {
        console.log("[idb] transaction completed getAllData");
        await transaction.done;
      };
    } catch (error) {
      console.log("[idb] Error: idb getAllData failed", error);
    }

    transaction.onerror = (event) => {
      console.log("[idb] Error: idb transaction failed", event.target.error);
    };
  };

  /**
   * IndexedDB에 새로운 데이터 (하나)를 추가하는 함수
   * @param {Object} data 저장할 데이터 객체
   * @returns {Promise<void>}
   */
  const addData = async (data) => {
    if (!dbInstance) return;

    const [transaction, store] = getTransactionAndStore(storeName, "readwrite");

    try {
      const id = await store.add(data);
      dispatch({ type: "ADD_DATA", payload: { ...data, id } });

      transaction.oncomplete = async () => {
        await transaction.done;
      };
    } catch (error) {
      console.log("[idb] Error: add Data failed", error);
    }

    transaction.onerror = (event) => {
      console.log("[idb] Error: idb transaction failed", event.target.error);
    };
  };

  /**
   * IndexedDB에 특정 store에 있는 모든 데이터를 삭제하는 함수
   * @returns {Promise<void>}
   */
  const delAllData = async () => {
    if (!dbInstance) return;

    const [transaction, store] = getTransactionAndStore(storeName, "readwrite");

    try {
      await store.clear();

      transaction.oncomplete = async () => {
        console.log("[idb] transaction completed delAllData");
        dispatch({ type: "DELETE_ALL_DATA", payload: null });
        await transaction.done;
      };
    } catch (error) {
      console.log("[idb] Error: delete all data failed", error);
    }

    transaction.onerror = (event) => {
      console.log("[idb] Error: idb transaction failed", event.target.error);
    };
  };

  // const

  return [state, getAllData, addData, delAllData];
};

export default useIdbReducer;
