/* CompnentShowcase component, which...
 *
 * author : michael chamoures
 * created date : 3/28/17
 * last updated date : 3/28/17
 */

import React from 'react';

import ComponentDescription from './ComponentDescription';
import ComponentDemo from './ComponentDemo';

import { Col, Panel, FormControl, ControlLabel, FormGroup, Row } from 'react-bootstrap';


class ComponentShowCase extends React.Component {


  render() {

    return (

      <Col md={9}>

        <Col md={12}>

          <ComponentDescription
            displayName={this.props.component.displayName}
            description={this.props.component.description}
            repo={this.props.component.repo}
          />
        </Col>

        <Col md={12}>

          <ComponentDemo
            component={this.props.component.component}
          />
        </Col>

      </Col>


    );

  }



}


export default ComponentShowCase;