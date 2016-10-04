function counter(currentState, action){
  var nextState;
  if(currentState === undefined){
    nextState = 0;
  }
  else if(action.type === 'DECREMENT'){
    nextState = currentState - 1;
  }
  else if(action.type === 'INCREMENT'){
    nextState = currentState + 1;
  }
  else {
    nextState = 0;
  }
  return nextState;
}

function sum(currentState, action){
  var nextState;
  nextState = parseInt(action.a) + parseInt(action.b);
  return nextState;
}
function combineReducer(currentState, action){
  var nextState = Object.assign({},currentState);
  nextState = {
    count: counter(nextState.count, action),
    sum: sum(nextState.sum, action)
  }
  return nextState;
}
