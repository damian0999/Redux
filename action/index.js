var decrement = function(){
  return {
    type: 'DECREMENT'
  };
}
var increment = function(){
  return{
    type: 'INCREMENT'
  };
}
var clear = function(){
  return{
    type: 'CLEAR'
  };
}
var getSum = function(a, b){
  return{
    type: 'SUM',
    a:a,
    b:b
  };
}

var asyncIncrease = function(dispach, state){
  dispach({type: 'INCREMENT_LOADING'});
  _fakeServerApi.increaseCount(state.count.result,
    function(data){
      dispach({type: 'INCREMENT'});
    }
  );
}

var getRandomImage = function(dispatch, state){
  dispatch({type: 'IMAGES_LOADING'});
  var imgurAPI = 'https://api.imgur.com/3/gallery/random/random/1';
  $.getJSON(imgurAPI).done(function(data){
    console.log(data);
    dispatch({type: 'IMAGES', data:data.data})
  })
}
