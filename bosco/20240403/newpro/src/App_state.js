/* eslint-disable */
import {useState} from "react";
import "./App.css";

function App() {
  const 내용 = "testtesttest";
  const styleText = {fontSize: "2em", color: "red"};
  const btnClick = function () {
    console.log("test");
  };

  const [title, setTitle] = useState(["seoul", "busan", "daegu"]);
  const changData = () => {
    const newArray = [...title]; // ["seoul", "busan", "daegu"]
    newArray[0] = "inchon"; // ["inchon", "busan", "daegu"]
    setTitle(newArray);
  };

  const [num, setNum] = useState(0);
  const changeNum = () => {
    setNum(1);
  };
  const zeroNum = () => {
    setNum(0);
  };

  const [myNum, setMyNum] = useState(0);
  return (
    <>
      {num}
      <div className="text" style={styleText}>
        <button onClick={changData}>클릭</button>
      </div>

      <button onClick={changeNum}>클릭넘</button>
      <button onClick={zeroNum}>원래값</button>

      <div>
        {title[0]}
        <span
          onClick={() => {
            setMyNum(myNum + 1);
          }}
          style={{cursor: "pointer"}}
        >
          ❤
        </span>
        {myNum}
      </div>
    </>
  );
}

export default App;
