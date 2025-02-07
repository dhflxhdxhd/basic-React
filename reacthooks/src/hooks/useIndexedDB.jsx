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
    case "SET_DATA":
      return [...action.payload];
    case "ADD_DATA":
      return [...state, action.payload];
    case "DELETE_ALL_DATA":
      return [];
    case "DELETE_DATA":
      return state.filter((data) => !action.payload.ids.includes(data.id));
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

      transaction.oncomplete = async () => {
        await transaction.done;
        dispatch({ type: "SET_DATA", payload: data });

        console.log("[idb] transaction completed getAllData");
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
   * @param {*} transaction
   * @param {*} store
   * @param {*} data 저장할 데이터 객체
   * @returns
   */
  const addData = async (transaction = null, store = null, data) => {
    if (!dbInstance) return;

    const [trans, storeInstance] =
      transaction && store
        ? [transaction, store]
        : getTransactionAndStore(storeName, "readwrite");

    try {
      const id = await storeInstance.add(data);
      dispatch({ type: "ADD_DATA", payload: { ...data, id } });
    } catch (error) {
      console.log("[idb] Error: add Data failed", error);
    }
  };

  /**
   * 특정 store에 있는 모든 데이터를 삭제하는 함수
   * @returns {Promise<void>}
   */
  const delAllData = async () => {
    if (!dbInstance) return;
    if (state.length == 0) return;
    const [transaction, store] = getTransactionAndStore(storeName, "readwrite");

    try {
      await store.clear();

      transaction.oncomplete = async () => {
        console.log("[idb] transaction completed delAllData");
        await transaction.done;

        dispatch({ type: "DELETE_ALL_DATA", payload: null });
      };
    } catch (error) {
      console.log("[idb] Error: delete all data failed", error);
    }

    transaction.onerror = (event) => {
      console.log("[idb] Error: idb transaction failed", event.target.error);
    };
  };

  /**
   * 특정 store에 있는 특정 데이터를 삭제하는 함수
   * @param {*} transaction
   * @param {*} store
   * @param {*} limit 제한할 데이터 개수수
   * @param {*} specificId 필수적으로 삭제할 값
   * @returns
   */
  const delData = async (transaction, store, limit, delId = null) => {
    if (!dbInstance) return;
    if (state.length === 0) return;

    try {
      let check = [];
      let count = state.length - limit;
      if (delId !== null) {
        check = state.filter((item) => item.id === delId);
      }

      if (check.length <= 0) {
        count++;
      }
      const idsToDelete = state.slice(0, count).map((item) => item.id);
      console.log(idsToDelete);
      for (let id of idsToDelete) {
        const request = store.delete(id);
        await request;
      }

      if (delId != null) idsToDelete.push(delId);

      dispatch({ type: "DELETE_DATA", payload: { ids: idsToDelete } });
    } catch (error) {
      console.log("[idb] Error: delete data failed", error);
    }
  };

  /**
   * 데이터베이스를 일정 개수로 유지하면서 데이터 추가하는 함수
   * @param {*} data 추가할 데이터
   * @param {*} limit 제한할 데이터 개수수
   * @returns
   */
  const addDataWithLimit = async (data, limit, delId = null) => {
    if (!dbInstance) return;
    const [transaction, store] = getTransactionAndStore(storeName, "readwrite");

    try {
      if (state.length >= limit) {
        await delData(transaction, store, limit, delId);
      }

      await addData(transaction, store, data);

      transaction.oncomplete = () => {
        console.log("[idb] transaction completed addDataWithLimit");
      };
    } catch (error) {
      console.log("[idb] Error: add Data With Limit failed", error);
    }

    transaction.onerror = (event) => {
      console.log("[idb] Error: idb transaction failed", event.target.error);
    };
  };

  return [state, getAllData, addData, delAllData, delData, addDataWithLimit];
};

export default useIdbReducer;
