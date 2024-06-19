import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import ReferencesItem from '../components/ReferencesItems';
import Footer2 from '../components/Footer2';
import data from '../data/reference-data';
import BackButton from '../components/BackButton';

const References = () => {
  return (
    <div className='reference-section'>
    <BackButton/>
      <div className='reference-section-heading'>
            <h1>References</h1>
      </div>
      {Object.keys(data).map((section) => (
        <Container key={section} className='reference-items' style={{width:"90%"}}>
          <ReferencesItem section={section}/>
        </Container>
      ))}
      <Footer2/>
    </div>
  )
}

export default References