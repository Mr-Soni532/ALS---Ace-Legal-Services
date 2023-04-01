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
          <label for="cdll">Criminal Defense Lawyer</label>
        </div>
        <div>
          <input
            type="radio"
            name="format"
            id="illy"
            value="Immigration Lawyer"
          />
          <label for="illy">Immigration Lawyer</label>
        </div>
        <div>
          <input
            type="radio"
            name="format"
            id="clopo"
            value="Corporate Lawyer"
          />
          <label for="clopo">Corporate Lawyer</label>
        </div>
        <div>
          <input
            type="radio"
            name="format"
            id="asdfd"
            value="Intellectual Property Lawyer"
          />
          <label for="asdfd">Intellectual Property Lawyer</label>
        </div>
        <div>
          <input
            type="radio"
            name="format"
            id="rels"
            value=" Real Estate Lawyer"
          />
          <label for="rels">Real Estate Lawyer</label>
        </div>
        <div>
          <input type="radio" name="format" id="terer" value="Tax Lawyer" />
          <label for="terer">Tax Lawyer</label>
        </div>
        <div>
          <input
            type="radio"
            name="format"
            id="qwerwew"
            value="Employment Lawyer"
          />
          <label for="qwerwew">Employment Lawyer</label>
        </div>
        <div>
          <input
            type="radio"
            name="format"
            id="adsdsds"
            value="Bankruptcy Lawyer"
          />
          <label for="adsdsds">Bankruptcy Lawyer</label>
        </div>
        <div>
          <input
            type="radio"
            name="format"
            id="dfgdsfg"
            value="Family Lawyer"
          />
          <label for="dfgdsfg">Family Lawyer</label>
        </div>

        <div>
          <input
            type="radio"
            name="format"
            id="fdfdfdfdf"
            value="Estate Planning Lawyer"
          />
          <label for="fdfdfdfdf">Estate Planning Lawyer</label>
        </div>
      </fieldset>
    </div>
  );
};

export default LawyerFilterer;
