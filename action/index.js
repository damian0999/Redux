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
