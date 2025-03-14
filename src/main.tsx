import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.tsx";
import "./scss/globals.scss";

const rootElement: any = document.getElementById('root');
ReactDOM.createRoot(rootElement)
  .render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
);