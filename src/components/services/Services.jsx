import React from "react";
import { BiCheck } from "react-icons/bi";
import './services.css'

export default function Services() {
  return (
    <section id="services">
      <h5>What i Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="services">
          <div className="services__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="services__list">
            <li>
              <BiCheck className="services__list-icon" />
              <p>sdfsdf sdfs sfdfsdfsd fsdfs dfsdf s</p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>sdfsdf sdfs sfdfsdfsd fsdfs dfsdf s</p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>sdfsdf sdfs sfdfsdfsd fsdfs dfsdf s</p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>sdfsdf sdfs sfdfsdfsd fsdfs dfsdf s</p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>sdfsdf sdfs sfdfsdfsd fsdfs dfsdf s</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="services">
          <div className="services__head">
            <h3>Web Development</h3>
          </div>
          <ul className="services__list">
            <li>
              <BiCheck className="services__list-icon" />
              <p>sdfsdf sdfs sfdfsdfsd fsdfs dfsdf s</p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>sdfsdf sdfs sfdfsdfsd fsdfs dfsdf s</p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>sdfsdf sdfs sfdfsdfsd fsdfs dfsdf s</p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>sdfsdf sdfs sfdfsdfsd fsdfs dfsdf s</p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>sdfsdf sdfs sfdfsdfsd fsdfs dfsdf s</p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>sdfsdf sdfs sfdfsdfsd fsdfs dfsdf s</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className="services">
          <div className="services__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="services__list">
            <li>
              <BiCheck className="services__list-icon" />
              <p>sdfsdf sdfs sfdfsdfsd fsdfs dfsdf s</p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>sdfsdf sdfs sfdfsdfsd fsdfs dfsdf s</p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>sdfsdf sdfs sfdfsdfsd fsdfs dfsdf s</p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>sdfsdf sdfs sfdfsdfsd fsdfs dfsdf s</p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>sdfsdf sdfs sfdfsdfsd fsdfs dfsdf s</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  );
}
