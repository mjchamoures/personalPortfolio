/* CoreComponentLibraryPage component, which...
 *
 * author : michael chamoures
 * created date : 3/23/17
 * last updated date : 3/28/17
 */

import React from 'react';

import ComponentSelector from './ComponentSelector';
import ComponentShowCase from './ComponentShowCase';

import { Col } from 'react-bootstrap';
import Button from '../../../components/coreComponents/Button';
import FormInputGroupWithLabel from '../../../components/coreComponents/FormInputGroupWithLabel';
import StarRatingDemo from '../../../components/coreComponents/StarRating/StarRatingDemo';
import AutoCompleteInputDemo from '../../../components/coreComponents/AutoCompleteInput/AutoCompleteInputDemo';
import DropdownMenuDemo from '../../../components/coreComponents/DropdownMenu/DropdownMenuDemo';


class CoreComponentLibrary extends React.Component {

  constructor() {

    super();

    this.state = {
      currentSelectedComponent : componentList[0]
    };

    this.handleComponentSelectorClick = this.handleComponentSelectorClick.bind(this);

  }

  handleComponentSelectorClick(componentId) {

    let selectedComponent = this.getComponent(componentId);

    this.setState({
      currentSelectedComponent : selectedComponent,
    });

  }

  render() {


    return (

      <Col xs={12}>

        <ComponentSelector 
          components={componentList}
          onClick={(componentId) => this.handleComponentSelectorClick(componentId)}
          currentSelectedComponentId={this.state.currentSelectedComponent.id}
        />

        <ComponentShowCase 
          component={this.state.currentSelectedComponent}
        />

      </Col>
    
    );

  }

  getComponent(componentId) {

    let component = null;
    let i = 0;

    while(component === null) {

      if(componentList[i].id === componentId) {
        component = componentList[i];
      }
      i++;
    }

    return component;
  }
  

}



// todo...create a demo page for each of these
const componentList = [
   {
    id : 'Button',
    displayName : 'Buttons!',
    description : "Basic button with bootstrap property control",
    component : <Button
                  size={"sm"}
                  type={"primary"}
                  onClick={() => {console.log("you clicked me")}}
                  disabled={false}
                  text={"Primary Button Small"} 
                />,
    repo : 'google.sf'
  },
  {
    id : 'FormInputGroupWithLabel',
    displayName : 'Form Input Group With Label',
    description : 'Combined text input and a label in one component',
    component : <FormInputGroupWithLabel
                  label = {"Enter City:"}
                  name={"city"}
                  labelColSize={12}
                  inputColSize={6}
                  placeholder={"eg. San Francisco"}
                  onChange={() => {console.log("hey")}}
                />,
    repo : 'google.com'
  },
  {
    id : 'StarRating',
    displayName : 'Star Rating',
    description : 'Simple Star rating system... configurable with number of stars provided, initial numFilled, and name of it',
    component : <StarRatingDemo />,
    repo : 'stars.com'
  },
  {
    id : 'AutoCompleteInput',
    displayName : 'AutoComplete / Suggestion Input',
    description : 'Search and display a number of suggestions, with navigation between suggestions',
    component : <AutoCompleteInputDemo />,
    repo : 'auto.com'
  },
  {
    id : 'DropdownMenu',
    displayName : 'Dropdown Menu Varations',
    description : 'Various dropdown menu types',
    component : <DropdownMenuDemo />,
    repo : 'dropdown.com'
  },
];



export default CoreComponentLibrary;




