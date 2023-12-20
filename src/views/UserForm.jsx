import React, { useEffect, useState } from "react";
import { Button, Form, Stack } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import FadeTransition from "../transitions/FadeTransition";

const UserForm = () => {
  const [data, setData] = useState(undefined);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    if (data) {
      setData(data);
      navigate("/companyForm");
    } else {
      console.log(errors);
    }
  };

  useEffect(() => {
    if (data) {
    }
  }, [data]);

  return (
    <FadeTransition in={true}>
      <div className="_container container mt-2 p-3">
        <Stack gap={2}>
          <div className="p-2">
            <Header title={"PlexusTech"} />
          </div>
          <div className="p-5 mt-5 form">
            <h4 className="mb-3">FORMULARIO 1/2</h4>
            <Form onSubmit={handleSubmit(onSubmit)} className="form">
              <Form.Group>
                <Form.Control
                  className="mb-3"
                  type="text"
                  placeholder="Nombre"
                  {...register("Nombre", { required: true, maxLength: 80 })}
                />
                <Form.Control
                  className="mb-3"
                  type="text"
                  placeholder="Apellidos"
                  {...register("Apellidos", { required: true, maxLength: 100 })}
                />
                <Form.Control
                  className="mb-3"
                  type="text"
                  placeholder="DNI"
                  {...register("DNI", { required: true, pattern: /[0-9]{8}[A-Za-z]{1}/i })}
                />
                <Button variant="primary" type="submit">
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
