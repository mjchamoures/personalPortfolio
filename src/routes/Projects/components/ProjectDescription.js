/* ProjectDescription Component, does....
 *
 * author : michael chamoures
 * created date : 3/27/17
 * last updated date : 3/28/17
 */


import React from 'react';
import { Panel, Col, Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';


class ProjectDescription extends React.Component {


  render() {

    let siteUrl = this.props.siteUrl ? 
                  (<a href={this.props.siteUrl} target="_blank">{this.props.siteUrl}</a>) : 
                  (<p>N/A</p>);

    return (

      <Panel header="Description">
        <Form horizontal>

          <FormGroup controlId="formHorizontalName">
            <Col componentClass={ControlLabel} sm={2}>
              Project Name:
            </Col>
            <Col componentClass={FormControl.Static} xs={12} sm={10}>
              {this.props.displayName}
            </Col>
          </FormGroup>
          
          <FormGroup controlId="formHorizontalDesc">
            <Col componentClass={ControlLabel} sm={2}>
              Description:
            </Col>
            <Col componentClass={FormControl.Static} xs={12} sm={10}>
              {this.props.description}
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalTech">
            <Col componentClass={ControlLabel} sm={2}>
              Technologies used: 
            </Col>
            <Col componentClass={FormControl.Static} xs={12} sm={10}>
              {this.props.techUsed}
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalName">
            <Col componentClass={ControlLabel} sm={2}>
              Site URL:
            </Col>
            <Col componentClass={FormControl.Static} xs={12} sm={10}>
              {siteUrl}
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalGithub">
            <Col componentClass={ControlLabel} sm={2}>
              More Info / Github:
            </Col>
            <Col xs={12} sm={10}>
              <a href={this.props.repo} target="_blank">{this.props.repo}</a>
            </Col>
          </FormGroup>

        </Form>
      </Panel>

    );

  }

}


export default ProjectDescription;