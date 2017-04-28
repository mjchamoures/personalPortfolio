import React from 'react';
import './DropdownMenu.scss';
import { } from 'react-bootstrap';



class DropdownMenuItem extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {

    let item = "";

    switch(this.props.itemType) {

      case 'images' : 
        //TODO
        break;
      case 'submenu' :
        //TODO
        break;
      default : 
        console.log("gee");
        item = <li onClick={this.props.onClick}><a href="javascript:void(0);">{this.props.item}</a></li>
        break;
    }

    return (item);
  }
}

class DropdownMenuItemList extends React.Component {

  constructor(props) {

    super(props);
  }

  render() {

    let items= [];

    for(let i = 0; i < this.props.items.length; i++) {
      items.push(<DropdownMenuItem key={i} onClick={this.props.onClick} itemType={this.props.itemType} item={this.props.items[i]} />)
    }

    return (
      <ul className="dropdown-menu">

        {items}

      </ul>
    );
  }
}

class DropdownToggle extends React.Component {

  constructor(props) {

    super(props);

  }

  render() {

    let toggleEl = "";

    switch(this.props.toggleType) {

      case 'button' : 
        toggleEl = (<button className="btn btn-sm btn-default" onClick={this.props.onClick}>{this.props.title}<b className="caret"></b></button>);
        break;
      default :
        toggleEl = (<a className="default-toggle" onClick={this.props.onClick}>{this.props.title}<b className="caret"></b></a>);
        break;
    }

    return (toggleEl);  
  }
}


class DropdownMenu extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      menuIsCollapsed : true
    };

    this.handleToggleOnClick = this.handleToggleOnClick.bind(this);
    this.handleListItemOnClick = this.handleListItemOnClick.bind(this);

  }

  handleToggleOnClick(event) {
    this.setState({ menuIsCollapsed : !this.state.menuIsCollapsed });
  }

  handleListItemOnClick(event) {
    //TODO
    this.props.handleListItemOnClick(event);
  }

  render() {

    let dropdownMenuItemList = "";
    if(!this.state.menuIsCollapsed) {
      dropdownMenuItemList = (<DropdownMenuItemList items={this.props.items} itemType={this.props.itemType} onClick={this.handleListItemOnClick} />);
    }

    return (

      <div className="dropdown">

        <DropdownToggle
          title={this.props.title}
          toggleType={this.props.toggleType}
          onClick={this.handleToggleOnClick}
        />
        {dropdownMenuItemList}


      </div>

    );

  }


}




export default DropdownMenu;