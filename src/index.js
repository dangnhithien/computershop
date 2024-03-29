import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import "./assets/scss/style.scss";
import "antd/dist/antd.min.css";
import "./admin/assets/styles/main.css";
import "./admin/assets/styles/responsive.css";

ReactDOM.render(
  // <React.StrictMode>

  <App />,
  // </React.StrictMode>
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
