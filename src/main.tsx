import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <GoogleReCaptchaProvider reCaptchaKey="6LfKmlspAAAAAGv-KQCV759aDrvy9T2IrE5aFk3a">
                <App />
            </GoogleReCaptchaProvider>
        </BrowserRouter>
    </React.StrictMode>
);
