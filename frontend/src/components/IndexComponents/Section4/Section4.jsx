import React from "react";
import "./Section4.css";
import BrimCard from "./BrimCard";
const Section4 = () => {
  return (
    <section className="SecFourParent">
      <br />
      <br />
      <br />
      <h1 className="SectionHeads">Expert in all kinds of Cases</h1>
      <br />
      <br />
      <div className="Sec4Parent">
        <BrimCard
          number="Civil"
          imgsrc="https://media-public.canva.com/HyobY/MAFGApHyobY/1/t.png"
          text="Meet lawyers with expertise in civil cases"
        />
        <BrimCard
          number="Criminal"
          imgsrc="https://cdn-icons-png.flaticon.com/512/924/924965.png"
          text="Meet lawyers with expertise in Criminal cases"
        />
        <BrimCard
          number="Personal"
          imgsrc="https://media-public.canva.com/mq88o/MAEqsmmq88o/1/t.png"
          text="Meet lawyers who guide for Personal cases like divorce"
        />
        <BrimCard
          number="Theft"
          imgsrc="https://media-public.canva.com/mq88o/MAEqsmmq88o/1/t.png"
          text="Meet lawyers for case of theft by a relative."
        />
      </div>
    </section>
  );
};

export default Section4;
