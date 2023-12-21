import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router";
import CompanyForm from "../src/views/CompanyForm";
import RedirectingView from "../src/views/RedirectingView";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/companyForm" element={<CompanyForm />} />
        <Route path="/redirectingView" element={<RedirectingView />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
