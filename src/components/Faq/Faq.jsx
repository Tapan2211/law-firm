import * as React from "react";
import styles from "./Faq.module.css";
import HeadingCompo from "../HeadingCompo";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

const faqData = [
  {
    id: "panel1",
    question: "Do I need a personal injury report?",
    ans: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduisenim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer",
  },
  {
    id: "panel2",
    question: "How much is my case worth?",
    ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    id: "panel3",
    question: "What should I do right after car accidect?",
    ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
];

function Faq() {
  let [expanded, setExpanded] = React.useState(false);
  function generateAccordion() {
    let list = faqData.map((ele) => {
      return (
        <Accordion
          expanded={expanded === ele.id}
          key={ele.id}
          onChange={(e, isExpanded) => {
            handleChange(e, isExpanded, ele.id);
          }}
          sx={{
            backgroundColor: "rgba(0,0,0,0)",
            color: "var(--white)",
            boxShadow: "none",
            borderBottom: "2px solid rgba(255,255,255,0.2)",
            paddingBottom: "0.5rem",
          }}
        >
          <AccordionSummary
            expandIcon={
              expanded === ele.id ? (
                <RemoveCircleIcon
                  sx={{ color: "var(--yellow)", width: "50px" }}
                />
              ) : (
                <AddCircleIcon sx={{ color: "var(--yellow)", width: "50px" }} />
              )
            }
            aria-controls={`${ele.id}-content`}
            id={`${ele.id}-header`}
          >
            <p className={styles.faqquestion} sx={{ fontFamily: "Inter" }}>
              {ele.question}
            </p>
          </AccordionSummary>
          <AccordionDetails>
            <p
              sx={{
                color: "var(--gray-font)",
                fontFamily: "Inter",
                textAlign: "left",
              }}
              className={styles.faqans}
            >
              {ele.ans}
            </p>
          </AccordionDetails>
        </Accordion>
      );
    });
    return list;
  }
  function handleChange(e, isExpanded, panel) {
    if (isExpanded) {
      setExpanded(panel);
    } else {
      setExpanded(false);
    }
  }
  return (
    <div className={styles.faqWrapper}>
      <div className={styles.heading}>
        <HeadingCompo heading="FAQ" />
      </div>
      <div className={styles["section-wrapper"]}>
        <div className={styles.left}>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.{" "}
          </p>
        </div>
        <div className={styles.right}>
          <div>
            <Accordion
              defaultExpanded
              sx={{
                backgroundColor: "rgba(0,0,0,0)",
                color: "var(--white)",
                boxShadow: "none",
                borderBottom: "2px solid rgba(255,255,255,0.2)",
                paddingBottom: "0.5rem",
              }}
            >
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p className={styles.faqquestion} sx={{ fontFamily: "Inter" }}>
                  Do I need a personal injury report?
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <p
                  sx={{
                    color: "var(--gray-font)",
                    fontFamily: "Inter",
                    textAlign: "left",
                  }}
                  className={styles.faqans}
                >
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequatduis enim velit mollit Exer.
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequatduis enim velit mollit Exer
                </p>
              </AccordionDetails>
            </Accordion>
            {generateAccordion()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
