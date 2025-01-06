import React, { useState, useEffect, useRef, useContext } from "react";
import { IoMdMenu, IoMdClose, IoMdArrowDropdown } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";
import navGame from "../../assets/navGame.jpg"
import CommImage from "../../assets/ComImage.png"
import aboutUs from "../../assets/aboutUs.jpg"
import DefaultImage from "../../assets/DefaultImage.webp";
import blog from "../../assets/blog.avif"
import "./Navbar.css";

const UserNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  const [isTradeDropdownOpen, setIsTradeDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const tradeDropdownRef = useRef(null);
  const navigate = useNavigate();
  const { user, logout } = useContext(UserContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (index) => {
    setIsDropdownOpen(isDropdownOpen === index ? null : index);
  };

  const toggleTradeDropdown = () => {
    setIsTradeDropdownOpen(!isTradeDropdownOpen);
  };

  const handleLogout = () => {
    logout();
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
      button: 'Join Community',
      join: "Expand Our Community",
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
                    <button>ARCHADE</button>
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

          {isMenuOpen && (
            <li className="trade-button-mobil">
              <div className="trade-dropdown-contents">
                <Link to='/userLibrary' style={{ color: 'white', textDecoration: "none" }}>
                  <li>My Library</li>
                </Link>
                <Link to="/userSettings" style={{ color: 'white', textDecoration: "none" }}>
                  <li>Settings</li>
                </Link>
                <Link onClick={handleLogout} style={{ color: 'red', textDecoration: "none" }}>
                  <li>Logout</li>
                </Link>
              </div>
            </li>
          )}
          {isMenuOpen && (
            <li className="trade-button-mobile">
              <img
                src={user?.image || DefaultImage}
                alt="Trade"
              />
              {isTradeDropdownOpen && (
                <ul className="trade-dropdown-conten">
                  <Link to='/userLibrary' style={{ color: 'white', textDecoration: "none" }}>
                    <li>My Lib</li>
                  </Link>
                  <Link to="/userSettings" style={{ color: 'white', textDecoration: "none" }}>
                    <li>Settings</li>
                  </Link>
                  <li onClick={handleLogout}>Logout</li>
                </ul>
              )}
            </li>
          )}
        </ul>

        {!isMenuOpen && (
          <div className="trade-button" ref={tradeDropdownRef}>
            <img
              src={user?.image || "https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2264922221.jpg"}
              alt="Trade"
              onClick={toggleTradeDropdown}
            />
            {isTradeDropdownOpen && (
              <ul className="trade-dropdown-content">
                <Link to='/userLibrary' style={{ color: 'white', textDecoration: "none" }}>
                  <li>My Library</li>
                </Link>
                <Link to="/userSettings" style={{ color: 'white', textDecoration: "none" }}>
                  <li>Settings</li>
                </Link>
                <li onClick={handleLogout}>Logout</li>
              </ul>
            )}
          </div>
        )}
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

export default UserNav;
