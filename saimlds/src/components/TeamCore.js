import React from "react";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/github-alt-svgrepo-com.svg";

const data = [
  {
    img: "https://res.cloudinary.com/db7nmlfln/image/upload/v1714898965/Members%20pics/Vikas_Kumar_swbgkr.jpg",
    name: "Vikas Kumar",
    insta: "https://github.com/VikasKumar2001",
    Linkedin: "https://www.linkedin.com/in/vikaskumar142001/",
  },
  {
    img: "https://res.cloudinary.com/db7nmlfln/image/upload/v1714898965/Members%20pics/Garvit_Agarwal_ylwzls.jpg",
    name: "Garvit Agarwal",
    insta: "https://github.com/Garvit414",
    Linkedin: "https://www.linkedin.com/in/garvit-agarwal-machine-learning/",
  },
  {
    img: "https://res.cloudinary.com/db7nmlfln/image/upload/v1714917547/Members%20pics/GauravPayal_dbrv1k.jpg",
    name: "Gaurav Payal",
    insta: "https://github.com/gaurav-jnr",
    Linkedin: "https://www.linkedin.com/in/2oo3-gaurav/",
  },
  {
    img: "https://res.cloudinary.com/db7nmlfln/image/upload/v1714898963/Members%20pics/HimanshuBansal_jasgll.jpg",
    name: "Himanshu Bansal",
    insta: "https://github.com/invinciblebansal",
    Linkedin: "https://www.linkedin.com/in/himanshu-bansal-06517322a/",
  },
  {
    img: "https://res.cloudinary.com/db7nmlfln/image/upload/t_samarth/v1714898966/Members%20pics/Samarth_Tandon_h9a5db.jpg",
    name: "Samarth Tandon",
    insta: "https://github.com/Samarth-Tandon",
    Linkedin: "https://www.linkedin.com/in/samarth-tandon/",
  },
  {
    img: "https://res.cloudinary.com/db7nmlfln/image/upload/t_samarth/v1714898971/Members%20pics/Shantanu_Mishra_fugphv.jpg",
    name: "Shantanu Mishra",
    insta: "https://github.com/hellomishraa",
    Linkedin: "https://www.linkedin.com/in/hellomishraa/",
  },
  
];

const TeamCore = () => {
  return (
    <section className="skill" id="team">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn core-team">
              <h2>Core Team</h2>
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
                            width={"100px"}
                            height={"100px"}
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
