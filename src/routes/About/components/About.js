import React from 'react'
import { ContactMe } from './ContactMe';
import { BasicInfo } from './BasicInfo';
import { Resume } from './Resume';
import { Col } from 'react-bootstrap';


export const About = (props) => (

  <div>
    
    <Col xs={12} sm={6}>
      <BasicInfo />
    </Col>

    <Col xs={12} sm={6}>
      <ContactMe />
    </Col>

    <Col xs={12}>
      <Resume /> 
    </Col>
    
  </div>


);

export default About
