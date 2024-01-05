import React, { useRef, useState } from "react";
import Logo from "../Logo/Logo";
import styles from "./Navbar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import { useContext } from "react";
import { ContextData } from "../Context/ContextVar";

export default function Navbar() {
  //let [active,setActive]=useState("#");
  let cont = useContext(ContextData);
  let { active, setActive } = cont;
  let ob = useRef();
  function handleToggle() {
    console.log(ob.current);
    if (ob.current.style.display === "block") {
      ob.current.style.display = "none";
    } else {
      ob.current.style.display = "block";
    }
  }
  return (
    <div>
      <div className={styles.wrapper}>
        <Logo />

        <ul style={{ listStyle: "none" }} className="links">
          <li>
            {" "}
            <a
              href="#"
              className={styles.linkStyle}
              style={{
                color: active === "#" ? "var(--yellow)" : "var(--white)",
              }}
              onClick={() => setActive("#")}
            >
              Home
            </a>
          </li>
          <li>
            {" "}
            <a
              href="#attorneys"
              className={styles.linkStyle}
              style={{
                color:
                  active === "#attorneys" ? "var(--yellow)" : "var(--white)",
              }}
              onClick={() => setActive("#attorneys")}
            >
              Attorneys{" "}
            </a>
          </li>
          <li>
            <a
              href="#practice-area"
              className={styles.linkStyle}
              style={{
                color:
                  active === "#practice-area"
                    ? "var(--yellow)"
                    : "var(--white)",
              }}
              onClick={() => setActive("#practice-area")}
            >
              {" "}
              Practice Areas
            </a>
          </li>
          <li>
            <a
              href="#about-us"
              className={styles.linkStyle}
              style={{
                color:
                  active === "#about-us" ? "var(--yellow)" : "var(--white)",
              }}
              onClick={() => setActive("#about-us")}
            >
              About Us
            </a>
          </li>
        </ul>

        <button className={styles.btn}>Contact Now</button>
        <div className="toggler-btn">
          <button onClick={handleToggle}>
            <MenuIcon style={{ color: "var(--gray-font)" }} />
          </button>
        </div>
      </div>
      <div>
        <ul
          style={{ listStyle: "none", display: "none" }}
          className="toggler-list"
          ref={ob}
        >
          <li>
            {" "}
            <a
              href="#"
              className={styles.linkStyle}
              style={{
                color: active === "#" ? "var(--yellow)" : "var(--white)",
              }}
              onClick={() => setActive("#")}
            >
              Home
            </a>
          </li>
          <li>
            {" "}
            <a
              href="#attorneys"
              className={styles.linkStyle}
              style={{
                color:
                  active === "#attorneys" ? "var(--yellow)" : "var(--white)",
              }}
              onClick={() => setActive("#attorneys")}
            >
              Attorneys{" "}
            </a>
          </li>
          <li>
            <a
              href="#practice-area"
              className={styles.linkStyle}
              style={{
                color:
                  active === "#practice-area"
                    ? "var(--yellow)"
                    : "var(--white)",
              }}
              onClick={() => setActive("#practice-area")}
            >
              {" "}
              Practice Areas
            </a>
          </li>
          <li>
            <a
              href="#about-us"
              className={styles.linkStyle}
              style={{
                color:
                  active === "#about-us" ? "var(--yellow)" : "var(--white)",
              }}
              onClick={() => setActive("#about-us")}
            >
              About Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
