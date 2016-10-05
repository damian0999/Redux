var store = Redux.createStore(combineReducer, Redux.applyMiddleware(logger, crashReporter, thunk));
function render(){
  var state = store.getState();
  document.getElementById('value').innerHTML = state.count;
  document.getElementById('value2').innerHTML = state.sum;
}
render();
store.subscribe(render);
