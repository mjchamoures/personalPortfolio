/* ProjectDemo component, which.....
 *
 * author : michael chamoures
 * created date : 3/27/17
 * last updated date : 3/28/17
 */

import React from 'react';
import { Panel } from 'react-bootstrap';
import TexasHoldEmComponent from './TexasHoldEmComponent';
import './styles/ProjectDemo.scss';

class ProjectDemo extends React.Component {


  render() {


    return (

      <Panel className={"project-demo-container"}>
       {this.props.component}
      </Panel>

    );

  }

}


export default ProjectDemo;