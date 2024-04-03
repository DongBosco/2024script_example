import "./assets/css/style.css";
import logo from "./logo.svg";

function App() {
  const myStyle = {display: "flex", backgroundColor: "red"};
  function view(name) {
    alert("test");
    console.log("당신의 이름은 " + name);
  }

  function countNum() {
    return 100;
  }
  const yourname = "이순신";

  return (
    <div>
      <div style={myStyle}>
        <h1 className="logo">test</h1>
        <span>test</span>
      </div>
      <button className="btn info" onClick={view}>
        클릭
      </button>
      <button
        className="btn primary"
        onClick={() => {
          view("홍길동");
        }}
      >
        클릭
      </button>
      <button className="btn">클릭</button>
      {countNum()} / {yourname}
      <img src={logo} />
    </div>
  );
}

export default App;
