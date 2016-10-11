const decrement = () => ({
  type: 'DECREMENT'
});
const increment = () => ({
  type: 'INCREMENT'
});
const clear = () => ({
  type: 'CLEAR'
});
const getSum = (a, b) => ({
  type: 'SUM',
  a:a,
  b:b
});

const asyncIncrease = (dispach, state) => {
  dispach({type: 'INCREMENT_LOADING'});
  _fakeServerApi.increaseCount(state.count.result,
    data => dispach({type: 'INCREMENT'}));
}

const getRandomImage = (dispatch, state) => {
  dispatch({type: 'IMAGES_LOADING'});
  var imgurAPI = 'https://api.imgur.com/3/gallery/random/random/1';
  $.getJSON(imgurAPI).done(data => dispatch({type: 'IMAGES', data:data.data}));
}
