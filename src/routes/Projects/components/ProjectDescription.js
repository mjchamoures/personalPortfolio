import React from 'react';
import { Panel, Col, Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';


class ProjectDescription extends React.Component {


  render() {


    return (

      <Panel header="Description">
        <Form horizontal>

          <FormGroup controlId="formHorizontalName">
            <Col componentClass={ControlLabel} sm={2}>
              Project Name:
            </Col>
            <Col componentClass={FormControl.Static} xs={12} sm={10}>
              Project 1
            </Col>
          </FormGroup>
          
          <FormGroup controlId="formHorizontalDesc">
            <Col componentClass={ControlLabel} sm={2}>
              Description:
            </Col>
            <Col componentClass={FormControl.Static} xs={12} sm={10}>
              This project does....
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalTech">
            <Col componentClass={ControlLabel} sm={2}>
              Technologies used: 
            </Col>
            <Col componentClass={FormControl.Static} xs={12} sm={10}>
              React, bootstrap, etc...
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

  }

}


export default ProjectDescription;