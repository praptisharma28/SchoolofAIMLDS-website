import React from "react";
import Modal from 'react-modal';
import { IoCloseCircle } from "react-icons/io5";
import { CiCircleMore } from "react-icons/ci";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: "linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)",
    borderRadius: "20px"
  },
};

const domain = [
  {
    img: "https://res.cloudinary.com/dib0peewu/image/upload/v1714994295/WhatsApp_Image_2024-05-06_at_2.11.55_PM_rhqy2w.jpg",
    name: "Research & Innovation",
    link: "https://www.google.com/",
    description: "In our research domain, our primary focus is on developing novel models for research paper writing while also reviewing existing literature. We aim to advance the field by creating innovative approaches to paper writing and critically analyzing and synthesizing research findings. Additionally, we foster peer-to-peer learning by encouraging collaborative projects that leverage collective knowledge and expertise to push the boundaries of research and knowledge dissemination."
  },
  {
    img: "https://res.cloudinary.com/dib0peewu/image/upload/v1714994293/WhatsApp_Image_2024-05-06_at_2.11.54_PM_yybbj4.jpg",
    name: "AI & Data Science",
    link: "https://www.google.com/",
    description: "In the realm of Artificial Intelligence and Machine Learning, we delve into the realms of data-driven innovation and intelligent decision-making. Our domain pioneers end-to-end project development, crafting solutions that tangibly benefit individuals and industries alike. From healthcare to finance, we harness AI/ML to drive transformative change, fostering collaborative projects that leverage collective expertise for impactful outcomes."
  },
  {
    img: "https://res.cloudinary.com/dib0peewu/image/upload/v1714994296/WhatsApp_Image_2024-05-06_at_2.13.45_PM_jv3mnm.jpg",
    name: "Application Deployment",
    link: "https://www.google.com/",
    description: "This domain mainly works on end-to-end project development, which focuses on real-world projects that can especially help people in their daily lives. Additionally, our domain has also worked on some industrial projects, contributing to the enhancement of India's capabilities and influence. Furthermore, our focus extends to peer-to-peer learning, fostering collaborative projects that capitalize on shared knowledge and expertise."
  },
  {
    img: "https://res.cloudinary.com/dib0peewu/image/upload/v1718451875/r44lnyj1a2x7jcbp48yn.png",
    name: "PR & Graphics Designing",
    link: "https://www.google.com/",
    description: "Welcome to the Graphics and PR section of the School of AI, ML, and Data Science! In today’s digital landscape, compelling visuals and effective communication strategies are essential for success. Our curriculum is designed to equip students with the skills needed to excel in these areas. Through hands-on projects and real-world case studies, students learn to create stunning graphics that captivate audiences and convey complex information with clarity."
  },
];

const Domain = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [selectedDomain, setSelectedDomain] = React.useState("");

  const openModal = (domain) => {
    setSelectedDomain(domain);
    setIsOpen(true);
  };

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Domain Modal"
        >
          {selectedDomain && (
            <div style={{ zIndex: "999", position: "relative" }}>
              <h2 style={{ width: "85%" }}>
                {selectedDomain.name}
              </h2>
              <div style={{ color: "white" }}>
                <p>Description: {selectedDomain.description}</p>
              </div>
              <button onClick={closeModal} style={{ color: "white", position: "absolute", top: 0, right: 0 }}><IoCloseCircle size={30} /></button>
            </div>
          )}
        </Modal>
      </div>

      <section className="skill" id="domain">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="wow zoomIn">
                <h1 style={{ textAlign: "center" }}>Our Domains</h1>
              </div>
              <div className="event-container">
                {domain.map((val, index) => (
                  <div key={index} className="e-card playing">
                    <div className="image"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>

                    <div className="infotop">
                      <img
                        src={val.img}
                        alt={val.name}
                        className="domain-img"
                        style={{ height: "170px", width: "100%", objectFit: "conver", borderRadius: "20px" }}
                      />
                      <br />
                      {val.name}
                      <br />
                      <button className="name" onClick={() => { openModal(val); setSelectedDomain(val) }}>
                        <span style={{ height: "20px" }}>
                          <CiCircleMore size={"20px"} />
                        </span>
                        Check out more here!
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};


export default Domain;
