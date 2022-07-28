import * as types from "./ui.actions";
export interface IUiState {
 leftCollapsed: boolean;
}
const getDefaultState = (): IUiState => {
 const cached = window.localStorage.getItem("leftCollapsed")
  ? localStorage.getItem("leftCollapsed") === "true"
  : false;
 const collapsed = cached ? cached : false;

 return {
  leftCollapsed: collapsed,
 };
};

export default (state = getDefaultState(), action: types.UiActionTypes) => {
 switch (action.type) {
  case types.LEFT_COLLAPSE:
   return {
    ...state,
    leftCollapsed: localStorage.getItem("leftCollapsed")
     ? localStorage.getItem("leftCollapsed") === "true"
     : false,
   };

  default:
   return state;
 }
};
