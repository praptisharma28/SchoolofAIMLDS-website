import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Container } from "react-bootstrap";
import ReferencesItem from './References';
import data from '../data/ml';
import genAi from '../data/genAi';
import nlp from '../data/nlp';
import cv from '../data/cv';

function TabComponent() {
    return (
        <Tabs
            defaultActiveKey="Machine Learning"
            id="uncontrolled-tab-example"
            className="tab-component"
            style={{border: 'none'}}
        >
            <Tab eventKey="Machine Learning" title="Machine Learning">
                {Object.keys(data).map((section,index) => (
                    <Container key={index} className='reference-items' style={{ width: "90%" }}>
                        <ReferencesItem section={section} data={data} id={index+1}/>
                    </Container>
                ))}
            </Tab>
            <Tab eventKey="Generative AI" title="Generative AI">
                {Object.keys(genAi).map((section,index) => (
                    <Container key={index} className='reference-items' style={{ width: "90%" }}>
                        <ReferencesItem section={section} data={genAi} id={index+1}/>
                    </Container>
                ))}
            </Tab>
            <Tab eventKey="Computer Vision" title="Computer Vision">
                {Object.keys(cv).map((section,index) => (
                    <Container key={index} className='reference-items' style={{ width: "90%" }}>
                        <ReferencesItem section={section} data={cv} id={index+1}/>
                    </Container>
                ))}
            </Tab>
            <Tab eventKey="NLP" title="NLP">
                {Object.keys(nlp).map((section,index) => (
                    <Container key={index} className='reference-items' style={{ width: "90%" }}>
                        <ReferencesItem section={section} data={nlp} id={index+1}/>
                    </Container>
                ))}
            </Tab>

        </Tabs>
    );
}

export default TabComponent;