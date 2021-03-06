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
      numSubmitIsDisabled : false,
      nameSubmitIsDisabled : false,
      numStarsInputVal : "",
      numFilled : 0,

    }

    this.handleNumStarChangeEvent = this.handleNumStarChangeEvent.bind(this);
    this.handleNumSubmitClickEvent = this.handleNumSubmitClickEvent.bind(this);
    this.handleLabelNameChangeEvent = this.handleLabelNameChangeEvent.bind(this);
    this.handleLabelSubmitClickEvent = this.handleLabelSubmitClickEvent.bind(this);
    this.handleStarClickEvent = this.handleStarClickEvent.bind(this);
  }

  handleStarClickEvent(starNum) {

    this.setState({
      numFilled : starNum,
    });

  }

  handleNumStarChangeEvent(value) {
    // parseInt will return NaN for invalid input (not leading integer)
    let numStarsInputVal = parseInt(value);
    
    this.setState({
      numStarsInputVal : numStarsInputVal ? numStarsInputVal : "",
      numSubmitIsDisabled : (numStarsInputVal && numStarsInputVal > 0) ? false : true,
    });
    
  }

  handleNumSubmitClickEvent(event) {

    this.setState({
      numStars : this.state.numStarsInputVal,
      numFilled : 0, // resetting numFilled for now until rating is fetched
    });

  }

  handleLabelNameChangeEvent(value) {

    let labelNameInputVal = value;
    
    this.setState({
      labelNameInputVal : labelNameInputVal.trim(),
      nameSubmitIsDisabled : (labelNameInputVal.length > 0) ? false : true,
    });

  }

  handleLabelSubmitClickEvent(event) {

    this.setState({
      name : this.state.labelNameInputVal,
      numFilled : 0, // resetting numFilled for now until rating is fetched
    });

  }

  render() {

    return (
      <div>
        <Col xs={12} sm={8}>
          <Col xs={12} sm={12}>
            
              <FormInputGroupWithLabel
                label = {"Number of Stars:"}
                name={"stars"}
                labelColSize={10}
                inputColSize={8}
                placeholder={"integer > 0"}
                onChange={this.handleNumStarChangeEvent}
                value={this.state.numStarsInputVal.toString()}
              />
              <FormGroup>
                <Button
                  size={"sm"}
                  type={"primary"}
                  onClick={this.handleNumSubmitClickEvent}
                  disabled={this.state.submitIsDisabled}
                  text={"Submit"} 
                />
              </FormGroup>
          </Col>

          <Col xs={12} sm={12}>
            
              <FormInputGroupWithLabel
                label = {"Label Name:"}
                name={"stars"}
                labelColSize={10}
                inputColSize={8}
                placeholder={""}
                onChange={this.handleLabelNameChangeEvent}
                // value={this.state.name}
              />
              <FormGroup>
                <Button
                  size={"sm"}
                  type={"primary"}
                  onClick={this.handleLabelSubmitClickEvent}
                  disabled={this.state.submitIsDisabled}
                  text={"Submit"} 
                />
              </FormGroup>
          </Col>
        </Col>   

        <Col xs={12} sm={4}>

          <StarRating
            numStars = {this.state.numStars}
            name = {this.state.name}
            numFilled={this.state.numFilled}
            onClick={(i) => this.handleStarClickEvent(i)}
          />

        </Col>
      </div>
    );
  }


  
}



export default StarRatingDemo;