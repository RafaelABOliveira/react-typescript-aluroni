import React from "react";
import ReactDOMClient from "react-dom/client";
import "normalize.css";
import "./index.css";
import Cardapio from "./pages/Cardapio";

const inputTag = document.getElementById("root") as HTMLInputElement;

const root = ReactDOMClient.createRoot(inputTag);

root.render(
  <React.StrictMode>
    <Cardapio />
  </React.StrictMode>
);
