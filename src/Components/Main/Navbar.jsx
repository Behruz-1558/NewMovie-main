import { Link, NavLink } from "react-router-dom";

function Navbar() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 px-10 py-2">
            <div className="">
                <div className="max-w-[1500px] mx-auto">
                    <nav className="h-[98px] flex items-center justify-between">

                        {/* LOGO */}

                        <div className="flex items-center gap-3 cursor-pointer">
                            <a href="/" className="flex items-center gap-3">
                                <img
                                    src="/img/LOGO.png"
                                    alt="StreamVibe"
                                    className="h-15 w-15"
                                />
                                <span className="text-white text-xl font-bold tracking-wide">
                                    StreamVibe
                                </span>
                            </a>
                        </div>



                        {/* CENTER MENU */}
                        <ul className="hidden lg:flex items-center gap-12 text-[15px] border-b-2 rounded-xl py-5 px-5  bg-black">
                            {[
                                { name: "Home", path: "/" },
                                { name: "Movies & Shows", path: "/movies" },
                                { name: "Support", path: "/support" },
                                { name: "Subscriptions", path: "/subscriptions" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <NavLink
                                        to={item.path}
                                        className={({ isActive }) =>
                                            `
                      relative pb-1 transition-all duration-300
                      ${isActive
                                                ? "text-white after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-red-600"
                                                : "text-gray-400 hover:text-white"
                                            }
                      `
                                        }
                                    >
                                        {item.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>

                        {/* RIGHT ICONS */}
                        <div className="flex items-center gap-5">
                            <button className="w-7 h-7 flex items-center justify-center rounded-full  transition">
                                <img
                                    src="./icon/Search.png"
                                    alt="Search"
                                    className=" opacity-80 w-full h-full"
                                />
                            </button>

                            <button className="w-7 h-7 flex items-center justify-center rounded-full transition">
                                <img
                                    src="./icon/Notification.png"
                                    alt="Notifications"
                                    className="w-full h-full opacity-80"
                                />
                            </button>
                        </div>

                    </nav>
                </div>
            </div>
        </header >
    );
}

export default Navbar;
