import React from "react";
import "./lawyerCard.css";
import Star from "../UserDashboardComponents/AppointmentCard/Star";
import { useNavigate } from "react-router";

const LawyerCard = ({ data }) => {
  const navigator = useNavigate();
  function handleClick(e) {
    localStorage.setItem(
      "lawyerData",
      JSON.stringify({
        email: data.email,
        name: data.name,
        price: data.price,
        image: data.image,
      })
    );
    navigator("/appointment");
  }

  function returnStar(bum) {
    let arr = [];
    for (let i = 0; i < bum; i++) {
      arr.push(<Star key={i + "xyz"} size="18" trans="2" />);
    }

    return arr;
  }

  // console.count(data)
  return (
    <div
      key={data.email}
      data-email={data.email}
      className="lawyer-card"
      data-aos="fade-right"
      onClick={handleClick}
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
          {data.skills.map((el, index) => {
            return (
              <div className="skill" key={index + "x"}>
                {el}
              </div>
            );
          })}
        </div>
        <div className="languages">
          {data.languages.map((el, index) => {
            return (
              <div className="language" key={index + "8n"}>
                {el}
              </div>
            );
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
