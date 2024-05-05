import React from "react";
import Carousel from "react-multi-carousel";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

const data = [
  {
    img: "https://res.cloudinary.com/db7nmlfln/image/upload/v1714898963/Members%20pics/Prapti_hi4qd8.jpg",
    name: "Prapti Sharma",
    insta: "https://github.com/praptisharma28",
    Linkedin: "https://www.linkedin.com/in/prapti-sharma-7b0b3b1b4/",
  },
  {
    img: "https://res.cloudinary.com/db7nmlfln/image/upload/v1714920828/Members%20pics/Priyanshu_Mishra_1_y3yidl.jpg",
    name: "Priyanshu Mishra",
    insta: "https://www.instagram.com/prapti.sharma_.../",
    Linkedin: "https://www.linkedin.com/in/prapti-sharma-7b0b3b1b4/",
  },
  {
    img: "https://res.cloudinary.com/db7nmlfln/image/upload/v1714898963/Members%20pics/Sarthak_Aggarwal_xfmszk.jpg",
    name: "Sarthak Sharma",
    insta: "https://www.instagram.com/prapti.sharma_/",
    Linkedin: "https://www.linkedin.com/in/prapti-sharma-7b0b3b1b4/",
  },
  {
    img: "https://res.cloudinary.com/db7nmlfln/image/upload/v1714917077/Members%20pics/swatantra_u9c4tr.jpg",
    name: "Swatantra Agarwal",
    insta: "https://www.instagram.com/prapti.sharma_/",
    Linkedin: "https://www.linkedin.com/in/prapti-sharma-7b0b3b1b4/",
  },
  {
    img: "https://res.cloudinary.com/db7nmlfln/image/upload/v1714898965/Members%20pics/Aamir_dvsctf.jpg",
    name: "Aamir",
    insta: "https://www.instagram.com/prapti.sharma_/",
    Linkedin: "https://www.linkedin.com/in/prapti-sharma-7b0b3b1b4/",
  },
  {
    img: "https://res.cloudinary.com/db7nmlfln/image/upload/v1714898966/Members%20pics/Anurakt_n44vuy.png",
    name: "Anurakt Singh",
    insta: "https://www.instagram.com/prapti.sharma_/",
    Linkedin: "https://www.linkedin.com/in/prapti-sharma-7b0b3b1b4/",
  },
  {
    img: "https://res.cloudinary.com/db7nmlfln/image/upload/v1714898973/Members%20pics/Aditya_nxbxxp.jpg",
    name: "Aditya",
    insta: "https://www.instagram.com/prapti.sharma_/",
    Linkedin: "https://www.linkedin.com/in/prapti-sharma-7b0b3b1b4/",
  },
  {
    img: "https://res.cloudinary.com/db7nmlfln/image/upload/v1714917067/Members%20pics/Pawan_Jain_b1wlim.jpg",
    name: "Pawan Jain",
    insta: "https://www.instagram.com/prapti.sharma_/",
    Linkedin: "https://www.linkedin.com/in/prapti-sharma-7b0b3b1b4/",
  },
  {
    img: "https://res.cloudinary.com/db7nmlfln/image/upload/v1714898974/Members%20pics/Shine_Gupta_uxajpn.jpg",
    name: "Shine Gupta",
    insta: "https://www.instagram.com/prapti.sharma_/",
    Linkedin: "https://www.linkedin.com/in/prapti-sharma-7b0b3b1b4/",
  },
  {
    img: "https://res.cloudinary.com/db7nmlfln/image/upload/v1714898972/Members%20pics/Urvashi_q6ysvb.jpg",
    name: "Urvashi",
    insta: "https://www.instagram.com/prapti.sharma_/",
    Linkedin: "https://www.linkedin.com/in/prapti-sharma-7b0b3b1b4/",
  },
  {
  img: "https://res.cloudinary.com/db7nmlfln/image/upload/v1714917083/Members%20pics/Khushi_Saini_djlyap.jpg",
  name: "Khushi Saini",
  insta: "https://www.instagram.com/prapti.sharma_/",
  Linkedin: "https://www.linkedin.com/in/prapti-sharma-7b0b3b1b4/",
},
{
img: "https://res.cloudinary.com/db7nmlfln/image/upload/v1714898963/Members%20pics/khushi_nnwz3n.jpg",
name: "Khushi",
insta: "https://www.instagram.com/prapti.sharma_/",
Linkedin: "https://www.linkedin.com/in/prapti-sharma-7b0b3b1b4/",
},
{
  img: "https://res.cloudinary.com/db7nmlfln/image/upload/v1714898973/Members%20pics/vedanshi_mebzja.png",
  name: "Vedanshi",
  insta: "https://www.instagram.com/prapti.sharma_/",
  Linkedin: "https://www.linkedin.com/in/prapti-sharma-7b0b3b1b4/",
  },
  {
    img: "https://res.cloudinary.com/db7nmlfln/image/upload/v1714898974/Members%20pics/Ashutosh_hvldbr.jpg",
    name: "Ashutosh",
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
                    <img src={item.img} alt="Image"  className="teamMemberImg" style={{width:"200px", height:"200px",objectFit:"cover"}}/>
                    <h5>{item.name}</h5>
                    <p>{item.role}</p>
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