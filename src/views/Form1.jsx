import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import Header from "../components/Header";

const Form1 = () => {
  const [errorEnSubmit, setErrorEnSubmit] = useState(false);
  const [formData, setFormData] = useState({
    razonSocial: "",
    nombreEmpresa: "",
    cif: "",
    telefono: "",
    direccion: "",
    codigoPostal: "",
    poblacion: "",
    correoElectronico: "",
    paginaWeb: ""
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
      navigate("/form-2");
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
              value={25}
              text={""}
              styles={buildStyles({
                textSize: "30px",
                pathTransitionDuration: 0.5,
                pathColor: "#04a1e4",
                textColor: "#04a1e4",
                trailColor: "#black"
              })}
            />
            <span
              style={{
                position: "relative",
                right: "37px",
                fontSize: "18px",
                color: "#04a1e4"
              }}
            >
              1/4
            </span>
          </span>
        </div>
        <div>
          <form onSubmit={handleSubmit} onInvalid={handleInvalid}>
            <table className="table">
              <tbody className="tbody">
                <th className="tableHeader" colSpan={4}>
                  <label style={{ backgroundColor: "#04a1e4", color: "white" }} htmlFor="titulo">
                    <strong>1. DATOS GENERALES DE LA EMPRESA*</strong>
                  </label>
                </th>
                <tr className="tr">
                  <td className="td">
                    <label htmlFor="razonSocial">RAZÓN SOCIAL</label>
                  </td>
                  <td className="td">
                    <input
                      className="input"
                      required
                      type="text"
                      id="razonSocial"
                      name="razonSocial"
                      value={formData.razonSocial}
                      onChange={handleChange}
                    />
                  </td>
                  <td className="td">
                    <label htmlFor="nombreEmpresa">NOMBRE DE LA EMPRESA</label>
                  </td>
                  <td className="td">
                    <input
                      className="input"
                      required
                      type="text"
                      id="nombreEmpresa"
                      name="nombreEmpresa"
                      value={formData.nombreEmpresa}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr className="tr">
                  <td className="td">
                    <label htmlFor="cif">CIF</label>
                  </td>
                  <td className="td">
                    <input
                      className="input"
                      required
                      type="text"
                      id="cif"
                      name="cif"
                      value={formData.cif}
                      onChange={handleChange}
                    />
                  </td>
                  <td className="td">
                    <label htmlFor="telefono">TELÉFONO</label>
                  </td>
                  <td className="td">
                    <input
                      className="input"
                      required
                      type="text"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr className="tr">
                  <td className="td">
                    <label htmlFor="direccion">DIRECCIÓN</label>
                  </td>
                  <td colSpan={3}>
                    <input
                      className="input"
                      required
                      type="text"
                      id="direccion"
                      name="direccion"
                      value={formData.direccion}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr className="tr">
                  <td className="td">
                    <label htmlFor="codigoPostal">C.P</label>
                  </td>
                  <td className="td">
                    <input
                      className="input"
                      required
                      type="text"
                      id="codigoPostal"
                      name="codigoPostal"
                      value={formData.codigoPostal}
                      onChange={handleChange}
                    />
                  </td>
                  <td className="td">
                    <label htmlFor="poblacion">POBLACIÓN</label>
                  </td>
                  <td className="td">
                    <input
                      className="input"
                      required
                      type="text"
                      id="poblacion"
                      name="poblacion"
                      value={formData.poblacion}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr className="tr">
                  <td className="td">
                    <label htmlFor="correoElectronico">CORREO ELECTRÓNICO</label>
                  </td>
                  <td colSpan={3}>
                    <input
                      className="input"
                      required
                      type="text"
                      id="correoElectronico"
                      name="correoElectronico"
                      value={formData.correoElectronico}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr className="tr">
                  <td className="td">
                    <label htmlFor="paginaWeb">PÁGINA WEB</label>
                  </td>
                  <td colSpan={3}>
                    <input
                      className="input"
                      required
                      type="text"
                      id="paginaWeb"
                      name="paginaWeb"
                      value={formData.paginaWeb}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            {errorEnSubmit && <div className="error">Deben rellenarse todos los campos</div>}
            <span className="buttonContainer">
              <button type="submit" className="button">
                Siguiente
              </button>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form1;
