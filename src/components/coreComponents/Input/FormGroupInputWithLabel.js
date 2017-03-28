import React from 'react';
import classes from './FormGroupInputWithLabel.scss';
import { FormControl } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { Col } from 'react-bootstrap';



export const FormGroupInputWithLabel = (props) => (

  <FormGroup controlId={props.controlId}>
    <Col componentClass={ControlLabel} sm={props.labelColSize}>
      {props.label}
    </Col>
    <Col xs={12} sm={props.colSize}>
      <FormControl type="text" placeholder={props.placeholder} value={props.value} />
    </Col>
  </FormGroup>

);


FormGroupInputWithLabel.propTypes = {
  labelColSize : React.PropTypes.number,
  inputColSize : React.PropTypes.number,
  label : React.PropTypes.string,
  placeholder : React.PropTypes.string,
  value : React.PropTypes.string,
  controlId : React.PropTypes.string.isRequired,
  onChange   : React.PropTypes.func.isRequired,
  disabled : React.PropTypes.bool,
};



export default FormGroupInputWithLabel;