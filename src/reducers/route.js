/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import {Map} from 'immutable'
import {LOCATION_CHANGE} from '../actions/const'

const initialState = Map({locationBeforeTransitions: null});

module.exports = function(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  //let nextState = Object.assign({}, state);

  switch(action.type) {
    case LOCATION_CHANGE: {
      // Modify next state depending on the action and return it
      return state.set('locationBeforeTransitions',action.payload);
    }
    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}
