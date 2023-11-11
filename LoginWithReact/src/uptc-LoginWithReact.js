import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Main from "./main.jsx"; // Cambiado el nombre de la importación para que coincida con el componente exportado

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Main, // Cambiado el nombre de la variable
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
