import React from "react";
import { Transition } from "react-transition-group";

const duration = 500;

const defaultStyle = {
  transition: duration,
  opacity: 0
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 }
};

const FadeTransition = ({ in: inProp, children }) => (
  <Transition in={inProp} timeout={duration}>
    {(state) => <div style={{ ...defaultStyle, ...transitionStyles[state] }}>{children}</div>}
  </Transition>
);

export default FadeTransition;
