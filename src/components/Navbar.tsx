import Flag from "@/assets/italy-flag.png";
import { Link, useLocation } from "react-router-dom";
import Indicator from "./indicator";

const Navbar = () => {
    // const handleClick = () => {
    //     const detailsElement = document.querySelector("details");
    //     if (detailsElement) {
    //         detailsElement.removeAttribute("open");
    //     }
    // };
    const location = useLocation();
    const isActive = (path: string) => location.pathname === path;
    console.log();

    return (
        <nav className="navbar bg-sky-600 px-4 h-[8vh]">
            <div className="flex-1 navbar-start">
                <a
                    className="btn btn-ghost text-xl"
                    href="/"
                >
                    <img
                        src={Flag}
                        alt="logo"
                        className="w-7 h-7"
                    />
                    <span className="text-white"></span>
                </a>
            </div>
            {/* <div className="navbar-end">
                <details className="dropdown dropdown-end">
                    <summary
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block w-7 h-7 stroke-current text-white"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </summary>
                    <ul
                        tabIndex={0}
                        className="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-sky-600 text-white rounded-box w-52"
                    >
                        <li onClick={handleClick}>
                            <Link to="/">Raccolta</Link>
                        </li>
                        <li onClick={handleClick}>
                            <Link to="/sacchetti">Sacchetti</Link>
                        </li>
                        <li onClick={handleClick}>
                            <Link to="/contact">Contatto</Link>
                        </li>
                    </ul>
                </details>
            </div> */}
            <div className="navbar-end">
                <ul className="flex px-1 text-white gap-1">
                    <Link
                        to="/"
                        className={`btn btn-ghost btn-sm ${
                            isActive("/") ? "btn-active" : ""
                        }`}
                    >
                        Raccolta
                    </Link>
                    {/* <li>
                        <Link to="/sacchetti">Sacchetti</Link>
                    </li> */}
                    <Link
                        to="/contact"
                        className={`btn btn-ghost btn-sm ${
                            isActive("/contact") ? "btn-active" : ""
                        }`}
                    >
                        <Indicator>Contatto</Indicator>
                    </Link>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
