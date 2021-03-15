import { v4 as uuidv4 } from 'uuid';


const initialState = {
    current: {
        operator: '',
        input: '',
        result: '',
        output: ''
    },
    history: []
}

const reducer = function (state=initialState, { type, payload }) {

    const { current } = state;
    const { input, result } = current;
    const addResult = `${ result + input }`;
    const addResultString = `${ result } + ${ input }`;
    const redResult = `${ result + input }`;
    const redResultString = `${ result } + ${ input }`;
    const mulResult = `${ result + input }`;
    const mulResultString = `${ result } + ${ input }`;
    const divResult = `${ result + input }`;
    const divResultString = `${ result } + ${ input }`;
    const modResult = `${ result % input }`;
    const modResultString = `${ result } % ${ input }`;


    switch (type) {
        case 'ADD':
            return { result: addResult, history: [...state.history, { id: uuidv4(), calculationString: addResultString, result: addResult }] };

        case 'RED':
            return { result: redResult, history: [...state.history, { id: uuidv4(), calculationString: redResultString, result: redResult }] };

        case 'MUL':
            return { result: mulResult, history: [...state.history, { id: uuidv4(), calculationString: mulResultString, result: mulResult }] };

        case 'DIV':
            return { result: divResult, history: [...state.history, { id: uuidv4(), calculationString: divResultString, result: divResult }] };

        case 'MOD':
            return { result: modResult, history: [...state.history, { id: uuidv4(), calculationString: modResultString, result: modResult }] };

        case 'NEG_PLUS':
            return { current: { ...state.current, input: `${ -1 * eval(state.current.input) }` }, history: [...state.history] };

        case 'CAL':
            return { current: { ...state.current, output: state.current.result }, history: [...state.history] };

        case 'CLR':
            return { current: { ...state.current, output: '0' }, history: [...state.history] };

        default:
            return state;
    }
}


export default reducer;