import Logo from "../assets/logo-marene.png";
const Footer = () => {
    return (
        <footer className="mt-auto">
            <section className="footer footer-center px-5 py-2 bg-sky-600 text-primary-content">
                <aside>
                    <section className="flex items-center gap-1">
                        <img
                            src={Logo}
                            alt="logo"
                            height={60}
                            width={60}
                        />
                        <div className="text-left text-white">
                            <p className="font-bold">Marene</p>
                            <p className="font-bold">Italia</p>
                        </div>
                    </section>
                    <div className="border-2 rounded-md border-green-700 p-2">
                        <p>Numero verde gratuito</p>
                        <p>CoABSeR</p>
                        <p className="font-bold">800 957 793 <small>(int. 24)</small></p>
                        
                    </div>
                    <p className="text-xs">
                        Fonte:{" "}
                        <a
                            href="https://www.comune.marene.cn.it/"
                            className="font-semibold hover:underline"
                            target="_blank"
                        >
                            Comune di Marene
                        </a>
                    </p>
                </aside>
            </section>
            <section className="w-full bg-black text-white text-sm flex justify-center items-center">
                <small className="absolute left-2">v1.0</small>
                <p className="text-center p-2">
                    made by{" "}
                    <a
                        href="https://www.emikinder.dev"
                        target="_blank"
                        className="text-yellow-500 hover:text-yellow-400 hover:underline"
                    >
                        emikinder.dev
                    </a>{" "}
                    - 2024
                </p>
            </section>
        </footer>
    );
};

export default Footer;
