import React from "react";

import Me from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import "./about.css";

export default function About() {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About Me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Project</h5>
              <small>80+ Completed</small>
            </article>
          </div>
          <p>
            jsldjflksldf sdfjsk djfosjd fklsjd fkjs dfkj sdkfjj lskjdf sjd sd f
            jd fsd sdf sdjlf sdf lsdlkfj sksjdlfjskd s dfs dfjlsj dfkj sdjf lsjd
            flsjlkd jflsjd flsj d fsjldjfoisjoidufoisd jsjd ofiuosudofis
            dfsouufosudoifjsldjflksldf sdfjsk djfosjd fklsjd fkjs dfkj sdkfjj
            lskjdf sjd sd f jd fsd sdf sdjlf sdf lsdlkfj sksjdlfjskd s dfs
            dfjlsj dfkj sdjf lsjd flsjlkd jflsjd flsj d fsjldjfoisjoidufoisd
            jsjd ofiuosudofis dfsouufosudoif
          </p>
          <a href="#contact" className="btn btn-primary">
            Lets Talk
          </a>
        </div>
      </div>
    </section>
  );
}
