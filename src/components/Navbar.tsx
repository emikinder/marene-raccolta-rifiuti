import { Link } from "react-router-dom";
import Flag from "@/assets/italy-flag.png";

const Navbar = () => {
    return (
        <div className="navbar bg-sky-600 md:px-2 h-[8vh]">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">
                    <img
                        src={Flag}
                        alt="logo"
                        className="w-7 h-7"
                    />
                    <span className="text-white"></span>
                </a>
            </div>
            <div className="flex-none">
                <div className="menu menu-horizontal px-1 font-bold text-white text-lg gap-5">
                    <Link to="/">Raccolta</Link>
                    <Link to="/sacchetti">Sacchetti</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
