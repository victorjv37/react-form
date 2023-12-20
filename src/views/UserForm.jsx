import React, { useEffect, useState } from "react";
import { Button, Form, Stack } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import FadeTransition from "../transitions/FadeTransition";
import { ErrorMessage } from "@hookform/error-message";

const UserForm = () => {
  const [data, setData] = useState(undefined);
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    criteriaMode: "all"
  });

  const onSubmit = (data) => {
    if (data) {
      setData(data);
      navigate("/companyForm");
    } else {
      console.log(errors);
    }
  };

  return (
    <FadeTransition in={true}>
      <div className="_container container mt-2 p-3">
        <Stack gap={2}>
          <div className="p-2">
            <Header title={"Solicitud de alta"} />
          </div>
          <div className="p-5 mt-5 form">
            <h4 className="mt-3">FORMULARIO 1/2</h4>
            <Form onSubmit={handleSubmit(onSubmit)} className="form">
              <Form.Group>
                <Form.Control
                  className="mt-3"
                  type="text"
                  placeholder="Nombre"
                  {...register("Nombre", {
                    required: "Este campo es requerido.",
                    maxLength: {
                      value: 80,
                      message: "Este campo debe tener máximo 80 caracteres"
                    }
                  })}
                />
                <ErrorMessage
                  errors={errors}
                  name="Nombre"
                  render={({ messages }) =>
                    messages &&
                    Object.entries(messages).map(([type, message]) => (
                      <p className="error" key={type}>
                        {message}
                      </p>
                    ))
                  }
                />
                <Form.Control
                  className="mt-3"
                  type="text"
                  placeholder="Apellidos"
                  {...register("Apellidos", {
                    required: "Este campo es requerido.",
                    maxLength: {
                      value: 80,
                      message: "Este campo debe tener máximo 80 caracteres"
                    }
                  })}
                />
                <ErrorMessage
                  errors={errors}
                  name="Apellidos"
                  render={({ messages }) =>
                    messages &&
                    Object.entries(messages).map(([type, message]) => (
                      <p className="error" key={type}>
                        {message}
                      </p>
                    ))
                  }
                />
                <Form.Control
                  className="mt-3"
                  type="text"
                  placeholder="DNI"
                  {...register("DNI", {
                    required: "Este campo es requerido.",
                    pattern: {
                      value: /[0-9]{8}[A-Za-z]{1}/i,
                      message: "Este campo debe tener formato DNI"
                    }
                  })}
                />
                <ErrorMessage
                  errors={errors}
                  name="DNI"
                  render={({ messages }) =>
                    messages &&
                    Object.entries(messages).map(([type, message]) => (
                      <p className="error" key={type}>
                        {message}
                      </p>
                    ))
                  }
                />
                <Button className="mt-3" variant="primary" type="submit">
                  SUBMIT
                </Button>
              </Form.Group>
            </Form>
          </div>
        </Stack>
      </div>
    </FadeTransition>
  );
};

export default UserForm;
