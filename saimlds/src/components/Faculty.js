import React from "react";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/email-svgrepo-com.svg";

const data = [
  {
    img: "https://scholar.googleusercontent.com/citations?view_op=view_photo&user=ifkKuLYAAAAJ&citpid=1",
    title: "Dean IEC",
    name: "Dr. K.L.A. khan",
    Linkedin: "https://www.linkedin.com/in/himanshu-bansal-06517322a/",
    mail: "kiet.edu"
  },
  {
    img: "https://www.kiet.edu/uploads/faculty/892222019.jpg",
    title: "Head IC ",
    name: "Dr. S. Rathore",
    Linkedin: "https://www.linkedin.com/in/himanshu-bansal-06517322a/",
    mail: "kiet.edu"
  },
  {
    img: "https://scholar.googleusercontent.com/citations?view_op=view_photo&user=j6EVt4YAAAAJ&citpid=2",
    title: "Faculty incharge",
    name: "Dr. Sushil kumar",
    Linkedin: "https://www.linkedin.com/in/himanshu-bansal-06517322a/",
    mail: "kiet.edu"
  },

];

const Faculty = () => {
  return (
    <section className="skill" id="faculty">
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
                        <a href={`mailto:${val.mail}`}><img src={navIcon2} alt="Icon" /></a>
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
