import React from 'react';
import { Panel } from 'react-bootstrap';
import ResumeImg from '../assets/Michael_Chamoures_Resume.png';
import './About.scss';


export const Resume = (props) => (

  <Panel header="Resume">

    <img
      alt=''
      className='resumeImg'
      src={ResumeImg}
    />

  </Panel>

);



export default Resume;