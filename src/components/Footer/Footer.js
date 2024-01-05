import styles from "./Footer.module.css";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
// import logoimg from "../../assets/logo.png"
import Logo from "../Logo/Logo";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { useContext } from "react";
import { ContextData } from "../Context/ContextVar";

export default function Footer() {

  let cont = useContext(ContextData);
  let { active, setActive } = cont;
  
  return (
    <div className={styles["footer-outer"]}>
      <div className="container">
        <div className={styles["footer-wrapper"]}>
          <div className={styles["f-wrapper"]}>
            <div className={styles["logo-wrapper"]}>
              <Logo className={styles["logo-icon"]} />
            </div>

            <ul style={{ listStyle: "none" }} className={styles.menu}>
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
                      active === "#attorneys"
                        ? "var(--yellow)"
                        : "var(--white)",
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
            <div className={styles["icon-alignment"]}>
              <a href="#">
                <InstagramIcon
                  sx={{ color: "var(--yellow)", borderRadius: "20px" }}
                />
              </a>
              <a href="#">
                {" "}
                <FacebookIcon
                  sx={{ color: "var(--yellow)", borderRadius: "20px" }}
                />
              </a>
              <a href="#">
                <TwitterIcon
                  sx={{ color: "var(--yellow)", borderRadius: "20px" }}
                />
              </a>
              <a href="#">
                <PinterestIcon
                  sx={{ color: "var(--yellow)", borderRadius: "20px" }}
                />
              </a>
            </div>
          </div>
          <div className={styles["copyright"]}>
            <p>© 2020 Acme. All right reserved.</p>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  );
}
