import React from 'react';
import classes from './Button.scss';
import { Col } from 'react-bootstrap';


export const Button = (props) => (

  <Col xs={12} sm={2}>
    <button className={getClassName(props)} disabled={props.disabled} onClick={() => props.onClick()}>
      {props.text}
    </button>
  </Col>

);


Button.propTypes = {
  size     : React.PropTypes.number.isRequired,
  type : React.PropTypes.string.isRequired,
  text : React.PropTypes.string.isRequired,
  onClick   : React.PropTypes.func.isRequired,
  disabled : React.PropTypes.bool.isRequired,
};

const getClassName = function(props) {
    let className = "btn" + getType(props) + getSize(props);

    return className;
};

const getType = function(props) {
  let type = "";

  switch(props.type) {

    case 'primary' :
      type = ' btn-primary';
      break;
    case 'iconOnly' :
      type = ' btn-icon-only';
      break;
    case 'round' :
      type = ' btn-round';
      break;
    case 'danger' :
      type =  ' btn-danger';
      break;
    case 'success' :
      type = ' btn-success';
      break;
    case 'warning' :
      type =  ' btn-warning';
      break;
    case 'info' :
      type = ' btn-info';
      break;
    default :
      type = ' btn-default';
      break;
  }

  return type;

};

const getSize = function(props) {
  let size = "";
  switch(props.size) {

    case 'xs' :
      size = ' btn-xs';
      break;
    case 'sm' :
      size = ' btn-sm';
      break;
    case 'md' :
      size = ' btn-md';
      break;
    case 'lg' :
      size = ' btn-lg';
      break;
    default :
      break;
  }

  return size;

};



export default Button;