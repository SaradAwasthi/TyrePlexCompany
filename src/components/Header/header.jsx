import React, { useState, useEffect } from "react";
import { FaRegUser } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaEllipsisV, FaChevronDown } from "react-icons/fa";
import "./header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const categories = [
    {
      name: "Car Tyres",
      subCategories: [
        "MRF Tyres",
        "CEAT Tyres",
        "Goodyear Tyres",
        "Apollo Tyres",
        "Bridgestone Tyres",
        "JK Tyres",
        "Michelin Tyres",
      ],
    },
    {
      name: "Bike Tyres",
      subCategories: [
        "Popular Bike Tyre Brands",
        "MRF Tyres",
        "CEAT Tyres",
        "Apollo Tyres",
        "Bridgestone Tyres",
        "JK Tyres",
        "Michelin Tyres",
        "Pirelli Tyres",
      ],
    },
    {
      name: "Tyre Pressure",
      subCategories: [],
    },
    {
      name: "Commercial Tyres",
      subCategories: ["All Commercial Tyres"],
    },
    {
      name: "Accessories",
      subCategories: ["Accessories", "Batteries", "Alloys Wheels"],
    },
  ];

  useEffect(() => {
    const loggedIn = localStorage.getItem("userLoggedIn");
    setIsLoggedIn(!!loggedIn);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSubCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const handleLogout = () => {
    localStorage.removeItem("userLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <header className="header">
      <Link to="/" className="logo w-28 h-8">
        <img
          alt="logo"
          src="https://cdn.tyreplex.net/themes/moonlight/images/TP-logo.png?tr=w-150,q-60"
        />
      </Link>

      {/* Mobile Menu Button */}
      <button className="mobile-menu-button" onClick={toggleMenu}>
        <FaEllipsisV />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <ul className="nav-list">
            {categories.map((category, index) => (
              <li key={index} className="nav-item">
                <div
                  className="nav-link"
                  onClick={() => toggleSubCategory(category.name)}
                >
                  {category.name}
                  {category.subCategories.length > 0 && (
                    <FaChevronDown
                      className={`dropdown-toggle ${
                        expandedCategory === category.name ? "open" : ""
                      }`}
                    />
                  )}
                </div>
                {expandedCategory === category.name &&
                  category.subCategories.length > 0 && (
                    <ul className="dropdown-menu">
                      {category.subCategories.map((subCategory, subIndex) => (
                        <li key={subIndex}>
                          <a href="/" className="dropdown-item">
                            {subCategory}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
              </li>
            ))}
          </ul>
          <div className="auth-links">
            {isLoggedIn ? (
              <button onClick={handleLogout} className="auth-link">
                <MdLogout />
                <span>Logout</span>
              </button>
            ) : (
              <Link to="/login" className="auth-link">
                <FaRegUser />
                <span>Login</span>
              </Link>
            )}
          </div>
        </div>
      )}

      {/* Desktop Menu */}
      <ul className="nav-desktop font-bold">
        {categories.map((category, index) => (
          <li
            key={index}
            className="nav-item"
            onMouseEnter={() => setExpandedCategory(category.name)}
            onMouseLeave={() => setExpandedCategory(null)}
          >
            <a href="/" className="nav-link">
              {category.name}
            </a>
            {expandedCategory === category.name &&
              category.subCategories.length > 0 && (
                <ul className="dropdown-menu">
                  {category.subCategories.map((subCategory, subIndex) => (
                    <li key={subIndex}>
                      <a href="/" className="dropdown-item">
                        {subCategory}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
          </li>
        ))}
      </ul>

      <div className="auth-links-desktop">
        {isLoggedIn ? (
          <button onClick={handleLogout} className="auth-link">
            <MdLogout />
            <span>Logout</span>
          </button>
        ) : (
          <Link to="/login" className="auth-link">
            <FaRegUser />
            <span>Login</span>
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
