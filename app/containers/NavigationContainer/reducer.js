/*
 *
 * NavigationContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REQUEST_TOPICS_SUCCEEDED,
  SELECT_TOPIC,
} from './constants';

const initialState = fromJS({
  topics: []
});

function navigationContainerReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_TOPICS_SUCCEEDED:
      return state.set('topics', action.topics);
    case SELECT_TOPIC:
      return
    default: state.set('selectedTopic', action.topic)
      return state;
  }
}

export default navigationContainerReducer;
