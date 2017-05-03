/* ProjectSelector component, which will hold links to all the projects
 *
 * author : michael chamoures
 * created date : 3/27/17
 * last updated date : 3/28/17
 */

import React from 'react';
import ProjectDescription from './ProjectDescription';
import ProjectDemo from './ProjectDemo';

import { Col, Row } from 'react-bootstrap';



class ProjectShowCase extends React.Component {

  render() {

    // this will have a prop of currentSelectedProject...it should map to display selected component and pass it's info on down the children
    // will render a ProjectDescription component and ProjectDemo component
    return (

      <div id="project-showcase-main">
        <Col md={12}>
          <p className="visible-xs visible-sm">
            <button type="button" className="btn btn-primary btn-xs" data-toggle="offcanvas" onClick={this.props.handleCollapseToggle}><i className="glyphicon glyphicon-indent-left"></i></button>
          </p>
          <Row>
            <Col md={12}>

              <ProjectDescription 
                displayName={this.props.project.displayName}
                description={this.props.project.description}
                repo={this.props.project.repo}
                techUsed={this.props.project.techUsed}
                siteUrl={this.props.project.siteUrl}

              />
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <ProjectDemo
                component={this.props.project.component}
              />
            </Col>
          </Row>
        </Col>
      </div>

    );

  }


}


export default ProjectShowCase;