import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import Header from "../components/Header";

const Form3 = () => {
  const [errorEnSubmit, setErrorEnSubmit] = useState(false);
  const [formData, setFormData] = useState({
    comercialNombre: "",
    comercialTelefono: "",
    comercialEmail: "",
    recPedidosNombre: "",
    recPedidosTelefono: "",
    recPedidosEmail: "",
    recPrevisionesNombre: "",
    recPrevisionesTelefono: "",
    recPrevisionesEmail: "",
    calidadNombre: "",
    calidadTelefono: "",
    calidadEmail: "",
    gerenteNombre: "",
    gerenteTelefono: "",
    gerenteEmail: "",
    adminFactNombre: "",
    adminFactTelefono: "",
    adminFactEmail: "",
    comprasNombre: "",
    comprasTelefono: "",
    comprasEmail: "",
    productoNombre: "",
    productoTelefono: "",
    productoEmail: "",
    caeNombre1: "",
    caeTelefono1: "",
    caeEmail1: "",
    caeNombre2: "",
    caeTelefono2: "",
    caeEmail2: ""
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
      navigate("/form-4");
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
              value={75}
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
              3/4
            </span>
          </span>
        </div>
        <div>
          <form onSubmit={handleSubmit} onInvalid={handleInvalid}>
            <table style={{ marginBottom: "0px" }} className="table">
              <tr className="tr">
                <th className="tableHeader" colSpan={4}>
                  <label style={{ backgroundColor: "#04a1e4", color: "white" }} htmlFor="titulo">
                    <strong>3. CONTACTOS*</strong>
                  </label>
                </th>
              </tr>
              <tr className="tr">
                <th className="th padding"> </th>
                <th className="th padding">NOMBRE DE LA PERSONA*</th>
                <th className="th padding">TELÉFONO*</th>
                <th className="th padding">EMAIL*</th>
              </tr>
              <tbody className="tbody">
                <tr className="tr">
                  <td className="td">COMERCIAL*</td>
                  <td className="td">
                    <label htmlFor="comercialNombre"></label>
                    <input
                      className="input"
                      required
                      type="text"
                      id="comercialNombre"
                      name="comercialNombre"
                      value={formData.comercialNombre}
                      onChange={handleChange}
                    />
                  </td>
                  <td className="td">
                    <label htmlFor="comercialTelefono"></label>
                    <input
                      className="input"
                      required
                      type="text"
                      id="comercialTelefono"
                      name="comercialTelefono"
                      value={formData.comercialTelefono}
                      onChange={handleChange}
                    />
                  </td>
                  <td className="td">
                    <label htmlFor="comercialEmail"></label>
                    <input
                      className="input"
                      required
                      type="text"
                      id="comercialEmail"
                      name="comercialEmail"
                      value={formData.comercialEmail}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr className="tr">
                  <td className="td">RECEPCIÓN PEDIDOS*</td>
                  <td className="td">
                    <label htmlFor="recPedidosNombre"></label>
                    <input
                      className="input"
                      required
                      type="text"
                      id="recPedidosNombre"
                      name="recPedidosNombre"
                      value={formData.recPedidosNombre}
                      onChange={handleChange}
                    />
                  </td>
                  <td className="td">
                    <label htmlFor="recPedidosTelefono"></label>
                    <input
                      className="input"
                      required
                      type="text"
                      id="recPedidosTelefono"
                      name="recPedidosTelefono"
                      value={formData.recPedidosTelefono}
                      onChange={handleChange}
                    />
                  </td>
                  <td className="td">
                    <label htmlFor="recPedidosEmail"></label>
                    <input
                      className="input"
                      required
                      type="text"
                      id="recPedidosEmail"
                      name="recPedidosEmail"
                      value={formData.recPedidosEmail}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr className="tr">
                  <td className="td">RECEPCIÓN PREVISIONES</td>
                  <td className="td">
                    <label htmlFor="recPrevisionesNombre"></label>
                    <input
                      className="input"
                      type="text"
                      id="recPrevisionesNombre"
                      name="recPrevisionesNombre"
                      value={formData.recPrevisionesNombre}
                      onChange={handleChange}
                    />
                  </td>
                  <td className="td">
                    <label htmlFor="recPrevisionesTelefono"></label>
                    <input
                      className="input"
                      type="text"
                      id="recPrevisionesTelefono"
                      name="recPrevisionesTelefono"
                      value={formData.recPrevisionesTelefono}
                      onChange={handleChange}
                    />
                  </td>
                  <td className="td">
                    <label htmlFor="recPrevisionesEmail"></label>
                    <input
                      className="input"
                      type="text"
                      id="recPrevisionesEmail"
                      name="recPrevisionesEmail"
                      value={formData.recPrevisionesEmail}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr className="tr">
                  <td className="td">CALIDAD*</td>
                  <td className="td">
                    <label htmlFor="calidadNombre"></label>
                    <input
                      className="input"
                      required
                      type="text"
                      id="calidadNombre"
                      name="calidadNombre"
                      value={formData.calidadNombre}
                      onChange={handleChange}
                    />
                  </td>
                  <td className="td">
                    <label htmlFor="calidadTelefono"></label>
                    <input
                      className="input"
                      required
                      type="text"
                      id="calidadTelefono"
                      name="calidadTelefono"
                      value={formData.calidadTelefono}
                      onChange={handleChange}
                    />
                  </td>
                  <td className="td">
                    <label htmlFor="calidadEmail"></label>
                    <input
                      className="input"
                      required
                      type="text"
                      id="calidadEmail"
                      name="calidadEmail"
                      value={formData.calidadEmail}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr className="tr">
                  <td className="td">GERENTE</td>
                  <td className="td">
                    <label htmlFor="gerenteNombre"></label>
                    <input
                      className="input"
                      type="text"
                      id="gerenteNombre"
                      name="gerenteNombre"
                      value={formData.gerenteNombre}
                      onChange={handleChange}
                    />
                  </td>
                  <td className="td">
                    <label htmlFor="gerenteTelefono"></label>
                    <input
                      className="input"
                      type="text"
                      id="gerenteTelefono"
                      name="gerenteTelefono"
                      value={formData.gerenteTelefono}
                      onChange={handleChange}
                    />
                  </td>
                  <td className="td">
                    <label htmlFor="gerenteEmail"></label>
                    <input
                      className="input"
                      type="text"
                      id="gerenteEmail"
                      name="gerenteEmail"
                      value={formData.gerenteEmail}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr className="tr">
                  <td className="td">ADMINISTRACIÓN / FACTURACIÓN*</td>
                  <td className="td">
                    <label htmlFor="adminFactNombre"></label>
                    <input
                      className="input"
                      required
                      type="text"
                      id="adminFactNombre"
                      name="adminFactNombre"
                      value={formData.adminFactNombre}
                      onChange={handleChange}
                    />
                  </td>
                  <td className="td">
                    <label htmlFor="adminFactTelefono"></label>
                    <input
                      className="input"
                      required
                      type="text"
                      id="adminFactTelefono"
                      name="adminFactTelefono"
                      value={formData.adminFactTelefono}
                      onChange={handleChange}
                    />
                  </td>
                  <td className="td">
                    <label htmlFor="adminFactEmail"></label>
                    <input
                      className="input"
                      required
                      type="text"
                      id="adminFactEmail"
                      name="adminFactEmail"
                      value={formData.adminFactEmail}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr className="tr">
                  <td className="td">COMPRAS</td>
                  <td className="td">
                    <label htmlFor="comprasNombre"></label>
                    <input
                      className="input"
                      type="text"
                      id="comprasNombre"
                      name="comprasNombre"
                      value={formData.comprasNombre}
                      onChange={handleChange}
                    />
                  </td>
                  <td className="td">
                    <label htmlFor="comprasTelefono"></label>
                    <input
                      className="input"
                      type="text"
                      id="comprasTelefono"
                      name="comprasTelefono"
                      value={formData.comprasTelefono}
                      onChange={handleChange}
                    />
                  </td>
                  <td className="td">
                    <label htmlFor="comprasEmail"></label>
                    <input
                      className="input"
                      type="text"
                      id="comprasEmail"
                      name="comprasEmail"
                      value={formData.comprasEmail}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr className="tr">
                  <td className="td">PRODUCTO</td>
                  <td className="td">
                    <label htmlFor="productoNombre"></label>
                    <input
                      className="input"
                      type="text"
                      id="productoNombre"
                      name="productoNombre"
                      value={formData.productoNombre}
                      onChange={handleChange}
                    />
                  </td>
                  <td className="td">
                    <label htmlFor="productoTelefono"></label>
                    <input
                      className="input"
                      type="text"
                      id="productoTelefono"
                      name="productoTelefono"
                      value={formData.productoTelefono}
                      onChange={handleChange}
                    />
                  </td>
                  <td className="td">
                    <label htmlFor="productoEmail"></label>
                    <input
                      className="input"
                      type="text"
                      id="productoEmail"
                      name="productoEmail"
                      value={formData.productoEmail}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr className="tr">
                  <td className="td" colSpan={1}>
                    <label htmlFor="cae">CAE, COORDINACIÓN ACTIVIDADES EMPRESAIALES</label>
                  </td>
                  <td colSpan={3} id="cae">
                    <tr className="tr noBorderLeft noBorderTop noBorderRight" id="caeRows">
                      <td className="td noBorderLeft noBorderTop noBorderBottom caeData">
                        <label htmlFor="caeNombre1"></label>
                        <input
                          className="input"
                          type="text"
                          id="caeNombre1"
                          name="caeNombre1"
                          value={formData.caeNombre1}
                          onChange={handleChange}
                        />
                      </td>
                      <td className="td noBorderLeft noBorderTop noBorderBottom caeData">
                        <label htmlFor="caeTelefono1"></label>
                        <input
                          className="input"
                          type="text"
                          id="caeTelefono1"
                          name="caeTelefono1"
                          value={formData.caeTelefono1}
                          onChange={handleChange}
                        />
                      </td>
                      <td className="td noBorderRight noBorderTop noBorderBottom caeData">
                        <label htmlFor="caeEmail1"></label>
                        <input
                          className="input"
                          type="text"
                          id="caeEmail1"
                          name="caeEmail1"
                          value={formData.caeEmail1}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                    <tr className="tr noBorderLeft noBorderBottom noBorderRight" id="caeRows">
                      <td className="td noBorderLeft noBorderTop noBorderBottom caeData">
                        {" "}
                        <label htmlFor="caeNombre2"></label>
                        <input
                          className="input"
                          type="text"
                          id="caeNombre2"
                          name="caeNombre2"
                          value={formData.caeNombre2}
                          onChange={handleChange}
                        />
                      </td>
                      <td className="td noBorderLeft noBorderTop noBorderBottom caeData">
                        <label htmlFor="caeTelefono2"></label>
                        <input
                          className="input"
                          type="text"
                          id="caeTelefono2"
                          name="caeTelefono2"
                          value={formData.caeTelefono2}
                          onChange={handleChange}
                        />
                      </td>
                      <td className="td noBorderRight noBorderTop noBorderBottom caeData">
                        <label htmlFor="caeEmail2"></label>
                        <input
                          className="input"
                          type="text"
                          id="caeEmail2"
                          name="caeEmail2"
                          value={formData.caeEmail2}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                  </td>
                </tr>
              </tbody>
            </table>
            {errorEnSubmit && (
              <div className="error">Deben rellenarse los campos marcados con *</div>
            )}
            <span className="buttonContainer">
              <button className="button">Siguiente</button>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form3;
