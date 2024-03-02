import Raccolta from "../components/Raccolta";

const Home = () => {
    return (
        <section className="p-2">
            <div className="text-sky-600 mb-3">
                <h1 className="text-3xl font-bold">Marene</h1>
                <h2 className="text-2xl">
                    Raccolta rifiuti <span className="text-3xl">2024</span>
                </h2>
                <Raccolta />
            </div>
        </section>
    );
};

export default Home;
