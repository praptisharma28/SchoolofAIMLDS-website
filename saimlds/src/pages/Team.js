import React from 'react'
import TeamMember from '../components/TeamMember'
import Faculty from '../components/Faculty'
import TeamCore from '../components/TeamCore'
import BackButton from '../components/BackButton'
import { useLocation } from 'react-router-dom'
import { Container} from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/email-svgrepo-com.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

const Team = () => {
  const location = useLocation();
  console.log(location.pathname.split('/')[1]);
  return (
    <div className='team-Container'>
      <BackButton/>
      {/* <Faculty/> */}
      <br/>
      <TeamCore/>
      <br/>
      <br/>
      <TeamMember/>
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

export default Team