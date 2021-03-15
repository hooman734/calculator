import { createStore } from "redux";
import reducer from "./reducers";


const initialState = {
    current: {
        operator: '',
        input: '',
        result: '',
        output: ''
    },
    history: []
}

const rootStore = createStore(reducer, initialState, window.devToolsExtension && window.devToolsExtension());

export default rootStore;