import React from 'react'
import { Container} from "react-bootstrap";
import BackButton from '../components/BackButton';
import TabComponent from '../components/Tab';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/email-svgrepo-com.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

const References = () => {
  return (
    <div className='reference-section'>
    <BackButton/>
      <div className='reference-section-heading'>
            <h1>References</h1>
      </div>
      <TabComponent/>
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
    </div>
  )
}

export default References