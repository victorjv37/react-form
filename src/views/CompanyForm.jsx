import React, { useState } from "react";
import { Button, Form, Stack, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Header from "../components/Header";
import FadeTransition from "../transitions/FadeTransition";

const UserForm = () => {
  const [data, setData] = useState(undefined);
  const [show, setShow] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    if (data) {
      setData(data);
      console.log(data);
    } else {
      setData(false);
      console.log(errors);
    }
  };

  return (
    <FadeTransition in={true}>
      <div className="container _container mt-2 p-3">
        <Stack gap={2}>
          <div className="p-2">
            <Header title={"PlexusTech"} />
          </div>
          <div className="p-5 mt-5 form">
            <h4 className="mb-3">FORMULARIO 2/2</h4>
            <Form onSubmit={handleSubmit(onSubmit)} className="form">
              <Form.Group>
                <Form.Control
                  className="mb-3"
                  type="text"
                  placeholder="Empresa"
                  {...register("Empresa", { required: true })}
                />
                <Form.Control
                  className="mb-3"
                  type="text"
                  placeholder="Email"
                  {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
                />
                <Form.Control
                  className="mb-3"
                  placeholder="Número de teléfono"
                  {...register("Mobile number", { required: true, minLength: 6, maxLength: 12 })}
                />
                <Button variant="primary" type="submit">
                  SUBMIT
                </Button>
              </Form.Group>
            </Form>
          </div>
        </Stack>
        {data === false && (
          <Alert show={show} variant="success">
            <Alert.Heading>Error</Alert.Heading>
            <p>Introduce correctamente los datos.</p>
            <hr />
            <div className="d-flex justify-content-end">
              <Button onClick={() => setShow(false)} variant="outline-success">
                Close me
              </Button>
            </div>
          </Alert>
        )}
      </div>
    </FadeTransition>
  );
};

export default UserForm;
