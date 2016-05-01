require('normalize.css/normalize.css');
require('styles/App.css');
import { Link } from 'react-router'

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
        <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><Link to="/foo">Foo</Link></li>
          <li><Link to="/bar">Bar</Link></li>
        </ul>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
