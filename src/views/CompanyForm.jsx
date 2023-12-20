import React, { useState } from "react";
import { Button, Form, Stack } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Header from "../components/Header";
import FadeTransition from "../transitions/FadeTransition";
import { ErrorMessage } from "@hookform/error-message";

const UserForm = () => {
  const [data, setData] = useState(undefined);
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
      console.log(data);
    }
  };

  return (
    <FadeTransition in={true}>
      <div className="container _container mt-2 p-3">
        <Stack gap={2}>
          <div className="p-2">
            <Header title={"Solicitud de alta"} />
          </div>
          <div className="p-5 mt-5 form">
            <h4 className="mt-3">FORMULARIO 2/2</h4>
            <Form onSubmit={handleSubmit(onSubmit)} className="form">
              <Form.Group>
                <Form.Control
                  className="mt-3"
                  type="text"
                  placeholder="Empresa"
                  {...register("Empresa", {
                    required: "Este campo es requerido."
                  })}
                />
                <ErrorMessage
                  errors={errors}
                  name="Empresa"
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
                  placeholder="Email"
                  {...register("Email", {
                    required: "Este campo es requerido.",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Este campo debe tener formato de correo electrónico.",
                      maxLength: {
                        value: 60,
                        message: "Este campo debe tener máximo 60 caracteres"
                      }
                    }
                  })}
                />
                <ErrorMessage
                  errors={errors}
                  name="Email"
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
                  placeholder="Número de teléfono"
                  {...register("Numero de telefono", {
                    required: "Este campo es requerido.",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Solo pueden introducirse números en este campo."
                    },
                    minLength: {
                      value: 6,
                      message: "Este campo debe tener mínimo 6 caracteres"
                    },
                    maxLength: {
                      value: 12,
                      message: "Este campo debe tener máximo 12 caracteres"
                    }
                  })}
                />
                <ErrorMessage
                  errors={errors}
                  name="Numero de telefono"
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
                  placeholder="Descripción"
                  {...register("Descripcion", {
                    required: "Este campo es requerido.",
                    maxLength: {
                      value: 120,
                      message: "Este campo debe tener máximo 120 caracteres."
                    }
                  })}
                />
                <ErrorMessage
                  errors={errors}
                  name="Descripcion"
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
