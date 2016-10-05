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
