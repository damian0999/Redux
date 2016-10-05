const logger = function(store){
  return function(next){
    return function(action){
      console.log('currentState = ', store.getState());
      console.info('action = ', action)
      next(action);
      console.log('currentState = ', store.getState());
    }
  }
}
const crashReporter = function(store){
  return function(next) {
    return function(action) {
      try {
        next(action);
      } catch (e) {
        console.error('error with action = ', action)
        console.error(e);
      }
    }
  }
}

var store = Redux.createStore(combineReducer, Redux.applyMiddleware(logger, crashReporter));
function render(){
  var state = store.getState();
  document.getElementById('value').innerHTML = state.count;
  document.getElementById('value2').innerHTML = state.sum;
}
render();
store.subscribe(render);
