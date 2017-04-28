/* CompnentShowcase component, which...
 *
 * author : michael chamoures
 * created date : 3/28/17
 * last updated date : 3/28/17
 */

import React from 'react';

import {Panel, Col, ListGroup, ListGroupItem, Navbar, Nav, NavItem } from 'react-bootstrap';
import './CoreComponentLibraryPage.scss'; 

class ComponentSelector extends React.Component {

  render() {

    let components = [];

    this.props.components.forEach((component) => {

      let isActive = (component.id === this.props.currentSelectedComponentId) ? true : false; 

      components.push(<NavItem active={isActive} key={component.id} eventKey={component.id} onSelect={() => this.props.onClick(component.id) } >{component.displayName}</NavItem>)
    
    });

    return (

      <Col md={3}>
        <Navbar collapseOnSelect className="component-selector-navbar">

          <Navbar.Header >
            <Navbar.Brand className="component-selector-header-brand">
              <p>Components</p>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>

            <Navbar.Collapse>
              <Nav stacked>
                {components}
              </Nav> 
            </Navbar.Collapse>
        </Navbar>
      </Col>
    );

  }



}

export default ComponentSelector;