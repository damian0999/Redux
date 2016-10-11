var store = Redux.createStore(combineReducer, Redux.applyMiddleware(logger, crashReporter, thunk));
function render(){
  const state = store.getState();

  $('#value').text(state.count.result);
  $('#value2').text(state.sum);

  if(state.count.loading){
    $('#status').text('is loading');
  } else {
    $('#status').text('loaded');
  }

  $('#imageStatus').text(state.images.loading);
  if(state.images.loading == 'loading...'){
    $('#imagesList').text("");
  } else if(state.images.loading == 'loaded'){
    for(let i=0; i < 5; i++){
      $('#imagesList').append("<img src='" + state.images.data[i].link + "' style='height: 200px'>");
    }
  }
}
render();
store.subscribe(render);
