import React, {ReactNode} from "react";
import {useSelector} from "react-redux";
import {selectLeftCollapse} from "../../store/ui/ui.selectors";
import AppBar from "../app-bar";
import SideBar from "../side-bar";
import "./styles.scss";
interface ILayoutProps {
 children: ReactNode;
 title: string;
}

const Layout = ({children, title}: ILayoutProps) => {
 const leftCollapsed = useSelector(selectLeftCollapse);
 return (
  <div className="sdr-layout">
   <AppBar screenTitle={title} />
   <div className="sdr-layout__main">
    <div
     className={`sdr-layout__main--left ${
      leftCollapsed ? "leftCollapsed" : ""
     }`}
    >
     <SideBar />
    </div>
    <div className="sdr-layout__main--right">{children}</div>
   </div>
  </div>
 );
};
export default Layout;
