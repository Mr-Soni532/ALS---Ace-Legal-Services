import React from "react";
import { useState } from "react";

const LawyerFilterer = () => {
  const [Filtrer, setFilterer] = useState("0px");

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 150) {
      setFilterer("-130px");
    } else {
      setFilterer("5px");
    }
  });

  return (
    <div
      className="LawyerFilterer"
      style={{ transform: `translateY(${Filtrer})` }}
      data-aos="fade-up"
    >
      <h1>Filter Lawyers by :</h1>
      <br />
      <hr />
      <fieldset>
        <legend>Based on Profession :</legend>
        <div>
          <input
            type="radio"
            name="format"
            id="cdll"
            value="Criminal Defense Lawyer"
            defaultChecked
          />
          <label name="cdll">Criminal Defense Lawyer</label>
        </div>
        <div>
          <input
            type="radio"
            name="format"
            id="illy"
            value="Immigration Lawyer"
          />
          <label name="illy">Immigration Lawyer</label>
        </div>
        <div>
          <input
            type="radio"
            name="format"
            id="clopo"
            value="Corporate Lawyer"
          />
          <label name="clopo">Corporate Lawyer</label>
        </div>
        <div>
          <input
            type="radio"
            name="format"
            id="asdfd"
            value="Intellectual Property Lawyer"
          />
          <label name="asdfd">Intellectual Property Lawyer</label>
        </div>
        <div>
          <input
            type="radio"
            name="format"
            id="rels"
            value=" Real Estate Lawyer"
          />
          <label name="rels">Real Estate Lawyer</label>
        </div>
        <div>
          <input type="radio" name="format" id="terer" value="Tax Lawyer" />
          <label name="terer">Tax Lawyer</label>
        </div>
        <div>
          <input
            type="radio"
            name="format"
            id="qwerwew"
            value="Employment Lawyer"
          />
          <label name="qwerwew">Employment Lawyer</label>
        </div>
        <div>
          <input
            type="radio"
            name="format"
            id="adsdsds"
            value="Bankruptcy Lawyer"
          />
          <label name="adsdsds">Bankruptcy Lawyer</label>
        </div>
        <div>
          <input
            type="radio"
            name="format"
            id="dfgdsfg"
            value="Family Lawyer"
          />
          <label name="dfgdsfg">Family Lawyer</label>
        </div>

        <div>
          <input
            type="radio"
            name="format"
            id="fdfdfdfdf"
            value="Estate Planning Lawyer"
          />
          <label name="fdfdfdfdf">Estate Planning Lawyer</label>
        </div>
      </fieldset>
    </div>
  );
};

export default LawyerFilterer;
