import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import MoonLoader from "react-spinners/MoonLoader";

const Loading = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [tempData, setTempData] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    console.log(tempData);
  }, [tempData]);
  const url = "https://jsonplaceholder.typicode.com/posts";
  const getTempData = async () => {
    setIsLoading(true);
    setIsError(false);

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("[fetch] Error: 네트워크 에러");
      }

      const data = await response.json();
      setTempData(data);
    } catch (error) {
      setIsError(true);
      console.error("[fetch] Error", error);
    } finally {
      clearTimeout(timeout);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Button text={"데이터 가져오기"} onClickButton={getTempData} />
      <div>
        {isLoading ? (
          <MoonLoader
            size={60}
            color="#27445D"
            loading={isLoading}
            speedMultiplier={0.3}
          />
        ) : (
          tempData &&
          tempData.map((data) => (
            <div
              key={data.id}
              style={{
                border: "1px solid #222",
                borderRadius: "5px",
                padding: "5px",
                marginTop: "5px",
              }}
            >
              <p>{data.title}</p>
              <p>{data.body}</p>
            </div>
          ))
        )}
      </div>
      {isError && (
        <div style={{ color: "red" }}>
          데이터를 가져오는 데 오류가 발생했습니다.
        </div>
      )}
    </div>
  );
};

export default Loading;
