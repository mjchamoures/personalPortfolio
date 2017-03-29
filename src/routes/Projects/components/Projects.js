/* Component files will always import React, I'm assuming */
import React from 'react';
import ProjectSelector from './ProjectSelector';
import ProjectShowCase from './ProjectShowCase';

/* Formatting imports */
import { Col } from 'react-bootstrap';

/* Projects */
import TexasHoldEmComponent from './TexasHoldEmComponent';

/* Next, component files will export a const function declaration, taking in props */
class Projects extends React.Component {

  constructor(props) {

    super();

    this.state = {
      currentSelectedProject : projectList[0]
    };
    this.handleProjectClick = this.handleProjectClick.bind(this);
  }


  handleProjectClick(projectId) {

    let selectedProject = this.getProject(projectId);

    this.setState({
      currentSelectedProject : selectedProject,
    });

  }

  render() {

    return (

      <div>
        <Col xs={12}>
          <ProjectSelector projectList={projectList} onClick={(i) => this.handleProjectClick(i)}/>
        </Col>

        
        <ProjectShowCase currentSelectedProject={this.state.currentSelectedProject} />
        
      </div>
    
    );  
  }

  getProject(projectId) {

    let project = null;
    let i = 0;

    while(project === null) {

      if(projectList[i].id === projectId) {
        project = projectList[i];
      }
      i++;
    }

    return project;
  }

};


const projectList = [
   {
    id : 'TexasHoldEmComponent',
    displayName : 'Texas Hold \'Em',
    description : "This is a texas hold em game. You can add as many players as in a single deck. No Scoring yet.",
    component : <TexasHoldEmComponent />,
    repo : 'google.scom'
  },
  {
    id : 'test',
    displayName : 'EYYY test!',
    description : 'nothing to see yet',
    component : <Col></Col>,
    repo : 'google.com'
  },
];





export default Projects;  