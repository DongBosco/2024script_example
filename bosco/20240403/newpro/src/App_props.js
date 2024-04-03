import React, {useState} from "react";
import "./assets/css/style.css";

function App() {
  // let num = 20;
  let [num, setNum] = useState(10);
  return (
    <>
      <div className="wrap">
        할아버지 {num}
        <button
          onClick={() => {
            setNum(20);
          }}
        >
          숫자변경
        </button>
        <Child1 넘버={num} />
      </div>
    </>
  );
}

function Child1(props) {
  console.log(props);
  return (
    <>
      <div className="wrap">
        아들1 {props.넘버}
        <Child2 childnum={props.넘버} />
      </div>
    </>
  );
}

function Child2(props) {
  return (
    <>
      <div className="wrap">아들자식2 {props.childnum}</div>
    </>
  );
}

export default App;
