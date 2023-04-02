import React from "react";
import "./lawyerCard.css";
import Star from "../UserDashboardComponents/AppointmentCard/Star";
const LawyerCard = ({data}) => {



  function returnStar(bum) {
    let arr = [];
    for (let i = 0; i < bum; i++) {
      arr.push(<Star size="18" trans="2" />);
    }

    return arr;
  }

  // console.count(data)
  return (
    <div
      data-id={data.id}
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
            {data.name}
          </h1>
          <p>
            {data.profession} {returnStar(data.rating)}
          </p>
          <p className="experience">Experience: {data.experience}</p>
        </div>
        <div className="bio-div">
          <p className="bio">{data.bio}</p>
        </div>
        <div className="skills-div">
          {data.skills.map((el) => {
            return <div className="skill" key={el}>{el}</div>;
          })}
        </div>
        <div className="languages">
          {data.languages.map((el) => {
            return <div className="language" key={el}>{el}</div>;
          })}
        </div>

        <div className="profile-pic">
          <div style={{ position: "relative" }} className="pic">
            <img className="LawyerImageX" src={data.image} alt="ssss" />
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
