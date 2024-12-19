import { useEffect } from "react";
const EvenCard = () => {
  // 3. 언마운트 : 죽음
  useEffect(() => {
    // 클린업, 정리함수
    return () => {
      console.log("unMount");
    };
  }, []);

  return <div>짝수입니다</div>;
};

export default EvenCard;
