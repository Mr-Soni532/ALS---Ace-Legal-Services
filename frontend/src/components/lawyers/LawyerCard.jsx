import React from 'react'
import "./lawyerCard.css"
const LawyerCard = (data) => {
    const { props } = data
    // const props = {
    //     name: "John Smith",
    //     address: "123 Main St, Anytown, USA",
    //     profession: "Personal Injury Lawyer",
    //     bio: "John Smith is a personal injury lawyer with over 10 years of experience helping clients get the compensation they deserve. He is passionate about justice and fighting for the rights of his clients.",
    //     skills: ["Negotiation", "Litigation", "Mediation"],
    //     experience: "10+ years",
    //     image: "https://randomuser.me/api/portraits/men/1.jpg",
    //     languages: ["English", "Spanish"],
    // }
    return (
        <div className='lawyer-card'>
            <div className="card">
                <div className="profile-info">
                    <div className="name-div">
                        <h1>{props.name}</h1>
                        <p>{props.profession}</p>
                        <p className='experience'>Experience: {props.experience}</p>
                        <p className="bio">{props.bio}</p>
                    </div>
                    <div className="skills-div">
                        {props.skills.map((el) => {
                            return <div className="skill">{el}</div>
                        })}
                    </div>
                    <div className="languages">
                        {props.languages.map((el) => {
                            return <div className="language">{el}</div>
                        })}
                    </div>
                </div>
                <div className="profile-pic">
                    <div className="pic">
                        <img src={props.image} alt="" srcset="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LawyerCard