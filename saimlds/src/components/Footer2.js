import React from 'react';
import logo from "../assets/img/logo.png";
import logo1 from "../assets/img/KIC_logo.png";
import logo2 from "../assets/img/LOGOS.png";
import { Container} from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/email-svgrepo-com.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

function Footer2({ type}) {
  return (
    <footer className='footer'>
      <section className="footer-container" style={{ zIndex: "999" }}>
        <div className='footer-left-container'>
          <div className='footer-img-container'>
            <a href='#'><img src={logo} alt="SAIMLDS" /></a>
          </div>
          <div className='footer-img-container'>
            <a href='#'><img src={logo1} alt="KIC" /></a>
          </div>
          <div className='footer-img-container'>
            <a href='https://www.kiet.edu/' target='_blank'><img src={logo2} alt="KIET" /></a>
          </div>
        </div>
        <div className='footer-divider'></div>
        <div className='footer-right-container'>
          <div >
            <div className='footer-right-heading'>Back to</div>
            <ul>
              <a href='#'><li>→Home</li></a>
              <a href='#about'><li>→About</li></a>
              <a href='#connect'><li>→Contact</li></a>
            </ul>

          </div>
          <div >
            <div className='footer-right-heading'>Explore</div>
            <ul>
              <a href='#event'><li>→Events</li></a>
              <a href='#domain'><li>→Domains</li></a>
              <a href='#team'><li>→Team</li></a>
            </ul>
          </div>
          <div >
            <div className='footer-right-heading'>Other</div>
            <ul>
              <a href='#stats'><li>→Stats</li></a>
              <a href='#faculty'><li>→Faculty</li></a>
              {/* <a href='#'><li>→Team</li></a> */}
            </ul>

          </div>

        </div>
      </section>
      <Container>
        <div className="align-items-center">
          <div size={12} sm={6} className="text-center mt-5">
            <div className="social-icon">
              <a href="https://www.linkedin.com/company/school-of-aimlds/"><img src={navIcon1} alt="Icon" /></a>
              <a href="mailto:aischool.ic@kiet.edu"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/school_of_aimlds?igsh=ems0NDFwMHB5Yjd3"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p className='footer-designation'>Made with ❤️ by Team School of AI, ML & DS.</p>
          </div>
        </div>
      </Container>

     <div style={{ zIndex: "-999", marginTop: "100px" }}>
        <svg
          className='footer-svg'
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 
            58-18 88-18s
            58 18 88 18 
            58-18 88-18 
            58 18 88 18
            v44h-352z"
            />
          </defs>
          <g className="waves">
            <use
              href="#gentle-wave"
              x="50"
              y="0"
              fill="#AA367C"
              fillOpacity=".2"
            />
            <use
              href="#gentle-wave"
              x="50"
              y="3"
              fill="#4A2FBD"
              fillOpacity=".5"
            />
            <use
              href="#gentle-wave"
              x="50"
              y="6"
              fill="#AA367C"
              fillOpacity=".9"
            />
          </g>
        </svg>
      </div> 
    </footer>
  );
}

export default Footer2;
