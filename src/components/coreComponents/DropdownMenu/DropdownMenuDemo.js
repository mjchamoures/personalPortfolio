import React from 'react';
import DropdownMenu from './DropdownMenu';
import { } from 'react-bootstrap';






class DropdownMenuDemo extends React.Component {

  constructor() {
    super();

  }

  render() {

    return (
      <div>
        <DropdownMenu
          title={"test"}
          toggleType={"default"}
          items={["test", "test 2", "test 3"]}
          itemType={"default"}
        />
      </div>
    );

  }


}




export default DropdownMenuDemo;