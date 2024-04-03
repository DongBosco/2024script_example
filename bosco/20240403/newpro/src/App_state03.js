import React, {useState} from "react";
import "./assets/css/style.css";

function App() {
  const [num, setNum] = useState(0);
  const [data, setData] = useState([
    "1.한Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, nesciunt!",
    "2.성Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, nesciunt!",
    "3.용Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, nesciunt!",
    "4.용Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, nesciunt!",
  ]);
  return (
    <div>
      <ul className="menu">
        {data.map((item, idx) => {
          return (
            <>
              <li
                className={`tjklte ${idx == num ? "active" : ""}`}
                onClick={() => {
                  setNum(idx);
                }}
              >
                tab{idx + 1}
              </li>
            </>
          );
        })}
      </ul>
      <div>{data[num]}</div>
    </div>
  );
}

export default App;
