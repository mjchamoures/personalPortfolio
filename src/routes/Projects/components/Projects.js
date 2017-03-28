/* Component files will always import React, I'm assuming */
import React from 'react';
import ProjectSelector from './ProjectSelector';
import ProjectShowCase from './ProjectShowCase';

import { Col } from 'react-bootstrap';

/* Next, component files will export a const function declaration, taking in props */
export const Projects = (props) => (


  <div>
    <Col xs={12}>
      <ProjectSelector />
    </Col>

    
    <ProjectShowCase />
    
  </div>


);


export default Projects;  