import useIdbReducer from "../hooks/useIndexedDB";
const dbName = "itestDB";
const storeName = "itestStore";
const newData = { name: "back", type: "string" };
const Itest = () => {
  const [itestData, getAllData, addItestData] = useIdbReducer(
    dbName,
    storeName,
    []
  );
  // const [itestData, setItestData] = useState([]);
  // const [dbInstance, setDbInstance] = useState(null); // IDBPDatabase 타입
  // const itestId = useRef(0);

  // useEffect(() => {
  //   console.log(`[itestData changes] ${itestData}`);
  //   itestId.current =
  //     itestData.length === 0 ? 1 : itestData[itestData.length - 1].id + 1;

  //   console.log(itestId.current);
  // }, [itestData]);

  // useEffect(() => {
  //   const initDB = async () => {
  //     const db = await openDB(TABLE_NAME, 1, {
  //       upgrade(db) {
  //         if (!db.objectStoreNames.contains(TABLE_NAME)) {
  //           db.createObjectStore(TABLE_NAME, {
  //             keyPath: "id",
  //             autoIncrement: true,
  //           });
  //         }
  //       },
  //     });

  //     setDbInstance(db);
  //     fetchData(db); // 기존 데이터 가져오기
  //   };

  //   initDB(); // IndexedDB 오픈 및 기존 데이터 가져오기
  // }, []);

  // // IndexedDB에서 데이터 가져오기
  // const fetchData = async (db) => {
  //   if (!db) return;
  //   const store = db.transaction(TABLE_NAME).objectStore(TABLE_NAME);
  //   const data = await store.getAll();
  //   console.log(data);
  //   setItestData(data);
  // };

  // // 데이터 추가
  // const addData = async (data) => {
  //   if (!dbInstance) return;
  //   const tx = dbInstance.transaction(TABLE_NAME, "readwrite");
  //   const store = tx.objectStore(TABLE_NAME);

  //   await store.add(newData);
  //   await tx.done;

  //   setItestData((prev) => [...prev, { ...newData, id: itestId.current++ }]);
  // };

  return (
    <div>
      <p>Itest</p>
      <button onClick={() => addItestData({ ...newData })}>Add New Data</button>
      <ul>
        {itestData.map((item) => (
          <li key={item.id}>
            {item.id}
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Itest;
