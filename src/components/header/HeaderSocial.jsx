import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";
// import "./header.css"
export default function HeaderSocial() {
  return (
    <div className="header__socials">
      <a href="https://linkedIn.com" target="__blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="__blank">
        <FaGithub />
      </a>
      <a href="https://dribbble.com" target="__blank">
        <FiDribbble />
      </a>
    </div>
  );
}
