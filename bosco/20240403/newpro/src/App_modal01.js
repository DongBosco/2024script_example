import React, {useState} from "react";
import "./assets/css/style.css";

function App() {
  let [mView, setMView] = useState(false);
  function modalView() {
    // alert("test");
    setMView(true);
  }
  function modalClose() {
    setMView(false);
  }
  return (
    <>
      <div>
        <button className="btn primary" onClick={modalView}>
          모달창열기
        </button>
      </div>
      {mView == true ? <Modal onclick={modalClose} /> : null}
    </>
  );
}

function Modal(props) {
  return (
    <>
      <div className="modalWrap">
        <div className="modal">
          모달창
          <button onClick={props.onclick}>닫기</button>
        </div>
      </div>
    </>
  );
}

export default App;