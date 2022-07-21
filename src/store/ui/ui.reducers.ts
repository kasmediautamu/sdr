import * as types from "./ui.actions";
import {IHomeView} from "./ui.actions";
export interface IUiState {
 view: string;
 isCollapsed: boolean;
 homeView: IHomeView;
}
const defaultState: IUiState = {
 view: "home",
 isCollapsed: false,
 homeView: "getting-started",
};
export default (state = defaultState, action: types.UiActionTypes) => {
 switch (action.type) {
  case types.SET_VIEW:
   return {
    ...state,
    view: action.payload,
   };
  case types.EXPAND_LEFTBAR:
   return {
    ...state,
    isCollapsed: false,
   };
  case types.CONTRACT_LEFTBAR:
   return {
    ...state,
    isCollapsed: true,
   };
  case types.SET_DASHBOARD_HOME_VIEW:
   return {
    ...state,
    homeView: action.payload.screen,
   };
  default:
   return state;
 }
};
