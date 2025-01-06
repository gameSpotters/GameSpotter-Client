import React, { useState, useEffect, useRef } from "react";
import { IoMdMenu, IoMdClose, IoMdArrowDropdown } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import navGame from "../../assets/navGame.jpg";
import CommImage from "../../assets/ComImage.png";
import aboutUs from "../../assets/aboutUs.jpg";
import DefaultImage from "../../assets/DefaultImage.webp";
import blog from "../../assets/blog.avif";
import 'react-toastify/dist/ReactToastify.css';
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  const [isTradeDropdownOpen, setIsTradeDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const tradeDropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (index) => {
    setIsDropdownOpen(isDropdownOpen === index ? null : index);
  };

  const notify = () => alert("Kindly Login To Have Access!");

  const toggleTradeDropdown = () => {
    setIsTradeDropdownOpen(!isTradeDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  const content = {
    Games: {
      text: "GameSpotter offers a variety of games including action-adventure, RPGs, strategy, simulation, and puzzle games. Discover popular titles, indie gems, and classic favorites across genres.",
      image: navGame,
      info: "See Latest Release Games",
      join: "Enjoy The Best of Our Games",
    },
    Communities: {
      text: "Join the GameSpotter community! Our vibrant mix of gamers shares a passion for diverse games, connecting people through epic quests and casual gameplay.",
      image: CommImage,
      info: "Join Our vibrant community",
      join: "Expand Our Community",
      button: 'Join Community', 
    },
    About: {
      text: "Learn more about our mission and values, and how we strive to bring people together through the power of gaming.",
      image: aboutUs,
      info: "GameSpotter, Home of Games for All",
    },
    Blog: {
      text: "Check out our latest blog posts and updates on all things gaming, from industry news to game reviews and tips.",
      image: blog,
      join: "Join Our Blog Space",
      button: 'Our Blogs',
    },
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(null);
    }
    if (tradeDropdownRef.current && !tradeDropdownRef.current.contains(event.target)) {
      setIsTradeDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div>
      <nav>
        <h2>Game<span className="font">S</span>potter</h2>
        <ul className={isMenuOpen ? "nav-links open" : "nav-links"} ref={dropdownRef}>
          {["Games", "Communities", "About", "Blog"].map((item, index) => (
            <li key={index}>
              <div className="nav-item" onClick={() => toggleDropdown(index)}>
                {item} <IoMdArrowDropdown className="dropdown-icon" />
              </div>
              {isDropdownOpen === index && (
                <div className="dropdown-content">
                  <img src={content[item].image} alt={item} className="dropdown-image" />
                  <hr />
                  <p>{content[item].text}</p>
                  <h3>{content[item].info}</h3>

                  {item === "Communities" && (
                    <a href="https://t.me/+0sjSktA_LP1kNWI0">
                      <button className="nav-btns">{content[item].button}</button>
                    </a>
                  )}

                  {item === "Blog" && (
                    <a href="/">
                      <button className="nav-blogs">{content[item].button}</button>
                    </a>
                  )}

                  <div className="navbar-gameSeries">
                    <button>ARCADE</button>
                    <button>3D GAME</button>
                    <button>DEVELOPERS</button>
                    <button>UNITY</button>
                    <button>ACTION</button>
                    <button>SIMULATION</button>
                    <button>FIGHT</button>
                    <button>ADVENTURE</button>
                  </div>
                  <h2>{content[item].join}</h2>
                </div>
              )}
            </li>
          ))}
        </ul>
        <div className="trade-button" ref={tradeDropdownRef}>
          <img
            src={DefaultImage}
            alt="Trade"
            onClick={toggleTradeDropdown}
          />
          {isTradeDropdownOpen && (
            <ul className="trade-dropdown-content">
              <Link style={{ color: 'white', textDecoration: "none" }}>
                <li onClick={notify}>My Library</li>
                <Toaster />
              </Link>
              <Link style={{ color: 'white', textDecoration: "none" }}>
                <li onClick={notify}>Settings</li>
                <Toaster />
              </Link>
            </ul>
          )}
        </div>
        {isMenuOpen ? (
          <IoMdClose className="menu-icon" onClick={toggleMenu} />
        ) : (
          <IoMdMenu className="menu-icon" onClick={toggleMenu} />
        )}
      </nav>
      {isDropdownOpen !== null && (
        <div className="message-container-below">
          <p>{content[Object.keys(content)[isDropdownOpen]].text}</p>
        </div>
      )}
    </div>
  );
};

export default Navbar;
