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
import KineticWall from './KineticWall';
import SmartAccounts from './SmartAccounts';
import CoreComponentLibraryPage from '../../CoreComponentLibrary/components/CoreComponentLibraryPage';

/* Next, component files will export a const function declaration, taking in props */
class ProjectsPage extends React.Component {

  constructor(props) {

    super();

    this.state = {
      currentSelectedProject : projectList[0]
    };
    this.handleProjectClick = this.handleProjectClick.bind(this);
    this.handleCollapseToggle = this.handleCollapseToggle.bind(this);
  }


  handleProjectClick(projectId) {

    let selectedProject = this.getProject(projectId);

    this.setState({
      currentSelectedProject : selectedProject,
    });

  }

  handleCollapseToggle() {
    $('.row-offcanvas').toggleClass('active');
  }

  render() {

    return (

      <div className="row-offcanvas row-offcanvas-left">
        
        <ProjectSelector 
          projectList={projectList} 
          onClick={(i) => this.handleProjectClick(i)}
          currentSelectedProjectId={this.state.currentSelectedProject.id}
        />
        
        <ProjectShowCase 
          project={this.state.currentSelectedProject} 
          handleCollapseToggle={this.handleCollapseToggle}
        />
        
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
    id : 'SmartAccounts',
    displayName : 'Smart Accounts',
    description : "Smart Accounts give you full visibility of the Cisco software assets in your company. Now you can easily manage and control your licenses. Smart Accounts are a new way to manage your software licenses. They provide your company with a central location where you can manage Cisco licenses across the entire organization. Smart Accounts are similar to online bank accounts. You can view, store, manage, and move your Cisco software assets to where they are needed.",
    component : <SmartAccounts />,
    repo : 'http://www.cisco.com/c/en/us/buy/smart-accounts.html',
    siteUrl : 'https://software.cisco.com/',
    techUsed : 'Marionette.js, Bootstrap, Require.js, Handlebars.js, Karma, Java, Spring, Hibernate, SQL, Maven'
  },
  {
    id : 'kineticWall',
    displayName : 'Kinetic Wall',
    description : 'The Kinetic Wall is an interactive intervention that facilitates the serendipitous social interaction between pedestrians on Market Street. \n The Kinetic Wall is composed of an array of lightweight tiles that rotate about their center in response to sensor input. The wall’s Kinect sensors monitor proximity and location of those within range of the wall. As one gets closer to the wall, the tiles are activated, and rotate to 45 degrees to allow some transparency. When two people are aligned at either side of the wall, the panels in the zone of said people rotate to 90 degrees, allowing full visual connection. \n This sudden and unexpected face to face with a stranger provides a unique experience that strips away the anonymity of the urban street. During phases where no individual is within immediate range, the wall flutters and flirts, inviting people to investigate.',
    component : <KineticWall />,
    repo : 'http://amlgm.com/#/wall/',
    siteUrl : 'http://amlgm.com/#/wall/',
    techUsed : 'Xbox Kinect, Servos, Rasberry Pi'
  },
  {
    id : 'TexasHoldEmComponent',
    displayName : 'Texas Hold \'Em',
    description : "This is a texas hold em game. You can add as many players as in a single deck. No Scoring yet.",
    component : <TexasHoldEmComponent />,
    repo : 'https://github.com/mjchamoures/personalPortfolio/blob/master/src/routes/Projects/components/TexasHoldEmComponent.jsx',
    siteUrl : null,
    techUsed : 'React, bootstrap, etc...'
  },
];





export default ProjectsPage;  
