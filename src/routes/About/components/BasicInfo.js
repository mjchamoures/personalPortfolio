import React from 'react';
import { Panel } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { Button } from 'react-bootstrap';



export const BasicInfo = (props) => (

  <Panel header="Me">
    <Form horizontal>

      <FormGroup controlId="formHorizontalName">
        <Col componentClass={ControlLabel} sm={2}>
          Name:
        </Col>
        <Col componentClass={FormControl.Static} xs={12} sm={10}>
          Michael Chamoures
        </Col>
      </FormGroup>
      
      <FormGroup controlId="formHorizontalEmail">
        <Col componentClass={ControlLabel} sm={2}>
          Email:
        </Col>
        <Col componentClass={FormControl.Static} xs={12} sm={10}>
          mchamoures0@gmail.com
        </Col>
      </FormGroup>

      <FormGroup controlId="formHorizontalLinkedIn">
        <Col componentClass={ControlLabel} sm={2}>
          LinkedIn:
        </Col>
        <Col xs={12} sm={10}>
          <Button bsStyle="link" href="https://www.linkedin.com/in/michael-chamoures-323aa847/" target="_blank">My Profile</Button>
        </Col>
      </FormGroup>

      <FormGroup controlId="formHorizontalGithub">
        <Col componentClass={ControlLabel} sm={2}>
          GitHub:
        </Col>
        <Col xs={12} sm={10}>
          <Button bsStyle="link" href="https://github.com/mjchamoures" target="_blank">https://github.com/mjchamoures</Button>
        </Col>
      </FormGroup>

    </Form>
  </Panel>

);



export default BasicInfo;