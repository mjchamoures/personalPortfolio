/* CompnentShowcase component, which...
 *
 * author : michael chamoures
 * created date : 3/28/17
 * last updated date : 3/28/17
 */

import React from 'react';

import {Panel, Col, ListGroup, ListGroupItem } from 'react-bootstrap';


class ComponentSelector extends React.Component {

  render() {

    let components = [];
    components.push(<ListGroupItem active={false} key={"home"} eventKey={"home"} onClick={() => this.props.onClick("home") } >[*]</ListGroupItem>)

    this.props.components.forEach((component) => {

      let isActive = (component.id === this.props.currentSelectedComponentId) ? true : false; 

      components.push(<ListGroupItem active={isActive} key={component.id} eventKey={component.id} onClick={() => this.props.onClick(component.id) } >{component.displayName}</ListGroupItem>)
    
    });

    return (

      <Col xs={3}>

        <ListGroup>
          {components}
        </ListGroup> 


      </Col>
    );

  }



}

export default ComponentSelector;