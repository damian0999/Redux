function images(currentState, action){
  console.log('this is image state ', currentState);
  var DEFAULT_STATE = {data: [], loading: 'Please click the Random Images Button'};
  var nextState = Object.assign({}, currentState);
  if(currentState === undefined){
    nextState = DEFAULT_STATE;
    return nextState;
  }

  switch(action.type){
    case 'IMAGES_LOADING':
        nextState.loading = 'loading...';
      return nextState;
      case 'IMAGES':
        nextState.loading = 'loaded';
        nextState.data = action.data;
      return nextState;
      default:
        nextState = currentState;
      return nextState;
  }
}
