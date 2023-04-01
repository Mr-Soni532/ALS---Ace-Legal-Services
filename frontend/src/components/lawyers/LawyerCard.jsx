import React from "react";
import "./lawyerCard.css";
import Star from "../UserDashboardComponents/AppointmentCard/Star";
const LawyerCard = (data) => {
  const { props } = data;

  const printdataid = (e) => {
    // ! GET LAWER ID FROM HERE , Change props.name to -->  props.id
    console.log(props.name);
  };

  function returnStar(bum) {
    let arr = [];
    for (let i = 0; i < bum; i++) {
      arr.push(<Star size="18" trans="2" />);
    }

    return arr;
  }

  return (
    <div
      data-id={props.id}
      onClick={printdataid}
      className="lawyer-card"
      data-aos="fade-right"
    >
      <div className="card">
        <div className="name-div">
          <h1>
            <img
              style={{ width: "34px", transform: "translateY(5px)" }}
              src="Images/DashBoardImages/Yellowpog.png"
              alt="df"
            />
            &nbsp;
            {props.name}
          </h1>
          <p>
            {props.profession} {returnStar(props.rating)}
          </p>
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

        <div className="profile-pic">
          <div style={{ position: "relative" }} className="pic">
            <img className="LawyerImageX" src={props.image} alt="ssss" />
            <div className="LawyerImageXDark" alt="ssss">
              Book an <br /> Appointment
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawyerCard;
