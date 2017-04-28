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


  constructor() {

    super();

  }

  render() {

    let components = [];

    this.props.components.forEach((component) => {

      let isActive = (component.id === this.props.currentSelectedComponentId) ? true : false; 
      let listItem = (
          <li 
            active={isActive} 
            key={component.id} 
            eventKey={component.id} 
            onSelect={() => this.props.onClick(component.id) } 
          >
            <a>{component.displayName}</a>
          </li>

      );
      components.push(listItem);
    
    });

    return (
      
        <div id="component-selector-sidebar" className="component-selector sidebar-offcanvas">
          <Col md={12}>
            <h3>Components</h3>

            <ul className="nav nav-pills nav-stacked component-selector-list">
              {components}
            </ul> 
          </Col>
        </div>

    );

  }



}

export default ComponentSelector;