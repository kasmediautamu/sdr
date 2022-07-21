export const SET_VIEW = "[DASHBOARD] SET_VIEW";
export const EXPAND_LEFTBAR = "[DASHBOARD] EXPAND_LEFTBAR";
export const CONTRACT_LEFTBAR = "[DASHBOARD] CONTRACT_LEFTBAR";
export const SET_DASHBOARD_HOME_VIEW =
 "[DASHBOARDHOME] SET_DASHBOARD_HOME_VIEW";

export type IHomeView =
 | "getting-started"
 | "primary"
 | "add-company"
 | "manual-add-property"
 | "add-new-owner"
 | "property-set-up";

export interface ISetHomeView {
 type: typeof SET_DASHBOARD_HOME_VIEW;
 payload: {
  screen: IHomeView;
 };
}
export interface ISetViewAction {
 type: typeof SET_VIEW;
 payload: string;
}
export interface IExpandLeftBarAction {
 type: typeof EXPAND_LEFTBAR;
}
export interface IContractLeftBarAction {
 type: typeof CONTRACT_LEFTBAR;
}

export const setView = (view: string): ISetViewAction => ({
 type: SET_VIEW,
 payload: view,
});

export const expandLeftBar = (): IExpandLeftBarAction => ({
 type: EXPAND_LEFTBAR,
});

export const contractLeftBar = (): IContractLeftBarAction => ({
 type: CONTRACT_LEFTBAR,
});
export const setHomeView = (screen: IHomeView): ISetHomeView => {
 return {
  type: SET_DASHBOARD_HOME_VIEW,
  payload: {
   screen,
  },
 };
};
export type UiActionTypes =
 | ISetViewAction
 | IContractLeftBarAction
 | IExpandLeftBarAction
 | ISetHomeView;
