import React, { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import styles from "./HeroContent.module.css";
import { useSnackbar } from "notistack";

function HeroContent() {
  let { enqueueSnackbar } = useSnackbar();
  let [email, setEmail] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (email.length === 0) {
      enqueueSnackbar("Enter Email address", { variant: "warning" });
      return;
    }
  }
  return (
    <div className={styles.parentWrapper}>
      <div className={styles.wrapper}>
        <div style={{ width: "100%" }}>
          <h1 className={`${styles.heading} ${styles.heading1}`}>
            You don't have to
          </h1>
          <h1 className={`${styles.heading} ${styles.heading2}`}>
            Fight Them Alone.
          </h1>
        </div>
        <p style={{ width: "100%" }} className={styles.para}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
          curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget,
          hac massa gravida arcu interdum proin curae.
        </p>

        <form className={styles.inputField} onSubmit={handleSubmit}>
          <div className={styles["input-wrapper"]}>
            <EmailIcon sx={{ color: "#525252" }} />
            <input
              type="email"
              placeholder="enter your email address"
              className={styles.input}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
          </div>
          <button type="submit" className={styles["btn-style"]}>
            Let's Talk
          </button>
        </form>
      </div>
      <div className={styles["hero-right"]}>
        <div className={styles["image-container"]}>
          <img src={require("../../assests/heroimg.png")} alt={"heroimage"}/>
        </div>
      </div>
    </div>
  );
}

export default HeroContent;
