/* CompnentDemo component, which...
 *
 * author : michael chamoures
 * created date : 3/28/17
 * last updated date : 3/28/17
 */

import React from 'react';

import { Panel } from 'react-bootstrap';


const ComponentDemo = (props) => (

  <Panel>
    {props.component}
  </Panel>  


);


export default ComponentDemo;