import {ThunkAction} from "@reduxjs/toolkit";
import {UiActionTypes} from "./ui/ui.actions";
import {IUiState} from "./ui/ui.reducers";

export interface IAppState {
 auth: any;
 ui: IUiState;
}

export type AppActionTypes = UiActionTypes | any;

export type AppThunk<ReturnType = void> = ThunkAction<
 ReturnType,
 IAppState,
 unknown,
 AppActionTypes
>;
