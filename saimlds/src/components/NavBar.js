import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";
import Counter from "./Counter";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" style={{ width: "80px" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
              <Nav.Link href="#domain" className={activeLink === 'domain' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('domain')}>Domain</Nav.Link>
              <Nav.Link href="#event" className={activeLink === 'event' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('event')}>Events</Nav.Link>
              <Nav.Link href="#team" className={activeLink === 'team' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('team')}>Team</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <HashLink to='#connect'>
                <button className="vvd" style={{ padding: "10px 20px" }}><span>Let’s Connect</span></button>
              </HashLink>

            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
