import { useReducer, useState, useEffect, useId } from "react";
import { openDB } from "idb";

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
        await fetchData(db); // 데이터 가져오기
      } catch (error) {
        console.log("[idb] Error: idb initialized failed", error);
      }
    };

    initDB();
  }, []);

  // 데이터 가져오기
  const fetchData = async (db) => {
    if (!db) return;

    try {
      const store = db.transaction(storeName).objectStore(storeName);
      const data = await store.getAll();
      dispatch({ type: "SET_DATA", payload: data });
    } catch (error) {
      console.log("[idb] Error: idb fetchData failed", error);
    }
  };

  // 데이터 추가
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

  return [state, addData];
};

export default useIdbReducer;
