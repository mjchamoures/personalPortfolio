/* ProjectSelector component, which will hold links to all the projects
 *
 * author : michael chamoures
 * created date : 3/27/17
 * last updated date : 3/28/17
 */

import React from 'react';
import {Nav, NavItem, Navbar, NavDropdown, MenuItem, Glyphicon, Col} from 'react-bootstrap';
import './styles/ProjectSelector.scss';


class ProjectSelector extends React.Component {

  render() {

    let projectList = [];
    // props will contain project list ids
    this.props.projectList.forEach((project) => {
      let isActive = (project.id === this.props.currentSelectedProjectId) ? "active" : ""; 
      let listItem = (
          <li className={isActive} key={project.id} >
            <a eventKey={project.id} 
               onClick={() => this.props.onClick(project.id) }>{project.displayName}
            </a>
          </li>
      );
      projectList.push(listItem);

    });

    return (
      
        <div id="project-selector-sidebar" className="project-selector sidebar-offcanvas">
          <Col md={12}>
            <h3 className="project-selector-title">Projects</h3>

            <ul className="nav nav-pills nav-stacked project-selector-list">
              {projectList}
            </ul> 
          </Col>
        </div>

    );
  }
};

export default ProjectSelector;