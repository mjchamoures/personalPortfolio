import React from 'react';
import { Panel } from 'react-bootstrap';
import ResumeImg from '../assets/Michael_Chamoures_Resume.png';
import ResumeImg2 from '../assets/Michael_Chamoures_Resume_2.png';
import './About.scss';


export const Resume = (props) => (

  <Panel header="Resume">

    <img
      alt=''
      className='resumeImg'
      src={ResumeImg}
    />
    <img
      alt=''
      className='resumeImg'
      src={ResumeImg2}
    />

  </Panel>

);



export default Resume;