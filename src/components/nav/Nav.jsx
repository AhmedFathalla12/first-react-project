import "./nav.css";
import { IoHomeOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { BiBook } from "react-icons/bi";
import { RiServerLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";

const navLinks = [
  { id: "#", icon: <IoHomeOutline /> },
  { id: "#about", icon: <LuUserRound /> },
  { id: "#services", icon: <BiBook /> },
  { id: "#projects", icon: <RiServerLine /> },
  { id: "#contact", icon: <BiMessageSquareDetail /> },
];

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      {navLinks.map(({ id, icon }) => (
        <a
          key={id}
          href={id}
          className={activeNav === id ? "active" : ""}
          onClick={() => setActiveNav(id)}
        >
          {icon}
        </a>
      ))}
    </nav>
  );
};

export default Nav;
