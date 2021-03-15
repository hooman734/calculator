export const initialState = {
  history: [],
  current: [],
}

const reducer = function (state = initialState, {type, payload}) {
  switch (type) {
    case 'PREV':
      return {
        ...state,
        current: state.history[payload],
        history: state.history.splice(payload, 1),
      };
    case 'OP': {
      switch (payload) {
        case 'AC':
          return {
            ...state,
            current: [],
          };
        case '=':
          return {
            ...state,
            current: [],
            history: state.history.concat([state.current]),
          }
        case '+/-':
          payload = '* -1';
        default:
          return {
            ...state,
            current: [...state.current, payload]
          };
      }
    }
    default:
      return state;
  }
}


export default reducer;