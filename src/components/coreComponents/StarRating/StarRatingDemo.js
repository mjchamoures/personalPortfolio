// Demo page for StarRating Component
//

import React from 'react';

import { Col, FormGroup } from 'react-bootstrap';

import StarRating from './StarRating';
import FormInputGroupWithLabel from '../FormInputGroupWithLabel';
import Button from '../Button';


// this is a "smart" component...it's standalone

class StarRatingDemo extends React.Component {

  constructor() {
    super();

    this.state = {

      name : "Hospitality",
      numStars : 5,
      submitIsDisabled : false
    }

    this.handleNumStarChangeEvent = this.handleNumStarChangeEvent.bind(this);
  }

  handleNumStarChangeEvent(value) {

    // if(value > 0) {
      this.setState({
        numStars : value,
        submitIsDisabled : false,
      });
    // }


  }

  handleSubmitClickEvent(event) {

    // let numStars = parseInt(event.target.value.trim());

    // this.setState({
    //   numStars : numStars,
    // });

  }


  render() {

    return (
      <div>
        <Col xs={12}>
          
            <FormInputGroupWithLabel
              label = {"Number of Stars:"}
              name={"stars"}
              labelColSize={10}
              inputColSize={4}
              placeholder={"integer > 0"}
              onChange={this.handleNumStarChangeEvent}
              value={this.state.numStars.toString()}
            />
            <FormGroup>
              <Button
                size={"sm"}
                type={"primary"}
                onClick={this.handleSubmitClickEvent}
                disabled={this.state.submitIsDisabled}
                text={"Submit"} 
              />
            </FormGroup>
        </Col>
           

        <Col xs={12}>

          <StarRating
            numStars = {this.state.numStars}
            name = {this.state.name}
          />

        </Col>
      </div>
    );
  }


  
}



export default StarRatingDemo;