import React from 'react';
import ReactPDF from 'react-pdf';

import './styles/SmartAccountsDemo.scss';

class SmartAccounts extends React.Component {

  constructor() {
    super();
    this.state = { total : 0, pageIndex : 0, pageNumber : 0};

  }

  // onDocumentLoad({ total }) {
  //   this.setState({ total });
  // }
 
  // onPageLoad({ pageIndex, pageNumber }) {
  //   this.setState({ pageIndex, pageNumber });
  // }

  render() {

    return (

      <div>

        <object className={"smart-accounts-container"} data="http://software.cisco.com"/>
        
      </div>

    );

  }

}


export default SmartAccounts;