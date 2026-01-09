import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faXTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const footerLinkClass = ({ isActive }) =>
    isActive ? "text-orange-400 font-medium" : "hover:text-orange-400";

  return (
    <footer className="bg-[#071c3f] text-white">
      {/* ===== MAIN FOOTER ===== */}
      <div
        className="
          max-w-[1200px] mx-auto
          px-4 sm:px-6
          py-16
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-12
          text-center sm:text-left
        "
      >
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Nice Cool Care</h2>
          <p className="text-gray-300 text-sm mb-6 leading-relaxed">
            Nice Cool Care is a trusted AC repair & service provider, offering
            reliable and affordable cooling solutions.
          </p>

          <div className="flex items-center justify-center sm:justify-start gap-4 text-sm">
            <span className="text-gray-300">Follow on</span>
            <FontAwesomeIcon
              className="cursor-pointer hover:text-orange-400"
              icon={faFacebookF}
            />
            <FontAwesomeIcon
              className="cursor-pointer hover:text-orange-400"
              icon={faXTwitter}
            />
            <FontAwesomeIcon
              className="cursor-pointer hover:text-orange-400"
              icon={faLinkedinIn}
            />
            <FontAwesomeIcon
              className="cursor-pointer hover:text-orange-400"
              icon={faInstagram}
            />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-3 text-gray-300 text-sm">
            <li>
              <NavLink to="/" className={footerLinkClass}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" className={footerLinkClass}>
                About Us
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" className={footerLinkClass}>
                Contact Us
              </NavLink>
            </li>

            <li>
              <NavLink to="/privacy" className={footerLinkClass}>
                Privacy Policy
              </NavLink>
            </li>

            <li>
              <NavLink to="/service" className={footerLinkClass}>
                Service
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold mb-4">Our Services</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li>
              Air Installation
            </li>
            <li>
              Heating Installation
            </li>
            <li >
              Heating & Water
            </li>
            <li >
              Technical Support
            </li>
            <li >
              Diagnostic Repair
            </li>
          </ul>
        </div>

        {/* Extra Space / Optional Column (keeps layout balanced on desktop) */}
        <div className="hidden lg:block"></div>
      </div>

      {/* ===== BOTTOM BAR ===== */}
      <div className="border-t border-gray-600 py-6">
        <div
          className="
            max-w-[1200px] mx-auto
            px-4 sm:px-6
            flex flex-col md:flex-row
            items-center
            justify-between
            gap-4
            text-sm text-gray-300
            text-center md:text-left
          "
        >
          <p>© All Copyright 2026 by Nice Cool Care</p>

          <div className="flex gap-6 justify-center md:justify-end">
            <p className="hover:text-orange-400 cursor-pointer">
              Terms & Conditions
            </p>
            <p className="hover:text-orange-400 cursor-pointer">
              Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
