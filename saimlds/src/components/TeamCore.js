import React from "react";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

const data = [
  {
    img: "https://img.freepik.com/free-photo/portrait-young-beautiful-woman-with-smoky-eyes-makeup-pretty-young-adult-girl-posing-studio-closeup-attractive-female-face_186202-4439.jpg",
    name: "Prapti Sharma",
    role: "Frontend Developer",
    insta: "https://www.instagram.com/prapti.sharma_/",
    Linkedin: "https://www.linkedin.com/in/prapti-sharma-7b0b3b1b4/",
  },
  {
    img: "https://img.freepik.com/free-photo/portrait-young-beautiful-woman-with-smoky-eyes-makeup-pretty-young-adult-girl-posing-studio-closeup-attractive-female-face_186202-4439.jpg",
    name: "Prapti Sharma",
    role: "Frontend Developer",
    insta: "https://www.instagram.com/prapti.sharma_/",
    Linkedin: "https://www.linkedin.com/in/prapti-sharma-7b0b3b1b4/",
  },
  {
    img: "https://img.freepik.com/free-photo/portrait-young-beautiful-woman-with-smoky-eyes-makeup-pretty-young-adult-girl-posing-studio-closeup-attractive-female-face_186202-4439.jpg",
    name: "Prapti Sharma",
    role: "Frontend Developer",
    insta: "https://www.instagram.com/prapti.sharma_/",
    Linkedin: "https://www.linkedin.com/in/prapti-sharma-7b0b3b1b4/",
  },
  {
    img: "https://img.freepik.com/free-photo/portrait-young-beautiful-woman-with-smoky-eyes-makeup-pretty-young-adult-girl-posing-studio-closeup-attractive-female-face_186202-4439.jpg",
    name: "Prapti Sharma",
    role: "Frontend Developer",
    insta: "https://www.instagram.com/prapti.sharma_/",
    Linkedin: "https://www.linkedin.com/in/prapti-sharma-7b0b3b1b4/",
  },
];

const TeamCore = () => {
  return (
    <section className="skill" id="team">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Core Team</h2>
              <br></br>
              <br></br>
              <div className="core-team-container">
                {data.map((val, index) => {
                  return (
                    <div key={index} className="team-box">
                      <div className="team-img">
                        <img src={val.img} alt="" />
                        
                      </div>
                      <div className="team-info">
                        <h3>{val.name}</h3>
                        <span>{val.role}</span>
                      </div>
                      <div className="social-icon">
                          <a href={val.Linkedin} target="_blank">
                            <img
                              src={navIcon1}
                              alt=""
                            />
                          </a>
                          <a href={val.insta} target="_blank">
                            <img
                              src={navIcon3}
                              alt=""
                            />
                          </a>
                        </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamCore;
