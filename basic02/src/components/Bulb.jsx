import { useState } from "react";
import styles from "./Button/Button.module.css";

const Bulb = () => {
  const [light, setLight] = useState("OFF");
  console.log(light);
  return (
    <div>
      <div>
        {light === "ON" ? (
          <h1 style={{ backgroundColor: "#FCC737" }}>ON</h1>
        ) : (
          <h1 style={{ backgroundColor: "#A6AEBF" }}>OFF</h1>
        )}
      </div>
      <button
        className={styles.button}
        onClick={() => {
          setLight(light === "ON" ? "OFF" : "ON");
        }}
      >
        {light === "ON" ? "끄기" : "켜기"}
      </button>
    </div>
  );
};

export default Bulb;
