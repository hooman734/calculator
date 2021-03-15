import {createStore} from "redux";
import reducer, { initialState } from "./reducers";

const rootStore = createStore(reducer, initialState, window.devToolsExtension && window.devToolsExtension());

export default rootStore;