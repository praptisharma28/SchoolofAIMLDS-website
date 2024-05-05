import React from "react";

const domain = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_R2CaqMHVCpnln0Lt3KQPlYdU5kvFZLXJAmvMy_dGpw&s",
    name: "AI/Ml Workshop",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_R2CaqMHVCpnln0Lt3KQPlYdU5kvFZLXJAmvMy_dGpw&s",
    name: "AI/Ml Workshop",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_R2CaqMHVCpnln0Lt3KQPlYdU5kvFZLXJAmvMy_dGpw&s",
    name: "AI/Ml Workshop",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_R2CaqMHVCpnln0Lt3KQPlYdU5kvFZLXJAmvMy_dGpw&s",
    name: "AI/Ml Workshop",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.",
  },
  
];
const Domain = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h1>Our Domains</h1>
            </div>
            <div className="event-container">
              {domain.map((val, index) => {
                return (
                  <div key={index} class="e-card playing">
                    <div class="image"></div>

                    <div class="wave"></div>
                    <div class="wave"></div>
                    <div class="wave"></div>

                    <div class="infotop">
                      <img src={val.img} alt={val.name} />
                      <br />
                      {val.name}
                      <br />
                      <div class="name">{val.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Domain;
