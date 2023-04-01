import React from "react";
import "./lawyerCard.css";
const LawyerCard = (data) => {
  const { props } = data;
  return (
    <div className="lawyer-card">
      <div className="card">
        <div className="name-div">
          <h1>
            <img
              style={{ width: "34px", transform: "translateY(5px)" }}
              src="Images/DashBoardImages/Yellowpog.png"
              alt="df"
            />{" "}
            &nbsp;
            {props.name}
          </h1>
          <p>{props.profession}</p>
          <p className="experience">Experience: {props.experience}</p>
        </div>
        <div className="bio-div">
          <p className="bio">{props.bio}</p>
        </div>
        <div className="skills-div">
          {props.skills.map((el) => {
            return <div className="skill">{el}</div>;
          })}
        </div>
        <div className="languages">
          {props.languages.map((el) => {
            return <div className="language">{el}</div>;
          })}
        </div>
        {/* </div> */}
        <div className="profile-pic">
          <div className="pic">
            <img src={props.image} alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawyerCard;
