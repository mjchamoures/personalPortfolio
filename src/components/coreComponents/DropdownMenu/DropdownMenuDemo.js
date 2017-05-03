import React from 'react';
import DropdownMenu from './DropdownMenu';
import { Col, Row, FormControl } from 'react-bootstrap';



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
          Configure the dropdown menu variation with below options:
        </Col>

        <Col xs={12}>

          <Col xs={12} sm={12} md={4}>
            <FormControl type="text" placeholder={"Dropdown Title"} value={"Items"} onChange={this.handleTitleInputSubmitClick} />
          </Col>

          <Col xs={12} sm={12} md={4}>
            <DropdownMenu
              title={"Toggle Type"}
              toggleType={this.state.toggleType}
              items={dropdownItems}
              itemType={this.state.itemType}
            />
          </Col>

          <Col xs={12} sm={12} md={4}>
            <DropdownMenu
              title={"Item Type"}
              toggleType={"button"}
              items={dropdownItems}
              itemType={this.state.itemType}
            />
          </Col>

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

