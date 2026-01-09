import React, { useState } from "react";
import { NavLink , Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faArrowRight,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const linkClass = ({ isActive }) =>
  isActive
    ? "text-orange-500 flex items-center gap-1"
    : "flex items-center gap-1 hover:text-orange-500";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-[120px] h-[90px] flex items-center justify-between">
        {/* LOGO (optional text) */}
        <Link to="/">
          <h1 className="text-xl font-bold text-[#00194B] lg:hidden cursor-pointer">
            Nice Cool Care
          </h1>
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex items-center gap-10 text-[17px] font-medium text-[#00194B]">
          <li>
            <NavLink to="/" className={linkClass}>
              Home <FontAwesomeIcon icon={faPlus} className="text-xs" />
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className={linkClass}>
              About us <FontAwesomeIcon icon={faPlus} className="text-xs" />
            </NavLink>
          </li>

          <li>
            <NavLink to="/service" className={linkClass}>
              Services <FontAwesomeIcon icon={faPlus} className="text-xs" />
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className={linkClass}>
              Contact us <FontAwesomeIcon icon={faPlus} className="text-xs" />
            </NavLink>
          </li>

          <li>
            <NavLink to="/privacy" className={linkClass}>
              Privacy Policy{" "}
              <FontAwesomeIcon icon={faPlus} className="text-xs" />
            </NavLink>
          </li>
        </ul>

        {/* DESKTOP BUTTON */}
        <div className="hidden lg:flex">
          <NavLink
            to="/contact"
            className="bg-[#00194B] text-white px-6 py-3 flex items-center gap-2 font-medium hover:bg-[#002b80] transition"
          >
            Request a Quote
            <FontAwesomeIcon icon={faArrowRight} />
          </NavLink>
        </div>

        {/* MOBILE MENU ICON */}
        <button
          className="lg:hidden text-2xl text-[#00194B]"
          onClick={() => setOpen(!open)}
        >
          <FontAwesomeIcon icon={open ? faXmark : faBars} />
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="lg:hidden bg-white border-t px-6 py-6 space-y-5 text-[#00194B] font-medium">
          <NavLink to="/" onClick={() => setOpen(false)} className={linkClass}>
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setOpen(false)}
            className={linkClass}
          >
            About Us
          </NavLink>

          <NavLink
            to="/service"
            onClick={() => setOpen(false)}
            className={linkClass}
          >
            Services
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className={linkClass}
          >
            Contact Us
          </NavLink>

          <NavLink
            to="/privacy"
            onClick={() => setOpen(false)}
            className={linkClass}
          >
            Privacy Policy
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className="block text-center bg-[#00194B] text-white px-6 py-3 mt-4"
          >
            Request a Quote →
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
