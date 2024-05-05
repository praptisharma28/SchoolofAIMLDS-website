import React from "react";
import Carousel from "react-multi-carousel";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

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
  {
    img: "https://img.freepik.com/free-photo/portrait-young-beautiful-woman-with-smoky-eyes-makeup-pretty-young-adult-girl-posing-studio-closeup-attractive-female-face_186202-4439.jpg",
    name: "Prapti Sharma",
    role: "Frontend Developer",
    insta: "https://www.instagram.com/prapti.sharma_/",
    Linkedin: "https://www.linkedin.com/in/prapti-sharma-7b0b3b1b4/",
  },
];

const TeamMember = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Team Members</h2>
              <br></br>
              <br></br>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                {data.map((item, index) => (
                  <div
                    className="item"
                    key={index}
                    style={{ marginBottom: "5px" }}
                  >
                    <img src={item.img} alt="Image" className="teamMemberImg" />
                    <h5>{item.name}</h5>
                    <p>{item.role}</p>
                    {/* <div
                    className="social-icon"
                      style={{
                        display: "flex",
                        gap: "20px",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <a href={item.insta} target="_blank">
                      <button
                        style={{
                          backgroundColor: "white",
                          padding: "10px",
                          borderRadius: "50%",
                          display: "flex",
                          gap: "20px",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        className="hover-btn"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </button>
                      </a>
                      <a href={item.Linkedin} target="_blank">
                      <button
                        style={{
                          backgroundColor: "white",
                          padding: "10px",
                          borderRadius: "50%",
                          gap: "20px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        className="hover-btn"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                      </button>
                      </a>
                    </div> */}
                    <div className="social-icon">
                <a href={item.Linkedin} target="_blank"><img src={navIcon1} alt="" style={{marginTop:"10px"}}/></a>
                <a href={item.insta} target="_blank"><img src={navIcon3} style={{marginTop:"13px"}} alt="" /></a>
              </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};

export default TeamMember;
