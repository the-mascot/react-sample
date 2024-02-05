import {applyMiddleware, createStore} from "redux";
import rootReducer from "./reducers/rootReducer";
import {thunk} from "redux-thunk";
import {composeWithDevTools} from "@redux-devtools/extension";

/*Redux 의 store Create*/
let store = createStore(rootReducer, undefined, composeWithDevTools(applyMiddleware(thunk)))

export default store;
