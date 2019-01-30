import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";
import Layout from "./Components/Layout";

var myArr = ["Mehmet KONUK", "Yarak Kurek", "Deli Bekir"];
ReactDOM.render(
  <div>
    <Layout
      footer="Polish Japanese Academy of Information Technology"
      myArray={myArr}
    />
  </div>,
  document.getElementById("app")
);