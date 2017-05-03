import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'

import { Col, Row } from 'react-bootstrap';

export const HomeView = () => (
  <div>
    <Col xs={12} className={"home-view-title"}>
        <h3>Welcome!</h3>
    </Col>

    <Col xs={12} className={"home-view-intro"}>
        <p>I'm a developer based in San Francisco, CA</p>
        <p>This is a simple site I put together using React.js</p>
        <p>It's still a work in progress, but feel free to check out some other projects I've worked on using the nav links above</p>
        <p>Thanks for stopping by!</p>   
    </Col>
  </div>
)

export default HomeView
