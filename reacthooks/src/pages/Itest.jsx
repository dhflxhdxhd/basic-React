import useIdbReducer from "../hooks/useIndexedDB";
const dbName = "itestDB";
const storeName = "itestStore";
const newData = { name: "back", type: "string" };
const Itest = () => {
  const [
    itestData,
    getAllData,
    addData,
    delAllData,
    delData,
    addDataWithLimit,
  ] = useIdbReducer(dbName, storeName, []);

  return (
    <div>
      <p>Itest</p>
      <button onClick={() => addData(null, null, { ...newData })}>
        Add New Data
      </button>
      {/* <button onClick={() => delAllData()}>delete all Data</button>
      <button
        onClick={() => {
          if (itestData.length > 0) {
            return delData(itestData[0].id);
          }
        }}
      >
        delete specific Data
      </button> */}
      <button onClick={() => addDataWithLimit(newData, 3, null)}>
        addDataWithLimit
      </button>
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
