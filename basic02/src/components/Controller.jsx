import "../App.css";
import Button from "./Button";

const Controller = () => {
  return (
    <div className="controller">
      <Button text="-1" />
      <Button text="-10" />
      <Button text="-100" />
      <Button text="+100" />
      <Button text="+10" />
      <Button text="+1" />
    </div>
  );
};

export default Controller;
