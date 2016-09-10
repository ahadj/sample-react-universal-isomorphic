import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class IndexComponent extends Component {

    render() {
        return (
          <div>
            <p>This is the index component</p>
            <Button bsStyle="primary" bsSize="large" active>Primary button</Button>
            <Button bsSize="large" active>Button</Button>

          </div>
        );
    }
}

// export default () => (
//   <div>
//     <p>This is the index component</p>
//   </div>
// );
