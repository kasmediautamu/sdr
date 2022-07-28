import {createSelector} from "reselect";
import {IUiState} from "./ui.reducers";
const selectUiState = (state: {ui: IUiState}) => state.ui;
export const selectLeftCollapse = createSelector(
 [selectUiState],
 (ui) => ui.leftCollapsed
);
