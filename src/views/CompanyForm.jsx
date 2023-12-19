import React from "react";
import { Button, Form, Stack } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Header from "../components/Header";

const UserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    if (data) {
      console.log(data);
    } else {
      console.log(errors);
    }
  };

  return (
    <div className="container mt-2 p-3">
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
                placeholder="Company name"
                {...register("Company name", { required: true })}
              />
              <Form.Control
                className="mb-3"
                type="text"
                placeholder="Email"
                {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
              />
              <Form.Control
                className="mb-3"
                placeholder="Phone Number"
                {...register("Mobile number", { required: true, minLength: 6, maxLength: 12 })}
              />
              <Button variant="primary" type="submit">
                SUBMIT
              </Button>
            </Form.Group>
          </Form>
        </div>
      </Stack>
    </div>
  );
};

export default UserForm;
