import React from 'react';
import { Col } from 'react-bootstrap';


class KineticWall extends React.Component {

  render() {

    return (
      <div>
        <Col xs={12}>
          <iframe src="https://player.vimeo.com/video/125387485?title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </Col>
      </div>
    );
  }


}


export default KineticWall;