import React from "react";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/github-alt-svgrepo-com.svg";

const data = [
  {
    img: "https://res.cloudinary.com/db7nmlfln/image/upload/v1714898963/Members%20pics/HimanshuBansal_jasgll.jpg",
    title: "Dean IEC",
    name: "Dr. K.L.A. khan",
    Linkedin: "https://www.linkedin.com/in/himanshu-bansal-06517322a/",
  },
  {
    img: "https://res.cloudinary.com/db7nmlfln/image/upload/v1714898963/Members%20pics/HimanshuBansal_jasgll.jpg",
    title: "Head IC ",
    name: "Dr. S. Rathore",
    Linkedin: "https://www.linkedin.com/in/himanshu-bansal-06517322a/",
  },
  {
    img: "https://res.cloudinary.com/db7nmlfln/image/upload/v1714898963/Members%20pics/HimanshuBansal_jasgll.jpg",
    title: "Faculty incharge",
    name: "Dr. Sushil kumar",
    Linkedin: "https://www.linkedin.com/in/himanshu-bansal-06517322a/",
  },

];

const Faculty = () => {
  return (
    <section className="skill" id="team">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn core-team">
              <h2>Faculty Support</h2>
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
                        <h6>{val.title}</h6>
                        <span>{val.role}</span>
                      </div>
                      <div className="social-icon">
                        <a href={val.Linkedin} target="_blank">
                          <img
                            src={navIcon1}
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

export default Faculty;
