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
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_R2CaqMHVCpnln0Lt3KQPlYdU5kvFZLXJAmvMy_dGpw&s",
    name: "AI/Ml Workshop1",
    link: "https://www.google.com/",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_R2CaqMHVCpnln0Lt3KQPlYdU5kvFZLXJAmvMy_dGpw&s",
    name: "AI/Ml Workshop2",
    link: "https://www.google.com/",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_R2CaqMHVCpnln0Lt3KQPlYdU5kvFZLXJAmvMy_dGpw&s",
    name: "AI/Ml Workshop3",
    link: "https://www.google.com/",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_R2CaqMHVCpnln0Lt3KQPlYdU5kvFZLXJAmvMy_dGpw&s",
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
            <h2 >
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

      <section className="skill" id="skills">
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
