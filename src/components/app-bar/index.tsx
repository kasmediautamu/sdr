import React from "react";
import SdrMenuToggle from "../../assets/menu-toggle.svg";
import SdrLogo from "../../assets/logo.svg";
import SdrFilter from "../../assets/filter.svg";
import SdrEdit from "../../assets/sdr-edit.svg";
import SdrTheme from "../../assets/sdr-theme.svg";
import SdrExport from "../../assets/sdr-export.svg";
import SdrSearch from "../../assets/sdr-maginifier.svg";
import SdrNotification from "../../assets/sdr-notification.svg";
import SdrUser from "../../assets/sdr-user.svg";
import SdrArrow from "../../assets/sdr-arrow.svg";
import "./styles.scss";
import {useDispatch, useSelector} from "react-redux";
import {leftCollapse} from "../../store/ui/ui.actions";
import {selectLeftCollapse} from "../../store/ui/ui.selectors";
interface IAppBarProps {
 screenTitle: string;
}
const AppBar = ({screenTitle}: IAppBarProps) => {
 const dispatch = useDispatch();
 const leftCollapsed = useSelector(selectLeftCollapse);

 return (
  <div className="sdr-appbar">
   <div className="sdr-appbar__left">
    <div className="sdr-menu-toggle" onClick={() => dispatch(leftCollapse())}>
     <img src={SdrMenuToggle} alt="menu" />
    </div>
    <div className="sdr-logo">
     <img src={SdrLogo} alt="logo" />
    </div>
    <div className="sdr-vertical-divider"></div>
    <div className="sdr-page-title text-sdr-white">{screenTitle}</div>
   </div>
   <div className="sdr-appbar__center">
    <div className="menu-item">
     <img src={SdrFilter} alt="" />
     <p className="menu-title text-sdr-bright-grey">Filter</p>
    </div>
    <div className="menu-item">
     <img src={SdrEdit} alt="" />
     <p className="menu-title text-sdr-bright-grey">Edit</p>
    </div>
    <div className="menu-item">
     <img src={SdrExport} alt="" />
     <p className="menu-title text-sdr-bright-grey">Export</p>
    </div>
    <div className="menu-item">
     <img src={SdrTheme} alt="" />
     <p className="menu-title text-sdr-bright-grey">Dark Theme</p>
    </div>
   </div>
   <div className="sdr-appbar__right">
    <div className="menu-icon">
     <img src={SdrSearch} alt="" />
    </div>
    <div className="menu-icon">
     <img src={SdrNotification} alt="" />
    </div>
    <div className="sdr-avatar">
     <img src={SdrUser} alt="" />
    </div>
    <div className="sdr-user-name">
     <p className="text-sdr-mantis">Nathan Fraser</p>
     <img src={SdrArrow} alt="" />
    </div>
   </div>
  </div>
 );
};
export default AppBar;
