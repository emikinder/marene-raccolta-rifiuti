const Footer = () => {
    return (
        <footer className="mt-auto">
            <section className="footer footer-center px-5 py-2 bg-sky-600 text-primary-content">
                <aside>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="60"
                        height="60"
                        viewBox="0 0 48 48"
                    >
                        <path
                            fill="#2E7D32"
                            d="M42.534 23.788c1.612 3.586-1.367 7.132-2.766 7.16h-3.484l-5.233-9.287 7.717-4.465 3.706 6.408L42.534 23.788 42.534 23.788zM24.097 8.276l-1.943-2.262h-2.096c-1.688-.027-3.746.57-4.96 2.308l-.093.152-3.705 6.41 7.719 4.467 5.599-9.152L24.097 8.276zM15.404 39.903c-3.921-.397-5.635-4.405-4.967-5.652L12.016 31h11.561l-.578 8.934h-7.412L15.404 39.903 15.404 39.903z"
                        ></path>
                        <g>
                            <path
                                fill="#4CAF50"
                                d="M39.467 30.896c1.063-.031 1.786-.666 2.688-1.972l-5.881 9.902c-.423.94-1.002 1.094-1.608 1.035h-5.197l-.031 3.157-4.376-7.596 4.405-7.685v3.157H39.467L39.467 30.896zM22.666 7.197C21.847 5.886 20.67 6.015 20.3 6.015h10.813c1.033-.097 1.457.3 1.732.878l2.582 4.497 2.731-1.579-4.375 7.626-8.839.033 2.703-1.58L22.666 7.197 22.666 7.197zM10.662 33.782c-.515.913-.366 1.786.264 3.045l-5.551-9.788c-.577-.854-.425-1.399-.093-1.916l2.613-4.495-2.732-1.611h8.781l4.467 7.656-2.735-1.577L10.662 33.782 10.662 33.782z"
                            ></path>
                        </g>
                    </svg>
                    <p className="font-bold">
                        Raccolta Rifiuti 2024
                        <br />
                        Marene, Italia
                    </p>
                    <div className="border-2 rounded-md border-green-700 p-2">
                        <p>Numero verde gratuito</p>
                        <p>
                            <b>800 957 793</b>
                        </p>
                        <small>(interno 24)</small>
                    </div>
                    <p>
                        Fonte:{" "}
                        <a href="https://www.comune.marene.cn.it/" className="font-semibold hover:underline">
                            Comune di Marene
                        </a>
                    </p>
                </aside>
            </section>
            <section className="w-full bg-black text-white text-sm flex justify-center items-center">
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
                <small className="absolute right-2">v1.0</small>
            </section>
        </footer>
    );
};

export default Footer;
