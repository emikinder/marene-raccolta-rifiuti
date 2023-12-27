import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Sachetti from "./pages/Sacchetti";
import Footer from "./components/Footer";

function App() {
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
            </Routes>
            <Footer />
        </main>
    );
}

export default App;
