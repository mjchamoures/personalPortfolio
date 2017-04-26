import React from 'react';
import Fetch from 'react-fetch'
import { Col } from 'react-bootstrap';
import AutoCompleteInput from './AutoCompleteInput';

class AutoCompleteInputDemo extends React.Component {

  constructor() {

    super();

    this.state = {
      results : [],
      searchText : ""
    }

    this.keyupEventHandler = this.keyupEventHandler.bind(this);

  }

  keyupEventHandler(searchText) {

    // TODO call service or something
    let encodedSearchText = searchText.replace(' ', '%20');
    if(encodedSearchText.length > 0) {
      fetch('http://localhost:3000/listings?city_like=' + encodedSearchText)
      .then(result=>result.json())
      .then(items=>this.setState({results : items, searchText : searchText }));
    } else {
      this.setState({results : [], searchText : searchText });
    }

  }

  render() {

    return (
      <AutoCompleteInput
        keyupEventHandler={this.keyupEventHandler}
        results={this.state.results}
        searchText={this.state.searchText}
        colSize={4}
        numSuggestions={7}
      />
    );

  }


}


export default AutoCompleteInputDemo;