import React, {useEffect, useState} from "react";
import "./assets/css/style.scss"
import axios from "axios";

function App() {
  const [viewData, setViewData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [listCnt, setListCnt] = useState(15);

  useEffect(()=>{
    axios
    .get("https://jsonplaceholder.typicode.com/posts?_page=4%_limit=10")
    .then((res)=>{
      console.log(res);
      setViewData(res.data);

      console.log(res.headers["x-total-count"]);
      let totalRecord = res.headers["x-total-count"];
      let totalPage = Math.ceil(totalRecord/listCnt);
      console.log(totalPage)
      setTotalPages(totalPage);
    })
    .catch((err)=>{
      console.log(err);
    });
  },[])
  return (
    <>
      {totalPages}
      {
        viewData.map((item)=>{
          return(
            <>
              <div>{item.title}</div>
            </>
          )
        })
      }
    </>
  );
}

export default App;
