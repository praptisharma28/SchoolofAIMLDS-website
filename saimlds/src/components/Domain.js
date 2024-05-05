import React from "react";
import Modal from 'react-modal';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor:"black"
  },
};

const domain = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_R2CaqMHVCpnln0Lt3KQPlYdU5kvFZLXJAmvMy_dGpw&s",
    name: "AI/Ml Workshop",
    link: "https://www.google.com/",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_R2CaqMHVCpnln0Lt3KQPlYdU5kvFZLXJAmvMy_dGpw&s",
    name: "AI/Ml Workshop",
    link: "https://www.google.com/",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_R2CaqMHVCpnln0Lt3KQPlYdU5kvFZLXJAmvMy_dGpw&s",
    name: "AI/Ml Workshop",
    link: "https://www.google.com/",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_R2CaqMHVCpnln0Lt3KQPlYdU5kvFZLXJAmvMy_dGpw&s",
    name: "AI/Ml Workshop",
    link: "https://www.google.com/",
  },
];

const Domain = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [selectedDomain, setSelectedDomain] = React.useState(null);

  const openModal = (domain) => {
    setSelectedDomain(domain);
    setIsOpen(true);
  };

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Domain Modal"
      >
        {selectedDomain && (
          <div style={{zIndex:"1000" }}>
            <h2 >
              {selectedDomain.name}
            </h2>
            <div style={{color:"white"}}>
              <p>Description: {selectedDomain.description}</p>
              <button onClick={closeModal} style={{color:"white"}}>Close</button>
            </div>
          </div>
        )}
      </Modal>

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
                      <button className="name" onClick={() => openModal(val)}>
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
