import React, { useState, useRef, useEffect } from "react";
import { Button, Form, Stack } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Header from "../components/Header";
import { ErrorMessage } from "@hookform/error-message";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const UserForm = () => {
  const [data, setData] = useState(undefined);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const body = useRef(null);
  const formContainer = useRef(null);
  const titleRef = useRef();

  useEffect(() => {
    setIsVisible(true);
    const startAnimation = () => {
      gsap.fromTo(
        formContainer.current,
        { x: "-100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 1, ease: Power3.easeInOut }
      );
    };

    setTimeout(startAnimation, 0);
  }, []);

  useEffect(() => {
    setIsVisible(true);
    const startTitleAnimation = () => {
      gsap.fromTo(
        titleRef.current,
        { y: "100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 1, ease: Power3.easeInOut }
      );
    };

    setTimeout(startTitleAnimation, 0);
  }, []);

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
      navigate("/redirectingView");
    } else {
      console.log(errors);
    }
  };

  return (
    isVisible && (
      <div className="container _container mt-2 p-3">
        <Stack gap={2}>
          <div className="p-2">
            <Header reference={titleRef} title={"Solicitud de alta"} />
          </div>
          <div className="p-5 mt-5 form" ref={body}>
            <div className="form" ref={formContainer}>
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
          </div>
        </Stack>
      </div>
    )
  );
};

export default UserForm;
