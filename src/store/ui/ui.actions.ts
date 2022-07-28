export const LEFT_COLLAPSE = "[UI] LEFT_COLLAPSE";

export interface ILeftCollapseAction {
 type: typeof LEFT_COLLAPSE;
}

export const leftCollapse = (): any => {
 const leftCollapse = window.localStorage.getItem("leftCollapsed")
  ? localStorage.getItem("leftCollapsed") === "true"
  : false;
 try {
  window.localStorage.setItem("leftCollapsed", (!leftCollapse).toString());
 } catch (e) {
  console.log(e);
 }
 return {
  type: LEFT_COLLAPSE,
 };
};

export type UiActionTypes = ILeftCollapseAction;
