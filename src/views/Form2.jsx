import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import Header from "../components/Header";

const Form2 = () => {
  const [errorEnSubmit, setErrorEnSubmit] = useState(false);
  const [formData, setFormData] = useState({
    entidad: "",
    swift: "",
    iban: "",
    numeroCc: "",
    direccionFacturacion: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    if (!form.checkValidity()) {
      setErrorEnSubmit(true);
    } else {
      setErrorEnSubmit(false);
      console.log("Datos enviados:", formData);
      navigate("/form-3");
    }
    console.log(errorEnSubmit);
  };

  const handleInvalid = (event) => {
    event.preventDefault();
    setErrorEnSubmit(true);
  };

  return (
    <div
      style={{
        margin: "10px",
        minHeight: "65vh"
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Header />
        <span
          style={{
            width: "75px",
            height: "75px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "serif"
          }}
        >
          <CircularProgressbar
            value={50}
            text={""}
            styles={buildStyles({
              textSize: "30px",
              pathTransitionDuration: 0.5,
              pathColor: "#04a1e4",
              textColor: "#04a1e4",
              trailColor: "#black"
            })}
          />
          <span style={{ position: "relative", right: "37px", fontSize: "18px", color: "#04a1e4" }}>
            2/4
          </span>
        </span>
      </div>
      <div
        style={{
          fontFamily: "serif",
          fontSize: "16px"
        }}
      >
        <form onSubmit={handleSubmit} onInvalid={handleInvalid}>
          <table style={{ borderCollapse: "collapse", width: "100%" }}>
            <thead>
              <tr>
                <th
                  colSpan={4}
                  style={{
                    border: "1px solid #000",
                    padding: "8px",
                    backgroundColor: "#04a1e4",
                    color: "white"
                  }}
                >
                  <label htmlFor="titulo">
                    <strong>2. CONDICIONES DE PAGO Y FACTURACIÓN*</strong>
                  </label>
                </th>
              </tr>
              <tr style={{ border: "1px solid #000", padding: "8px" }}>
                <td colSpan={1} style={{ border: "1px solid #000", padding: "8px", width: "25%" }}>
                  PAGO A: 60 días
                </td>
                <td colSpan={1} style={{ border: "1px solid #000", padding: "8px", width: "25%" }}>
                  TRANSFERENCIA
                </td>
                <td colSpan={1} style={{ border: "1px solid #000", padding: "8px", width: "25%" }}>
                  MONEDA / DIVISA
                </td>
                <td colSpan={1} style={{ border: "1px solid #000", padding: "8px", width: "25%" }}>
                  €
                </td>
              </tr>
              <tr>
                <td colSpan={4} style={{ border: "1px solid #000", padding: "8px" }}>
                  DÍAS DE PAGO: 1 y 15
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={1} style={{ border: "1px solid #000", padding: "8px", width: "23%" }}>
                  DATOS BANCARIOS
                </td>
                <td colSpan={3} style={{ border: "1px solid #000" }}>
                  <tr>
                    <td style={{ padding: "8px", borderBottom: "1px solid #000", width: "15%" }}>
                      <label htmlFor="entidad">ENTIDAD</label>
                    </td>
                    <td
                      style={{
                        border: "1px solid #000",
                        padding: "8px",
                        borderTop: "none",
                        borderRight: "none"
                      }}
                    >
                      <input
                        required
                        type="text"
                        id="entidad"
                        name="entidad"
                        value={formData.entidad}
                        onChange={handleChange}
                        style={{
                          padding: "2px",
                          border: "none",
                          width: "calc(100% - 4px)",
                          outline: "none"
                        }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        padding: "8px",
                        borderTop: "1px solid #000",
                        borderBottom: "1px solid #000"
                      }}
                    >
                      <label htmlFor="swift">SWIFT</label>
                    </td>
                    <td style={{ border: "1px solid #000", padding: "8px", borderRight: "none" }}>
                      <input
                        required
                        type="text"
                        id="swift"
                        name="swift"
                        value={formData.swift}
                        onChange={handleChange}
                        style={{
                          padding: "2px",
                          border: "none",
                          width: "calc(100% - 4px)",
                          outline: "none"
                        }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        padding: "8px",
                        borderTop: "1px solid #000",
                        borderBottom: "1px solid #000"
                      }}
                    >
                      <label htmlFor="iban">IBAN</label>
                    </td>
                    <td style={{ border: "1px solid #000", padding: "8px", borderRight: "none" }}>
                      <input
                        required
                        type="text"
                        id="iban"
                        name="iban"
                        value={formData.iban}
                        onChange={handleChange}
                        style={{
                          padding: "2px",
                          border: "none",
                          width: "calc(100% - 4px)",
                          outline: "none"
                        }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "8px", borderTop: "1px solid #000" }}>
                      <label htmlFor="numeroCc">Nº CC</label>
                    </td>
                    <td
                      style={{
                        border: "1px solid #000",
                        padding: "8px",
                        borderBottom: "none",
                        borderRight: "none"
                      }}
                    >
                      <input
                        required
                        type="text"
                        id="numeroCc"
                        name="numeroCc"
                        value={formData.numeroCc}
                        onChange={handleChange}
                        style={{
                          padding: "2px",
                          border: "none",
                          width: "calc(100% - 4px)",
                          outline: "none"
                        }}
                      />
                    </td>
                  </tr>
                </td>
              </tr>
              <tr>
                <td colSpan={1} style={{ border: "1px solid #000", padding: "8px" }}>
                  <label htmlFor="direccionFacturacion">DIRECCIÓN DE FACTURACION</label>
                </td>
                <td colSpan={3} style={{ border: "1px solid #000", padding: "8px" }}>
                  <input
                    required
                    type="text"
                    id="direccionFacturacion"
                    name="direccionFacturacion"
                    value={formData.direccionFacturacion}
                    onChange={handleChange}
                    style={{
                      padding: "2px",
                      border: "none",
                      width: "calc(100% - 4px)",
                      outline: "none"
                    }}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          {errorEnSubmit && (
            <div style={{ color: "red", display: "flex", justifyContent: "center" }}>
              Deben rellenarse todos los campos
            </div>
          )}
          <span style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <button
              type="submit"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "10px",
                border: "1px solid #000",
                color: "white",
                backgroundColor: "#04a1e4",
                padding: "10px",
                fontFamily: "serif",
                fontSize: "20px"
              }}
            >
              Siguiente
            </button>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Form2;
