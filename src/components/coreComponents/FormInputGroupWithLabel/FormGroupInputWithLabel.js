import React from 'react';
import classes from './FormGroupInputWithLabel.scss';
import { FormControl } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { Col } from 'react-bootstrap';



class  FormGroupInputWithLabel extends React.Component {

  constructor() {
    super();

    this.handleChangeEvent = this.handleChangeEvent.bind(this);

  }

  handleChangeEvent(event) {

    let numStars = parseInt(event.target.value.trim());

    this.props.onChange(numStars);

  }

  render() {
    return (

      <FormGroup controlId={this.props.controlId}>
        <Col componentClass={ControlLabel} sm={this.props.labelColSize}>
          {this.props.label}
        </Col>
        <Col xs={12} sm={this.props.inputColSize}>
          <FormControl type="text" placeholder={this.props.placeholder} value={this.props.value} onChange={this.handleChangeEvent} />
        </Col>
      </FormGroup>

    );
  }
}

FormGroupInputWithLabel.propTypes = {
  labelColSize : React.PropTypes.number,
  inputColSize : React.PropTypes.number,
  label : React.PropTypes.string,
  placeholder : React.PropTypes.string,
  value : React.PropTypes.string,
  controlId : React.PropTypes.string,
  onChange   : React.PropTypes.func.isRequired,
  disabled : React.PropTypes.bool,
};



export default FormGroupInputWithLabel;