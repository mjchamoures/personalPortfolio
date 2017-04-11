/* ProjectSelector component, which will hold links to all the projects
 *
 * author : michael chamoures
 * created date : 3/27/17
 * last updated date : 3/28/17
 */


/* Component files will always import React, I'm assuming */
import React from 'react';
import ProjectSelector from './ProjectSelector';
import ProjectShowCase from './ProjectShowCase';

/* Formatting imports */
import { Col } from 'react-bootstrap';

/* Projects */
import TexasHoldEmComponent from './TexasHoldEmComponent';
import CoreComponentLibraryPage from '../../CoreComponentLibrary/components/CoreComponentLibraryPage';

/* Next, component files will export a const function declaration, taking in props */
class ProjectsPage extends React.Component {

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

        
        <ProjectShowCase project={this.state.currentSelectedProject} />
        
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
    id : 'ComponentLibrary',
    displayName : 'React Component Library!',
    description : 'A set of React components',
    component : <CoreComponentLibraryPage />,
    repo : 'google.com'
  },
];





export default ProjectsPage;  
