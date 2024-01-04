import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";

function App() {
    return (
        <main className="flex flex-col min-h-[100vh]">
            <Navbar />
            <AppRoutes />
            <Footer />
        </main>
    );
}

export default App;
