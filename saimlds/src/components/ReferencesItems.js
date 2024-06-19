import React from 'react';
import { Col } from "react-bootstrap";
import data from '../data/reference-data';

const References = ({section}) => {
  return (
    <Col className=''>
      <h2 className=''>{section}</h2>
          <p>{data[section].Description}</p>
          <h3>Topics</h3>
          <ul>
            {data[section].Topics.map((topic, index) => (
              <li key={index} className='bullet'>{topic}</li>
            ))}
          </ul>
          <h3>Resources</h3>
          <ul>
            {Object.entries(data[section].Resources).map(([name, description]) => (
              <li key={name} className='bullet'>
                <strong className='description-heading'>{name}</strong>: {description}
              </li>
            ))}
          </ul>
    </Col>
  );
};

export default References;
