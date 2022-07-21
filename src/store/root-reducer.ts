import {combineReducers} from "redux";
import authReducers from "./auth/auth.reducers";
import uiReducers from "./ui/ui.reducers";
const rootReducer = combineReducers({
 auth: authReducers,
 ui: uiReducers,
});

export default rootReducer;
