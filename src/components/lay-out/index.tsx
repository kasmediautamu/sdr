import React, {ReactNode} from "react";
import AppBar from "../app-bar";
import SideBar from "../side-bar";
import "./styles.scss";
interface ILayoutProps {
 children: ReactNode;
 title: string;
}

const Layout = ({children, title}: ILayoutProps) => {
 return (
  <div className="sdr-layout">
   <AppBar screenTitle={title} />
   <div className="sdr-layout__main">
    <div className="sdr-layout__main--left">
     <SideBar />
    </div>
    <div className="sdr-layout__main--right">{children}</div>
   </div>
  </div>
 );
};
export default Layout;
