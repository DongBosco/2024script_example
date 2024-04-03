import React, {useState} from "react";
import ModalView from "./components/ModalView"
import "./assets/css/style.css";

function App() {
  let [mView, setMView] = useState(false);
  let [vNum, setVNum] = useState(1);
  let viewList = [
    {
      title: "안녕하세요!!!",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, vitae?",
    },
    {
      title: "만나서반갑습니다.",
      content:
        " Possimus ratione odio eos nemo sunt enim animi officia consectetur?",
    },
    {
      title: "홈페이지를 오픈",
      content: "Odio fugit dolor, perferendis minus rem optio a nihil eos!",
    },
    {
      title: "만나서반갑습니다.",
      content:
        " Est repellendus quod itaque magnam deleniti, cupiditate saepe aspernatur eaque?",
    },
    {
      title: "만나서반갑습니다.",
      content:
        " Quisquam rem unde id nobis explicabo error beatae reiciendis incidunt.",
    },
  ];
  function modalView(idx) {
    setMView(true);
    setVNum(idx);
  }
  function modalClose() {
    setMView(false);
  }
  return (
    <>
      <div>
        <ul className="viewList">
          {viewList.map((item, idx) => {
            return (
              <li
                onClick={() => {
                  modalView(idx);
                }}
              >
                {idx + 1}. {viewList[idx].title}
              </li>
            );
          })}
        </ul>
      </div>
      {mView == true ? (
        <ModalView onclick={modalClose} viewListData={viewList} vNum={vNum} />
      ) : null}
    </>
  );
}
 


export default App;