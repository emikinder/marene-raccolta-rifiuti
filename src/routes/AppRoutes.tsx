import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import { useEffect } from "react";

const AppRoutes = () => {
    const RedirectToHome = () => {
        const navigate = useNavigate();
        useEffect(() => {
            navigate("/");
        }, [navigate]);

        return null;
    };

    return (
        <Routes>
            <Route
                path="/"
                element={<Home />}
            />
            <Route
                path="/contact"
                element={<Contact />}
            />
            <Route
                path="*"
                element={<RedirectToHome />}
            />
        </Routes>
    );
};

export default AppRoutes;
