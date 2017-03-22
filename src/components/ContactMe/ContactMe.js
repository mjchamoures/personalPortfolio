import React from 'react'
// import Button from '../../../components/coreComponents/Button';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Checkbox } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';

export const ContactMe = (props) => (

  <Panel header="Contact Me">
    <Form horizontal>
      <FormGroup controlId="formHorizontalEmail">
        <Col componentClass={ControlLabel} sm={2}>
          Name:
        </Col>
        <Col xs={12} sm={10}>
          <FormControl type="email" placeholder="Email" />
        </Col>
      </FormGroup>

      <FormGroup controlId="formHorizontalEmail">
        <Col componentClass={ControlLabel} sm={2}>
          Email:
        </Col>
        <Col xs={12} sm={10}>
          <FormControl type="email" placeholder="Email" />
        </Col>
      </FormGroup>

      <FormGroup controlId="formHorizontalPassword">
        <Col componentClass={ControlLabel} sm={2}>
          Message:
        </Col>
        <Col sm={10}>
          <FormControl componentClass="textarea" placeholder="Enter Message..." />
        </Col>
      </FormGroup>

      <FormGroup>
        <Col smOffset={2} sm={10}>
          <Button type="submit">
            Sign in
          </Button>
        </Col>
      </FormGroup>
    </Form>
  </Panel>

);

export default ContactMe;
