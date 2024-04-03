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
    <div className="mainContainer">
      <div id="container">
        <div className="header">
          <Header />
          <span
            style={{
              width: "75px",
              height: "75px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
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
            <span id="counter">2/4</span>
          </span>
        </div>
        <div>
          <form onSubmit={handleSubmit} onInvalid={handleInvalid}>
            <table className="table" style={{ marginBottom: "0px" }}>
              <tbody className="tbody">
                <th colSpan={4} className="tableHeader">
                  <label style={{ backgroundColor: "#04a1e4", color: "white" }} htmlFor="titulo">
                    <strong>2. CONDICIONES DE PAGO Y FACTURACIÓN*</strong>
                  </label>
                </th>
                <tr className="tr">
                  <td className="tituloDatosBancarios" style={{ paddingRight: "6px" }}>
                    DATOS BANCARIOS
                  </td>
                  <tr className="tr datosBancarios noBorderTop noBorderRight">
                    <td className="td tituloDatosBancarios padding noBorderTop">
                      <label htmlFor="entidad">ENTIDAD</label>
                    </td>
                    <td className="td noBorderTop noBorderRight" colSpan="3">
                      <input
                        required
                        type="text"
                        id="entidad"
                        name="entidad"
                        value={formData.entidad}
                        onChange={handleChange}
                        className="input datosBancarios"
                      />
                    </td>
                  </tr>
                  <tr className="tr datosBancarios noBorderRight">
                    <td className="td padding">
                      <label htmlFor="swift">SWIFT</label>
                    </td>
                    <td className="td noBorderRight" colSpan="3">
                      <input
                        required
                        type="text"
                        id="swift"
                        name="swift"
                        value={formData.swift}
                        onChange={handleChange}
                        className="input datosBancarios"
                      />
                    </td>
                  </tr>
                  <tr className="tr datosBancarios noBorderRight">
                    <td className="td tituloDatosBancarios padding">
                      <label htmlFor="iban">IBAN</label>
                    </td>
                    <td className="td noBorderRight" colSpan="3">
                      <input
                        required
                        type="text"
                        id="iban"
                        name="iban"
                        value={formData.iban}
                        onChange={handleChange}
                        className="input datosBancarios"
                      />
                    </td>
                  </tr>
                  <tr className="tr datosBancarios noBorderBottom noBorderRight">
                    <td className="td tituloDatosBancarios padding noBorderBottom">
                      <label htmlFor="numeroCc">Nº CC</label>
                    </td>
                    <td className="td noBorderBottom noBorderRight" colSpan="3">
                      <input
                        required
                        type="text"
                        id="numeroCc"
                        name="numeroCc"
                        value={formData.numeroCc}
                        onChange={handleChange}
                        className="input datosBancarios"
                      />
                    </td>
                  </tr>
                </tr>
                <tr className="tr">
                  <td className="td tituloDatosBancarios">
                    <label htmlFor="direccionFacturacion">DIRECCIÓN DE FACTURACION</label>
                  </td>
                  <td className="td">
                    <input
                      required
                      type="text"
                      id="direccionFacturacion"
                      name="direccionFacturacion"
                      value={formData.direccionFacturacion}
                      onChange={handleChange}
                      className="input direccionFacturacion"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            {errorEnSubmit && <div className="error">Deben rellenarse todos los campos</div>}
            <span className="buttonContainer">
              <button className="button" type="submit">
                Siguiente
              </button>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form2;
