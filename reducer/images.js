function images(state = {data: [], loading: 'Please click the Random Images Button'}, action){
  switch(action.type){
    case 'IMAGES_LOADING':
      return Object.assign({}, state), {
        loading: 'loading...'
      };
    case 'IMAGES':
      return Object.assign({}, state,{
        loading: 'loaded',
        data: action.data
      });
    default:
      return state;
  }
}
