import {createSelector} from "reselect";
import {IUiState} from "./ui.reducers";
const selectUiState = (state: {ui: IUiState}) => state.ui;
export const selectCurrentView = createSelector(
 [selectUiState],
 (ui) => ui.view
);

export const selectLeftBarView = createSelector(
 [selectUiState],
 (ui) => ui.isCollapsed
);

export const selectDashboardView = createSelector(
 [selectUiState],
 (ui) => ui.homeView
);
