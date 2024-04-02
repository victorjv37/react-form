import * as React from "react";
import Header from "../components/Header";

const ConfirmationPage = () => {
  return (
    <div style={{ minHeight: "65vh", width: "100%", marginTop: "10px" }}>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontFamily: "serif"
        }}
      >
        <div style={{ marginTop: "42px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                color: "green",
                fontSize: "25px",
                marginTop: "37px"
              }}
            >
              <h4>Formularios enviados con éxito</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
