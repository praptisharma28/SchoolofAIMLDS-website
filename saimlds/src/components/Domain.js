import React from "react";
import Modal from 'react-modal';
import { IoCloseCircle } from "react-icons/io5";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor:"black",
    borderRadius:"20px"
  },
};

const domain = [
  {
    img: "https://res.cloudinary.com/dib0peewu/image/upload/v1714994293/WhatsApp_Image_2024-05-06_at_2.11.54_PM_yybbj4.jpg",
    name: "AI/Ml Workshop1",
    link: "https://www.google.com/",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting"
  },
  {
    img: "https://res.cloudinary.com/dib0peewu/image/upload/v1714994295/WhatsApp_Image_2024-05-06_at_2.11.55_PM_rhqy2w.jpg",
    name: "AI/Ml Workshop2",
    link: "https://www.google.com/",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting"
  },
  {
    img: "https://res.cloudinary.com/dib0peewu/image/upload/v1714994296/WhatsApp_Image_2024-05-06_at_2.13.45_PM_jv3mnm.jpg",
    name: "AI/Ml Workshop3",
    link: "https://www.google.com/",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting"
  },
  {
    img: "https://res.cloudinary.com/dib0peewu/image/upload/v1714994313/WhatsApp_Image_2024-05-06_at_3.18.02_PM_copnk3.jpg",
    name: "AI/Ml Workshop4",
    link: "https://www.google.com/",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting"
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
      <div >
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Domain Modal"
      >
        {selectedDomain && (
          <div style={{zIndex:"1000",position:"relative" }}>
            <h2 style={{width:"85%"}}>
              {selectedDomain.name}
            </h2>
            <div style={{color:"white"}}>
              <p>Description: {selectedDomain.description}</p>
            </div>
              <button onClick={closeModal} style={{color:"white",position:"absolute",top:0,right:0}}><IoCloseCircle size={30}/></button>
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
                        style={{height:"270px"}}
                      />
                      <br />
                      {val.name}
                      <br />
                      <button className="name" onClick={() =>{ openModal(val); setSelectedDomain(val)}}>
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
