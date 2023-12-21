import React, { useRef, useEffect, useState } from "react";
import { Stack, Spinner } from "react-bootstrap";
import Header from "../components/Header";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RedirectingView = () => {
  const [isVisible, setIsVisible] = useState(false);
  const body = useRef(null);
  const container = useRef(null);
  const titleRef = useRef();

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

  useEffect(() => {
    setIsVisible(true);
    const startAnimation = () => {
      gsap.fromTo(
        container.current,
        { x: "-100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 1, ease: Power3.easeInOut }
      );
    };

    setTimeout(startAnimation, 0);
  }, []);

  return (
    isVisible && (
      <div className="container _container mt-2 p-3">
        <Stack gap={2}>
          <div className="p-2 mb-5">
            <Header reference={titleRef} title={"Solicitud de alta"} />
          </div>
          <div ref={body}>
            <div ref={container} className="p-5 mt-5 centered">
              <h4>Redirigiendo a Sharepoint</h4>
              <p>(esto podría tardar unos segundos...)</p>
              <br />
              <br />
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          </div>
        </Stack>
      </div>
    )
  );
};

export default RedirectingView;
