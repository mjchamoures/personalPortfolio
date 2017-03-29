/* ProjectSelector component, which will hold links to all the projects
 *
 * author : michael chamoures
 * created date : 3/27/17
 * last updated date : 3/27/17
 */

import React from 'react';
import {Nav, NavItem, Navbar, NavDropdown, MenuItem, Glyphicon} from 'react-bootstrap';
// import styles from  './styles/ProjectSelector.scss';


class ProjectSelector extends React.Component {

  render() {
    let projectList = [];
    // props will contain project list ids
    for(let i = 0; i < this.props.projectList.length; i++) {
      let project = this.props.projectList[i];
      projectList.push(<NavItem key={project.id} eventKey={project.id} onClick={() => this.props.onClick(project.id)} > {project.displayName} </NavItem>);

    }

    return  (
      <div id="sidebar-menu" >
        <Navbar fluid collapseOnSelect>

          <Navbar.Header>
              <Navbar.Brand>
                  <a href="/projects">Projects</a>
              </Navbar.Brand>
              <Navbar.Toggle />
          </Navbar.Header>

          <Navbar.Collapse>
              <Nav>
                  { projectList }
              </Nav>
          </Navbar.Collapse>

        </Navbar>
      </div>
    );

  }

};

export default ProjectSelector;