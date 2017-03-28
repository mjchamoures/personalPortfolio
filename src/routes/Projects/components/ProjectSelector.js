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

    // props will contain project list ids

    return  (
      <div id="sidebar-menu" >
        <Navbar fluid collapseOnSelect>

          <Navbar.Header>
              <Navbar.Brand>
                  <a href="/">Projects</a>
              </Navbar.Brand>
              <Navbar.Toggle />
          </Navbar.Header>

          <Navbar.Collapse>
              <Nav>
                  <NavItem eventKey={1}>Project 1</NavItem>
                  <NavItem eventKey={2}>Project 2</NavItem>
              </Nav>
          </Navbar.Collapse>

        </Navbar>
      </div>
    );

  }

};

export default ProjectSelector;