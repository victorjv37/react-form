import React, { useEffect, useState, useRef } from "react";
import { Button, Form, Stack } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { ErrorMessage } from "@hookform/error-message";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

    setTimeout(startAnimation, 100);
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

    setTimeout(startTitleAnimation, 100);
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
      navigate("/companyForm");
    } else {
      console.log(errors);
    }
  };

  return (
    isVisible && (
      <div className="_container container mt-2 p-3">
        <Stack gap={2}>
          <div className="p-2">
            <Header reference={titleRef} title={"Solicitud de alta"} />
          </div>
          <div className="p-5 mt-5 form" ref={body}>
            <div className="form" ref={formContainer}>
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
          </div>
        </Stack>
      </div>
    )
  );
};

export default UserForm;
