import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
    const [dark, setDark] = useState(false);

    const toggleTheme = () => {
        const newTheme = dark ? "light" : "dark";
        setDark(!dark);
        document.documentElement.setAttribute("data-theme", newTheme);
    };

    return (
        <div className="navbar bg-base-100 shadow-sm px-4 md:px-20">

            {/* LEFT */}
            <div className="navbar-start">

                {/* Mobile Menu */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        ☰
                    </div>

                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li><a>Weather Dashboard</a></li>
                        <li><a>Profile</a></li>
                    </ul>
                </div>

                {/* Logo */}
                <div className="flex items-center gap-2 ml-2">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
                        SC
                    </div>
                    <span className="text-lg md:text-xl font-bold">SkyCast</span>
                </div>
            </div>

            {/* CENTER (Hidden on mobile) */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className="font-semibold">
                        <a>Weather Dashboard</a>
                    </li>
                </ul>
            </div>

            {/* RIGHT */}
            <div className="navbar-end gap-2 md:gap-5">

                {/* Theme Toggle */}
                <button onClick={toggleTheme} className="text-lg md:text-xl">
                    {dark ? <FaSun /> : <FaMoon />}
                </button>

                {/* User Info (Hide on small screen) */}
                <div className="hidden md:flex items-center gap-4">
                    <img
                        className="h-10 w-10 rounded-full"
                        src="https://rinconeducativo.org/wp-content/uploads/2022/10/Einstein_Albert_Imagen.jpg"
                        alt=""
                    />
                    <p className="text-sm">
                        Hello,<br />
                        <span className="font-semibold">Albert Einstein</span>
                    </p>
                </div>

              
            </div>
        </div>
    );
};

export default Navbar;