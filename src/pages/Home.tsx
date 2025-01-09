import Raccolta from "../components/Raccolta";
import Alert from "../components/Alert";

const Home = () => {
    return (
        <section className="p-2">
            <div className="text-sky-600 mb-1">
                <Alert />
                <h1 className="text-3xl font-bold">Marene</h1>
                <h2 className="text-2xl">
                    Raccolta rifiuti <span className="text-3xl">{new Date().getFullYear()}</span>
                </h2>
                <Raccolta />
            </div>
        </section>
    );
};

export default Home;
