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

      <h2 className="component-description component-title">{this.props.displayName}</h2>

        <form>
          
          <FormGroup controlId="formHorizontalDesc">
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