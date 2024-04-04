import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import Form2 from "./views/Form2";
import Form3 from "./views/Form3";
import Form4 from "./views/Form4";
import ConfirmationPage from "./views/ConfirmationPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/form-2" element={<Form2 />} />
        <Route path="/form-3" element={<Form3 />} />
        <Route path="/form-4" element={<Form4 />} />
        <Route path="/confirmation-page" element={<ConfirmationPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
