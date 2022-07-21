import {createSelector} from "reselect";
import {IAuthState} from "./auth.reducers";

const selectAuthState = (state: {auth: IAuthState}) => state.auth;
export const selectCurrentAuthState = createSelector(
 [selectAuthState],
 (auth) => !!auth.token
);

export const selectAuthLoadingState = createSelector(
 [selectAuthState],
 (auth) => auth.loading
);

export const selectAuthErrorState = createSelector(
 [selectAuthState],
 (auth) => auth.error
);

export const selectAuthFormView = createSelector(
 [selectAuthState],
 (auth) => auth.form
);
