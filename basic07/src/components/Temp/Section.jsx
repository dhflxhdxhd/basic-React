import { useContext } from "react";
import { LevelContext } from "../../contexts/LevelContext";

export default function Section({ level, children }) {
  const levelContext = useContext(LevelContext);
  console.log(levelContext);
  //   console.log(children);
  return (
    <section
      className="section"
      style={{
        border: "1px solid black",
        margin: "10px",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      <LevelContext.Provider value={levelContext + 1}>
        {levelContext + 1}
        {children}
      </LevelContext.Provider>
    </section>
  );
}
