import React from 'react';

import { Col } from 'react-bootstrap';



const Star = (props) => (

  <i className={props.className} onClick={() => props.onClick()}></i>

);


class StarSet extends React.Component {

  render() {

    let starComponents = new Array(this.props.numStars).fill(1);

    starComponents = starComponents.map((star, index) => {
      
      let className = (index < this.props.numFilled) ? "glyphicon glyphicon-star" : "glyphicon glyphicon-star-empty";

      return (<Star key={index+1} onClick={() => this.props.onClick(index+1)} className={className} />);
    });

    return (

      <div>
        {starComponents}
      </div>

    );

  }

}



// parent component
class StarRating extends React.Component {

  //  TODO: Until i figure out Store, state will be contained here. Thought is that I can 
  //         eventually move it out, where the eventHandler functions here dispatch an action,
  //           rather than setState here directly, which will trigger a re-render of this Component?
  //             Or this component also takes a callback onClick as a prop and passes that on down?

  constructor(props) {
    super(props);
    // this.state = {
    //   numFilled : this.props.numFilled, // this might not have to be in state
    // }

    this.handleClickEvent = this.handleClickEvent.bind(this);
  }


  handleClickEvent(starNum) {
    this.props.onClick(starNum);
  }

  render() {


    return (
      <Col xs={12} s={4}>
        {this.props.name}
        <StarSet numStars={this.props.numStars} numFilled={this.props.numFilled} onClick={(i) => this.handleClickEvent(i)} />

      </Col>

    );

  }



}


export default StarRating;