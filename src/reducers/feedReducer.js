import constants from '../constants'

const initialState = {
  all: []
};

export default (state = initialState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
    case constants.FEEDS_RECEIVED:
      console.log('FEEDS_RECEIVED', JSON.stringify(action.data));
      newState['all'] = action.data
      return newState

    case constants.FEED_CREATED:
      console.log('FEED_CREATED', JSON.stringify(action.data));
      const all = Object.assign([], newState.all);
      all.unshift(action.data);
      newState['all'] = all;
      return newState
      
    default:
      return state
  }
}
