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
        await getAllData(db);
      } catch (error) {
        console.log("[idb] Error: idb initialized failed", error);
      }
    };

    initDB();
  }, []);

  /**
   * IndexedDB에서 전체 데이터를 가져오는 함수
   * @param {IDBDatabase} db 사용할 데이터베이스 인스턴스
   * @returns {Promise<void>}
   */
  const getAllData = async (db) => {
    if (!db) return;

    try {
      const store = db.transaction(storeName).objectStore(storeName);
      const data = await store.getAll();
      dispatch({ type: "SET_DATA", payload: data });
    } catch (error) {
      console.log("[idb] Error: idb fetchData failed", error);
    }
  };

  /**
   * IndexedDB에 새로운 데이터 (하나)를 추가하는 함수
   * @param {Object} data 저장할 데이터 객체
   * @returns {Promise<void>}
   */
  const addData = async (data) => {
    if (!dbInstance) return;

    try {
      const tx = dbInstance.transaction(storeName, "readwrite");
      const store = tx.objectStore(storeName);

      const id = await store.add(data);
      await tx.done;

      dispatch({ type: "ADD_DATA", payload: { ...data, id } });
    } catch (error) {
      console.log("[idb] Error: add Data failed", error);
    }
  };

  return [state, getAllData, addData];
};

export default useIdbReducer;
