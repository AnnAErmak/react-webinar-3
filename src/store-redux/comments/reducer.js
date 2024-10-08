export const initialState = {
  comments: [],
  count: 0,
  activeIdComment: null,
  waiting: false, // признак ожидания загрузки
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'comments/load-start':
      return { ...state, comments: [], waiting: true };
    case 'comments/load-success':
      return {...state, comments: action.payload.comments, count: action.payload.count, waiting: false};
      case 'comments/setActiveIdComment':
        return {...state, activeIdComment: action.payload}
    default:
      // Нет изменений
      return state;
  }
}

export default reducer;
