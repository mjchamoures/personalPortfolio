import React from 'react';
import { FormGroup, FormControl, ListGroup, ListGroupItem, Col } from 'react-bootstrap';



class DropdownListItem extends React.Component {

  render() {
    let listItem = this.props.isActive ? (<ListGroupItem active>{this.props.resultText}</ListGroupItem>) : (<ListGroupItem>{this.props.resultText}</ListGroupItem>);
    return (
      listItem
    );
  }

}


class DropdownList extends React.Component {

  constructor(props) {

    super(props);

  }

  render() {
    let listItems = [];

    for(let i = 0; i < this.props.results.length; i++) {

      if(i < this.props.numSuggestions) {
        let isActive = (i === this.props.currentActiveIndex);
        listItems.push(<DropdownListItem  key={i} isActive={isActive} resultText={this.props.results[i].resultText} />);  
      } else {
        break;
      }
      
    }

    return (
      <ListGroup>  
        {listItems}
      </ListGroup>
    );
  }

}

class SearchTextComponent extends React.Component {

  constructor(props) {

    super(props);
    this.keyupEventHandler = this.keyupEventHandler.bind(this);
    this.changeEventHandler = this.changeEventHandler.bind(this);
  }

  keyupEventHandler(event) {
    let eventKey = event.key;
    let searchText = event.target.value;
    this.props.keyupEventHandler(eventKey, searchText);
  }

  changeEventHandler(event) {
    let eventKey = event.key;
    let searchText = event.target.value;
    this.props.keyupEventHandler(eventKey, searchText);
  }

  render() {

    return (
      <FormControl type="text" value={this.props.searchText} onKeyUp={this.keyupEventHandler} onChange={this.changeEventHandler} />
    );
  }

}


class AutoCompleteInput extends React.Component {


  constructor(props) {

    super(props);

    // props will include: callback for search, numSuggestions, input size,, 

    this.state = {

      currentActiveIndex : -1,

    };

    this.keyupEventHandler = this.keyupEventHandler.bind(this);
  }

  keyupEventHandler(eventKey, searchText) {
    let newActiveIndex = this.state.currentActiveIndex;
    switch(eventKey) {

      case 'ArrowUp' :
        // check if already at the top of the list (in the input)
        if(this.state.currentActiveIndex < 0) {
          newActiveIndex = this.props.results.length-1;
        } else {
          newActiveIndex = this.state.currentActiveIndex - 1;
        }
        this.setState({ 
          currentActiveIndex : newActiveIndex
        });
        break;
      case 'ArrowDown' :
        // check if already at the end (bottom) of the list last suggestion
        if(this.state.currentActiveIndex === this.props.results.length-1) {
          newActiveIndex = -1;
        } else {
          newActiveIndex = this.state.currentActiveIndex + 1;
        }
        this.setState({ 
          currentActiveIndex : newActiveIndex
        });
        break;
      case 'Enter' :
        // TODO Enter key handler from consumer
        break;
      default :
        // if search text is different...call prop handler
        if(this.props.searchText !== searchText) {
          // consumer will pass new results
          this.props.keyupEventHandler(searchText);
          this.setState({ 
            currentActiveIndex : -1
          });
        }
        break;
     }

  }


  render() {

    let searchText = this.state.currentActiveIndex === -1 ? this.props.searchText : this.props.results[this.state.currentActiveIndex].resultText;

    return (
      <FormGroup>
        <Col xs={this.props.colSize}>
          <SearchTextComponent
            keyupEventHandler={this.keyupEventHandler}  
            searchText={searchText}
          />
          <DropdownList 
            currentActiveIndex={this.state.currentActiveIndex}
            results={this.props.results}
            numSuggestions={this.props.numSuggestions}
          />
        </Col>
      </FormGroup>
    );


  }

}

export default AutoCompleteInput;