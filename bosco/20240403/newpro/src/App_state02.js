import React, {useState} from "react";
import "./assets/css/style.css";

function App() {
  const [title, setTitle] = useState(["서울", "인천"]);
  function titleChange() {
    // setTitle(["서울1", "인천"]);
    let newArray = [...title]; // ["서울", "인천"]
    newArray[0] = "경기";
    newArray[1] = "부산";

    console.log(newArray);
    setTitle(newArray);
  }

  function addTitle() {
    let newArray = [...title];
    newArray.push("대구");
    setTitle(newArray);
  }
  return (
    <div>
      <div>{title}</div>
      <div
        className="btn"
        style={{display: "inline-block"}}
        onClick={titleChange}
      >
        클릭
      </div>
      <div
        className="btn primary"
        style={{display: "inline-block"}}
        onClick={addTitle}
      >
        추가
      </div>
    </div>
  );
}

export default App;
