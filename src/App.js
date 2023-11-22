import "./App.css";
import data from "./data";
import { useState } from "react";
import { Main } from "./Main";

import { Routes, Route, Link, useNavigate } from "react-router-dom";
function App() {
  let [shoes] = useState(data);
  let navigate = useNavigate(); //ㅔ이지 이동도와줌

  return (
    <div className="App">
      <div className="main-bg">
        <Main />
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
              <div className="row">
                {shoes.map(function (a, i) {
                  return <Card shoes={shoes[i]} i={i + 1} />;
                })}
              </div>
            </div>
          }
        />
        <Route
          path="/detail"
          element={
            <div className="container">
              <div className="row">
                {shoes.map(function (a, i) {
                  return <Detail shoes={shoes[i]} i={i + 1} />;
                })}
              </div>
            </div>
          }
        />
      </Routes>
    </div>
  );

  function Card(props) {
    return (
      <div className="col-md-4">
        <img
          src={"https://codingapple1.github.io/shop/shoes" + props.i + ".jpg"}
          width="80%"
        />
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.price}</p>
      </div>
    );
  }

  function Detail(props) {
    return (
      <div className="row">
        <div className="col-md-6">
          <img
            src={"https://codingapple1.github.io/shop/shoes" + props.i + ".jpg"}
            width="100%"
          />
        </div>

        <h4 className="pt-5">{props.shoes.title}</h4>
        <p>{props.shoes.content}</p>
        <p>{props.shoes.price}원</p>
        <button className="btn btn-danger">주문하기</button>
      </div>
    );
  }
}

export default App;
