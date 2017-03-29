import React from 'react';
import { Panel } from 'react-bootstrap';
import TexasHoldEmComponent from './TexasHoldEmComponent';

class ProjectDemo extends React.Component {


  render() {


    return (

      <Panel>
       {this.props.component}
      </Panel>

    );

  }

}


export default ProjectDemo;