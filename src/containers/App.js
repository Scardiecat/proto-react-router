/* CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Main from '../components/Main';
import { Link } from 'react-router';
var ImmutablePropTypes = require('react-immutable-proptypes');
/* Populated by react-webpack-redux:reducer */
class App extends Component {
  render() {
    const {actions, route} = this.props;
    //return <Main actions={actions}/>;
    return (
      <div route={route}>
        <h1>React Router Tutorial</h1>
        <ul role='nav'>
          <li><Link to='/foo'>Foo</Link></li>
          <li><Link to='/bar'>Bar</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}
/* Populated by react-webpack-redux:reducer
 *
 * HINT: if you adjust the initial type of your reducer, you will also have to
 *       adjust it here.
 */
App.propTypes = {
  actions: PropTypes.object.isRequired,
  route: ImmutablePropTypes.map.isRequired
};
function mapStateToProps(state) {
  /* Populated by react-webpack-redux:reducer */
  const props = { route: state.route };
  return props;
}
function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  const actions = { locationchange: require('../actions/locationchange.js') };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
