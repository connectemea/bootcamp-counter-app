import "./App.css";
import { useState } from "react";
import Title from "./components/Title";
import Count from "./components/Count";
import CounterButton from "./components/CounterButton";
import styles from "./styles.module.css";
function App() {
  const [count, setCount] = useState(0);
  function increaseCount(){
    setCount(
      count + 1
    )
  }
  function decreaseCount(){
    setCount(
      count - 1
    )
  }
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.counterContainer}>
        <Title title={"counter app"} />
        <div className={styles.counterInputSection}>
          <CounterButton onClickHandler={decreaseCount}>-</CounterButton>
          <Count value={count} />
          <CounterButton onClickHandler={increaseCount}>+</CounterButton>
        </div>
      </div>
    </div>
  );
}
export default App;