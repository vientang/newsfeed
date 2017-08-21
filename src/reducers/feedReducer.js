import constants from '../constants'

var initialState = {
  all: [],
  selected: null
};

export default (state = initialState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case constants.FEEDS_RECEIVED:
      console.log('FEEDS_RECEIVED', JSON.stringify(action.data));
      newState['all'] = action.data;
      return newState;

    case constants.FEED_CREATED:
      console.log('FEED_CREATED', JSON.stringify(action.data));
      let all = Object.assign([], newState.all);
      all.unshift(action.data);
      newState['all'] = all;
      return newState;
      
    case constants.SELECTED_FEED:
      console.log('SELECTED_FEED', JSON.stringify(action.data));
      newState['selected'] = action.data;
      return newState;

    default:
      return state;
  }
}
