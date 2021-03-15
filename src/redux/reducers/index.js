import {calculate} from "../../utils/calculator";
import _ from 'lodash';

export const initialState = {
  history: [],
  current: [],
}

const reducer = function (state = initialState, {type, payload}) {
  switch (type) {
    case 'PREV':
      state.history.splice(payload, 1);
      return {
        ...state,
        current: state.history[payload],
        history: state.history,
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
            current: [calculate(state.current)],
            history: state.current.length ? state.history.concat([state.current]) : state.history,
          }
        case '+/-':
          payload = '* -1';
        case 'x':
          payload = '*';
        default:
        {
          const last = _.last(state.current) || '#';
          if (last !== payload) {
            return {
              ...state,
              current: [...state.current, payload]
            };
          } else {
            return state
          }
        }
      }
    }
    default:
      return state;
  }
}


export default reducer;