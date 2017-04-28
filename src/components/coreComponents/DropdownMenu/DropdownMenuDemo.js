import React from 'react';
import DropdownMenu from './DropdownMenu';
import { Col } from 'react-bootstrap';



class DropdownMenuDemo extends React.Component {

  constructor() {
    super();

    this.state = {

      title : "Items",
      toggleType : "default",
      itemType : "default"

    };

    this.handleToggleTypeListItemOnClick = this.handleToggleTypeListItemOnClick.bind(this);
    this.handleItemTypeListItemOnClick = this.handleItemTypeListItemOnClick.bind(this);
    this.handleExampleListItemOnClick = this.handleExampleListItemOnClick.bind(this);
    this.handleTitleInputSubmitClick = this.handleTitleInputSubmitClick.bind(this);
  }


  handleToggleTypeListItemOnClick(event) {

    console.log("hey");

  }


  handleItemTypeListItemOnClick(event) {

    console.log("you");

  }


  handleExampleListItemOnClick(event) {

    console.log("whats up");

  }

  handleTitleInputSubmitClick(event) {

    console.log("oh not much");

  }

  render() {

    let dropdownItems = dropdownItemExamples[this.state.itemType];



    return (
      <div>

        <Col xs={12}>
          <DropdownMenu
            title={this.state.title}
            toggleType={this.state.toggleType}
            items={dropdownItems}
            itemType={this.state.itemType}
          />
        </Col>

        <Col xs={12}>
          <DropdownMenu
            title={this.state.title}
            toggleType={this.state.toggleType}
            items={dropdownItems}
            itemType={this.state.itemType}
          />
        </Col>
      </div>
    );

  }


}

const dropdownItemExamples =  {
                          "default" : ["Item 1", "Item 2", "Item 3"]
                       };



export default DropdownMenuDemo;

