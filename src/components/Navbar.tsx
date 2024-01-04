import Flag from "@/assets/italy-flag.png";

const Navbar = () => {
    return (
        <nav className="navbar bg-sky-600 px-4 h-[8vh]">
            <div className="flex-1 navbar-start">
                <a className="btn btn-ghost text-xl">
                    <img
                        src={Flag}
                        alt="logo"
                        className="w-7 h-7"
                    />
                    <span className="text-white"></span>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
