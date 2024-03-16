import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";

function App() {
    return (
        <main className="flex flex-col h-[100dvh]">
            <Navbar />
            <AppRoutes />
            <Footer />
        </main>
    );
}

export default App;
