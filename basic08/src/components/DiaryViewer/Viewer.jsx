import "./Viewer.css";
import getEmotionImage from "../../utils/getEmotionImage";
import { EmotionList } from "../../utils/mockData";
const Viewer = () => {
  const currentEmotionId = 5;
  const currentEmotion = EmotionList.find(
    (emotion) => emotion.emotionId === currentEmotionId
  );
  return (
    <div className="viewer">
      <section className="viewer__emotion">
        <p className="viewer__title"> 오늘의 감정</p>
        <div className={`viewer__emotion-img viewer__emotion-img${1}`}>
          <img src={getEmotionImage(1)} alt="emotion" />
          <div>{currentEmotion.name}</div>
        </div>
      </section>
      <section className="viewer__content">
        <p className="viewer__title">오늘의 일기</p>
        <div>
          <p className="viewer__content-text">내용 공간</p>
        </div>
      </section>
    </div>
  );
};

export default Viewer;
