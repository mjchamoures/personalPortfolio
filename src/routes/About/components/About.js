import React from 'react'
import { ContactMe } from './ContactMe';
import { BasicInfo } from './BasicInfo';
import { Resume } from './Resume';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';

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
