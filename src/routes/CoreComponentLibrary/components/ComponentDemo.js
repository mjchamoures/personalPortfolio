/* CompnentDemo component, which...
 *
 * author : michael chamoures
 * created date : 3/28/17
 * last updated date : 3/28/17
 */

import React from 'react';

import { Panel, FormControl, FormGroup, Col } from 'react-bootstrap';
import './CoreComponentLibraryPage.scss'; 

const ComponentDemo = (props) => (

  <Panel className={"component-demo-panel"}>
    <h2 className="component-description component-title">Example</h2>

    {props.component}
  </Panel>  


);


export default ComponentDemo;