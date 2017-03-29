import React from 'react';
import ProjectDescription from './ProjectDescription';
import ProjectDemo from './ProjectDemo';

import { Col } from 'react-bootstrap';



class ProjectShowCase extends React.Component {

  render() {

    // this will have a prop of currentSelectedProject...it should map to display selected component and pass it's info on down the children
    // will render a ProjectDescription component and ProjectDemo component
    return (
      <Col xs={12}>
        <Col xs={12}>
          <ProjectDescription 
            displayName={this.props.currentSelectedProject.displayName}
            description={this.props.currentSelectedProject.description}
            repo={this.props.currentSelectedProject.repo}

          />
        </Col>

        <Col xs={12}>
          <ProjectDemo 
            component={this.props.currentSelectedProject.component}
          />
        </Col>  
      </Col>

    );

  }


}


export default ProjectShowCase;