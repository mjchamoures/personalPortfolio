/* CompnentDescription component, which...
 *
 * author : michael chamoures
 * created date : 3/28/17
 * last updated date : 3/28/17
 */

import React from 'react';

import { Col, Panel, FormControl, ControlLabel, FormGroup } from 'react-bootstrap';
import './CoreComponentLibraryPage.scss'; 



class ComponentDescription extends React.Component {



  render() {

    return (

      <Panel>

      <h2 className="component-description component-title">Test</h2>

        <form>

        
          <FormGroup controlId="formHorizontalName">
            <Col componentClass={ControlLabel} sm={12}>
              Component Name:
            </Col>
            <Col componentClass={FormControl.Static} xs={12} sm={9}>
              {this.props.displayName}
            </Col>
          </FormGroup>
          
          <FormGroup controlId="formHorizontalDesc">
            <Col componentClass={ControlLabel} sm={12}>
              Description:
            </Col>
            <Col componentClass={FormControl.Static} xs={12} sm={10}>
              {this.props.description}
            </Col>
          </FormGroup>
        </form>


      </Panel>

    );

  }


};


export default ComponentDescription;