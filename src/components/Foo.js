require('normalize.css/normalize.css');
require('styles/App.css');
import { Button } from 'react-bootstrap';

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

class FooComponent extends React.Component {
  render() {
    return (
      <div className="foo">
        <div className="notice">Foo</div>
        <Button/>
      </div>
    );
  }
}

FooComponent.defaultProps = {
};

export default FooComponent;
