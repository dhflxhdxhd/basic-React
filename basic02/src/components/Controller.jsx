import "../App.css";
import Button from "./Button";

const Controller = ({ onClickButton }) => {
  const buttons = [
    { text: "-100", value: -100 },
    { text: "-10", value: -10 },
    { text: "-1", value: -1 },
    { text: "+1", value: 1 },
    { text: "+10", value: 10 },
    { text: "+100", value: 100 },
  ];
  return (
    <div className="controller">
      {buttons.map((button, index) => (
        <Button
          key={index}
          text={button.text}
          onClickButton={() => {
            console.log(button.text); // 버튼의 텍스트 로그 출력
            onClickButton(button.value); // 버튼 값 전달
          }}
        />
      ))}
    </div>
  );
};

export default Controller;
{
  /* <Button
        text="-1"
        onClickButton={() => {
          console.log("-1");
          onClickButton(-1);
        }}
      />
      <Button
        text="-10"
        onClickButton={() => {
          console.log("-10");
          onClickButton(-10);
        }}
      />
      <Button
        text="-100"
        onClickButton={() => {
          console.log("-100");
          onClickButton(-100);
        }}
      />
      <Button
        text="+100"
        onClickButton={() => {
          console.log("+100");
          onClickButton(+100);
        }}
      />
      <Button
        text="+10"
        onClickButton={() => {
          console.log("+10");
          onClickButton(+10);
        }}
      />
      <Button
        text="+1"
        onClickButton={() => {
          console.log("+1");
          onClickButton(+1);
        }}
      /> */
}
