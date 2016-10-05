var store = Redux.createStore(combineReducer, Redux.applyMiddleware(logger, crashReporter, thunk));
function render(){
  var state = store.getState();
  document.getElementById('value').innerHTML = state.count.result;
  document.getElementById('value2').innerHTML = state.sum;

  if(state.count.loading){
    document.getElementById('status').innerHTML = 'is loading';
  } else {
    document.getElementById('status').innerHTML = 'loaded';
  }

  document.getElementById('imageStatus').innerHTML = state.images.loading;
  if(state.images.loading == 'loading...'){
    document.getElementById('imagesList').innerHTML = '';
  } else if(state.images.loading == 'loaded'){
    for(var i=0; i < 10; i++){
      document.getElementById('imagesList').innerHTML
        += ("<img src='" + state.images.data[i].link + "' style='height: 200px'>");
    }
  }
}
render();
store.subscribe(render);
