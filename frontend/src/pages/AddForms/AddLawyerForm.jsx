import React, { useContext, useState } from "react";
import "./AddLawyerForm.css";
import { useNavigate, Redirect, Route, Link } from "react-router-dom";
import LawyerContext from "../../context/Admin_page/lawyercontext/lawyerContext";

const AddLawyerForm = () => {
  
  
  //! >>>> ---------------------------------------------------------------------<<<<
  //!            THIS PAGE IS CREATED BY "MOHIMA BAHADUR", BHUT MEHANT <<<<
  //! >>>> ---------------------------------------------------------------------<<<<


  const context = useContext(LawyerContext);
  const [err, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { postLawyers } = context;
  const [fullName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState("");
  const [number, setNumber] = useState(null);
  const [skill1, setSkill1] = useState("");
  const [skill2, setSkill2] = useState("");
  const [skill3, setSkill3] = useState("");
  const [skill4, setSkill4] = useState("");
  const [experience, setExperience] = useState("");
  const [rank, setRank] = useState(null);
  const [bio, setBio] = useState("");
  const [price, setPrice] = useState(null);
  const [language1, setLanguage1] = useState("");
  const [language2, setLanguage2] = useState("");
  const [language3, setLanguage3] = useState("");
  const [rating, setRating] = useState("");
  const [gender, setGender] = useState("");
  const [profession, setProfession] = useState("");
  const submitForm = () => {
    setLoading(true);
    postLawyers({
      name: fullName,
      address: address,
      bio: bio,
      skills: [skill1, skill2, skill3, skill4],
      phone: number,
      image: image,
      gender: gender,
      profession: profession,
      languages: [language1, language2, language3],
      price: price,
      experience: experience,
      email: email,
      rank: rank,
    });
    setFirstName("");
    setEmail("");
    setAddress("");
    setImage("");
    setNumber(null);
    setNumber("");
    setSkill1("");
    setSkill2("");
    setSkill3("");
    setSkill4("");
    setExperience("");
    setRank(null);
    setBio("");
    setPrice(null);
    setPrice("");
    setLanguage1("");
    setLanguage2("");
    setLanguage3("");
    setRating("");
    setGender("");
    setProfession("");
    setRank(null);
  };
  const genders = ["Male", "Female", "Others"];

  return (
    <div className="formContainer">
      <Link to="/admin">
        <img
          className="Aclabsolute"
          style={{ top: "40px", left: "90px" }}
          src="Images/ACEyellow.png"
          alt="acelogo"
        />
      </Link>
      <div className="FirstViewFomer">
        <div>
          <img className="acleses" src="Images/ACE1.png" alt="acelogo" />
          <h1>Add Lawyer Form</h1>
        </div>
        <div>
          <img
            src="/Images/Signup/lawyerpng.jpg"
            style={{ clipPath: "circle()", width: "128px" }}
            alt="Admin_img"
          />
        </div>
      </div>
      <div className="layerForm">
        <div className="Layerform1">
          <div>
            <label>Full Name</label>
            <br />
            <input
              value={fullName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Full name"
              type="text"
              name="firstName"
              required
            />
          </div>

          <div>
            <label>Email</label>
            <br />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              type="email"
              name="email"
              required
            />
          </div>

          <div>
            <label>Address</label>
            <br />
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Full Address"
              type="text"
              name="address"
              required
            />
          </div>

          <div className="phoneAndgender">
            <div>
              <label>Phone</label>
              <br />
              <input
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="Phone Number"
                type="number"
                name="phone"
                required
              />
            </div>

            <div>
              <label>Gender</label>
              <br />
              <select
                className="selectGender"
                value={gender}
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              >
                <option>Select Option ... </option>

                {genders.map((el, i) => (
                  <option key={i}>{el}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label>Experience</label>
            <br />
            <input
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              placeholder="Experience"
              type="text"
              name="experience"
              required
            />
          </div>

          <div className="rankAndprice">
            <div>
              <label>Rank</label>
              <br />
              <input
                value={rank}
                onChange={(e) => setRank(e.target.value)}
                placeholder="rank"
                type="number"
                name="rank"
                required
              />
            </div>

            <div>
              <label>Price</label>
              <br />
              <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Fees"
                type="number"
                name="price"
                required
              />
            </div>
          </div>

          <div>
            <label>Image</label>
            <br />
            <input
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Image Link"
              type="text"
              name="image"
              required
            />
          </div>
        </div>
        <div className="Layerform1">
          <div className="languageContainer">
            <div>
              <label>Language-1</label>
              <br />
              <input
                value={language1}
                onChange={(e) => setLanguage1(e.target.value)}
                placeholder="language 1"
                type="text"
                name="language1"
                required
              />
            </div>

            <div>
              <label>Language-2</label>
              <br />
              <input
                value={language2}
                onChange={(e) => setLanguage2(e.target.value)}
                placeholder="Language 2"
                type="text"
                name="language2"
              />
            </div>

            <div>
              <label>Language-3</label>
              <br />
              <input
                value={language3}
                onChange={(e) => setLanguage3(e.target.value)}
                placeholder="Language 3"
                type="text"
                name="language3"
              />
            </div>
          </div>

          <div>
            <label>Lawyer Bio</label>
            <br />
            <input
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Type Bio"
              type="text"
              name="bio"
              required
            />
          </div>

          <div className="skillContainer">
            <div>
              <label>Skill-1</label>
              <br />
              <input
                value={skill1}
                onChange={(e) => setSkill1(e.target.value)}
                placeholder="Skill1"
                type="text"
                name="skill"
                required
              />
            </div>

            <div>
              <label>Skill-2</label>
              <br />
              <input
                value={skill2}
                onChange={(e) => setSkill2(e.target.value)}
                placeholder="Skill2"
                type="text"
                name="skil2"
              />
            </div>

            <div>
              <label>Skill-3</label>
              <br />
              <input
                value={skill3}
                onChange={(e) => setSkill3(e.target.value)}
                placeholder="Skill3"
                type="text"
                name="skil3"
              />
            </div>

            <div>
              <label>Skill-4</label>
              <br />
              <input
                value={skill4}
                onChange={(e) => setSkill4(e.target.value)}
                placeholder="Skill4"
                type="text"
                name="skil4"
              />
            </div>
          </div>

          <div>
            <label>Lawyer Type</label>
            <br />
            <input
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
              placeholder="Lawyer Type..."
              type="text"
              name="lawyerType"
              required
            />
          </div>

          <div>
            <label>Rating</label>
            <br />
            <input
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              placeholder="Rating"
              type="text"
              name="rating"
              required
            />
          </div>
          <div>
            <button type="submit" onClick={submitForm}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddLawyerForm;
