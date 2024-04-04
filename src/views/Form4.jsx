import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import Header from "../components/Header";

const Form4 = () => {
  const [errorEnSubmit, setErrorEnSubmit] = useState(false);
  const [formData, setFormData] = useState({
    condicionesEntrega: "",
    agenciaTransporte: ""
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
      navigate("/confirmation-page");
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
              value={100}
              text={""}
              styles={buildStyles({
                textSize: "30px",
                pathTransitionDuration: 0.5,
                pathColor: "#04a1e4",
                textColor: "#04a1e4",
                trailColor: "#black"
              })}
            />
            <span id="counter" style={{ right: "38px" }}>
              4/4
            </span>
          </span>
        </div>
        <div>
          <form onSubmit={handleSubmit} onInvalid={handleInvalid}>
            <table className="table" style={{ marginBottom: "0px" }}>
              <tbody>
                <th colSpan={4} className="th tableHeader">
                  <label style={{ color: "white", backgroundColor: "#04a1e4" }} htmlFor="titulo">
                    <strong>4. ENTREGAS*</strong>
                  </label>
                </th>
                <tr>
                  <td className="td">
                    <label htmlFor="condicionesEntrega">CONDICIONES DE ENTREGA</label>
                  </td>
                  <td className="td">
                    <input
                      required
                      type="text"
                      id="condicionesEntrega"
                      name="condicionesEntrega"
                      value={formData.condicionesEntrega}
                      onChange={handleChange}
                      className="input"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="td">
                    <label htmlFor="agenciaTransporte">AGENCIA DE TRANSPORTE</label>
                  </td>
                  <td className="td">
                    <input
                      required
                      type="text"
                      id="agenciaTransporte"
                      name="agenciaTransporte"
                      value={formData.agenciaTransporte}
                      onChange={handleChange}
                      className="input"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            {errorEnSubmit && <div className="error">Deben rellenarse todos los campos</div>}
            <span className="buttonContainer">
              <button type="submit" className="button">
                Enviar
              </button>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form4;
