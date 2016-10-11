const logger = store => next => action => {
  console.log('currentState = ', store.getState());
  console.info('action = ', action)
  next(action);
  console.log('nextState = ', store.getState());
}

const crashReporter = store => next => action => {
  try {
    next(action);
  } catch (e) {
    console.error('error with action = ', action)
    console.error(e);
  }
}

const thunk = store => next => action => {
  if(typeof action === 'function'){
    action(store.dispatch, store.getState());
  } else {
    next(action)
  }
}
