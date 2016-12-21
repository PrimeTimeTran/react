export default (state = null, action) => {
  // BoilerPlate
  switch (action.type) {
    case 'select_library':
      return action.payload;
    default:
      return state;
  }
};
