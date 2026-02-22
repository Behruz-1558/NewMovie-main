import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 md:px-10 py-2  transparent">
      <div className="max-w-[1700px] mx-auto">
        <nav className="h-[98px] flex items-center justify-between relative">

          {/* LOGO */}
          <a href="/" className="flex items-center gap-3">
            <img src="/img/LOGO.png" alt="StreamVibe" className="h-10 w-10" />
            <span className="text-white text-xl font-bold tracking-wide">
              StreamVibe
            </span>
          </a>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex items-center gap-12 text-[15px] border border-[#262626] rounded-xl py-4 px-6 bg-black">
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
                    `relative transition-all duration-300
                    ${isActive
                      ? "text-white after:absolute after:left-0 after:-bottom-2 after:w-full after:h-[2px] after:bg-red-600"
                      : "text-gray-400 hover:text-white"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>

            ))}
            <li >
              <NavLink
                  to={"/login"}
                  className={({ isActive }) =>
                    `relative transition-all duration-300
                    ${isActive
                      ? "text-white after:absolute after:left-0 after:-bottom-2 after:w-full after:h-[2px] after:bg-red-600"
                      : "text-gray-400 hover:text-white"
                    }`
                  }
                >
                  Register
                </NavLink>
            </li>
          </ul>

          {/* RIGHT ICONS */}
          <div className="flex items-center gap-5">
            <button
              onClick={() => navigate("/search")}
              className="text-white text-lg"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>

            <button className="text-white text-lg">
              <i className="fa-solid fa-bell"></i>
            </button>

            {/* BURGER BUTTON */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden relative w-8 h-8 flex flex-col justify-between z-[60]"
            >
              <span
                className={`h-[3px] w-full bg-white rounded transition-all duration-300 ${open ? "rotate-45 translate-y-[10px]" : ""
                  }`}
              />
              <span
                className={`h-[3px] w-full bg-white rounded transition-all duration-300 ${open ? "opacity-0" : ""
                  }`}
              />
              <span
                className={`h-[3px] w-full bg-white rounded transition-all duration-300 ${open ? "-rotate-45 -translate-y-[10px]" : ""
                  }`}
              />
            </button>
          </div>
        </nav>
      </div>

      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        />
      )}

      {/* MOBILE SLIDE MENU */}
      <div
        className={`fixed top-0 right-0 h-screen w-[75%] max-w-[320px]
        bg-[#0f0f0f] z-50 transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="pt-[120px]">
          <ul className="flex flex-col gap-6 px-8 text-lg">
            {[
              { name: "Home", path: "/" },
              { name: "Movies & Shows", path: "/movies" },
              { name: "Support", path: "/support" },
              { name: "Subscriptions", path: "/subscriptions" },
            ].map((item) => (
              <li key={item.name} onClick={() => setOpen(false)}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `block py-2 border-b border-white/10 transition
                    ${isActive
                      ? "text-white font-semibold"
                      : "text-gray-400 hover:text-white"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
