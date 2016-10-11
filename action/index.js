var decrement = () => ({
  type: 'DECREMENT'
});
var increment = () => ({
  type: 'INCREMENT'
});
var clear = () => ({
  type: 'CLEAR'
});
var getSum = (a, b) => ({
  type: 'SUM',
  a:a,
  b:b
});

var asyncIncrease = (dispach, state) => {
  dispach({type: 'INCREMENT_LOADING'});
  _fakeServerApi.increaseCount(state.count.result,
    data => dispach({type: 'INCREMENT'}));
}

var getRandomImage = (dispatch, state) => {
  dispatch({type: 'IMAGES_LOADING'});
  var imgurAPI = 'https://api.imgur.com/3/gallery/random/random/1';
  $.getJSON(imgurAPI).done(data => dispatch({type: 'IMAGES', data:data.data}));
}
