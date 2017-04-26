import React from 'react';
import ReactPDF from 'react-pdf';

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

        <a href="https://software.cisco.com/software/company/smartaccounts/home#accountcreation-account" target="_blank">Create a Smart Account</a>
        
        <ReactPDF
          file='/SmartAccountsAtAGlance.pdf'
          onDocumentLoad={this.onDocumentLoad}
          onPageLoad={this.onPageLoad}
        />
        
      </div>

    );

  }

}


export default SmartAccounts;