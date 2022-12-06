import React from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import "./nav.css";
import { useState } from "react";
export default function Nav() {
  const [activeNav, setActiveNave] = useState("");
  return (
    <div>
      <nav>
        <a
          href="#"
          onClick={() => setActiveNave("")}
          className={activeNav === "" ? "active" : ""}
        >
          <AiOutlineHome />
        </a>
        <a
          href="#about"
          onClick={() => setActiveNave("about")}
          className={activeNav === "about" ? "active" : ""}
        >
          <AiOutlineUser />
        </a>
        <a
          href="#experience"
          onClick={() => setActiveNave("experience")}
          className={activeNav === "experience" ? "active" : ""}
        >
          <BiBook />
        </a>
        <a
          href="#services"
          onClick={() => setActiveNave("services")}
          className={activeNav === "services" ? "active" : ""}
        >
          <RiServiceLine />
        </a>
        <a
          href="#contact"
          onClick={() => setActiveNave("contact")}
          className={activeNav === "contact" ? "active" : ""}
        >
          <BiMessageSquareDetail />
        </a>
      </nav>
    </div>
  );
}
