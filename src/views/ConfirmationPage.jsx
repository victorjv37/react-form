import * as React from "react";
import Header from "../components/Header";

const ConfirmationPage = () => {
  return (
    <div style={{ marginTop: "42px" }}>
      <div className="mainContainer">
        <div id="container">
          <Header />
          <h4 style={{ textAlign: "center", color: "green", marginTop: "30vh" }}>
            Formulario enviado con éxito
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
