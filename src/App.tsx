import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Sachetti from "./pages/Sacchetti";
import Footer from "./components/Footer";
import { useEffect } from "react";

function App() {
    const RedirectToHome = () => {
        const navigate = useNavigate();
        useEffect(() => {
            navigate("/");
        }, [navigate]);

        return null;
    };

    return (
        <main className="">
            <Navbar />
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/sacchetti"
                    element={<Sachetti />}
                />
                <Route
                    path="*"
                    element={<RedirectToHome />}
                />
            </Routes>
            <Footer />
        </main>
    );
}

export default App;
