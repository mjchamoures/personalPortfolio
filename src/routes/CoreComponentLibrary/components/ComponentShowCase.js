/* CompnentShowcase component, which...
 *
 * author : michael chamoures
 * created date : 3/28/17
 * last updated date : 3/28/17
 */

import React from 'react';

import ComponentDescription from './ComponentDescription';
import ComponentDemo from './ComponentDemo';

import { Col, Panel, FormControl, ControlLabel, FormGroup } from 'react-bootstrap';


class ComponentShowCase extends React.Component {


  render() {

    return (

      <Col xs={9}>

        <Col xs={12}>

          <ComponentDescription
            displayName={this.props.component.displayName}
            description={this.props.component.description}
            repo={this.props.component.repo}
          />
        </Col>

        <Col xs={12}>

          <ComponentDemo
            component={this.props.component.component}
          />
        </Col>

      </Col>


    );

  }



}


export default ComponentShowCase;