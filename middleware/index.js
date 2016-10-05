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
const thunk = function(store){
  return function(next) {
    return function(action) {
      if(typeof action === 'function'){
        action(store.dispatch, store.getState());
      } else {
        next(action)
      }
    }
  }
}
