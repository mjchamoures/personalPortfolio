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
import './CoreComponentLibraryPage.scss';


class ComponentShowCase extends React.Component {


  constructor() {

    super();
  }


  render() {

    return (

      <div id="component-showcase-main">
        <Col md={12}>
          <p className="visible-xs">
            <button type="button" className="btn btn-primary btn-xs" data-toggle="offcanvas" onClick={this.props.handleCollapseToggle}><i className="glyphicon glyphicon-chevron-left"></i></button>
          </p>
          <Row>
            <Col md={12}>

              <ComponentDescription
                displayName={this.props.component.displayName}
                description={this.props.component.description}
                repo={this.props.component.repo}
              />
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <ComponentDemo
                component={this.props.component.component}
              />
            </Col>
          </Row>
        </Col>
      </div>


    );

  }



}


export default ComponentShowCase;