import React from "react";

const LawyerFilterer = () => {
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 150) {
      document.getElementsByClassName("LawyerFilterer")[0].style.top = "75px";
    } else {
      document.getElementsByClassName("LawyerFilterer")[0].style.top = "183px";
    }
  });

  return (
    <div className="LawyerFilterer">
      <h1>Filter Lawyers by :</h1>
      <br />
      <hr />
      <fieldset>
        <legend>Output format</legend>
        <div>
          <label for="txt">
            <input type="radio" name="format" id="txt" value="txt" checked />
            Civil Lawyer
          </label>
        </div>
        <div>
          <label for="csv">
            <input type="radio" name="format" id="csv" value="csv" />
            Criminal Laywer
          </label>
        </div>
        <div>
          <label for="csv">
            <input type="radio" name="format" id="csv" value="csv" />
            Criminal
          </label>
        </div>
        <div>
          <label for="csv">
            <input type="radio" name="format" id="csv" value="csv" />
            Criminal
          </label>
        </div>
      </fieldset>
    </div>
  );
};

export default LawyerFilterer;
