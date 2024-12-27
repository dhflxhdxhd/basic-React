import emotion1 from "./../assets/emotion/emotion1.png";
import emotion2 from "./../assets/emotion/emotion2.png";
import emotion3 from "./../assets/emotion/emotion3.png";
import emotion4 from "./../assets/emotion/emotion4.png";
import emotion5 from "./../assets/emotion/emotion5.png";

const emotionImages = {
  1: emotion1,
  2: emotion2,
  3: emotion3,
  4: emotion4,
  5: emotion5,
};

function getEmotionImage(emotionId) {
  return emotionImages[emotionId] || emotion1;
}

export default getEmotionImage;
