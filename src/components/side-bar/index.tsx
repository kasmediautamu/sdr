import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import SdrDashboard from "../../assets/sdr-dashboard.svg";
import SdrAsset from "../../assets/sdr-asset.svg";
import SdrMdr from "../../assets/sdr-mdr.svg";
import SdrEndPoint from "../../assets/sdr-endpoint.svg";
import SdrNdr from "../../assets/sdr-ndr.svg";
import SdrRiskManagement from "../../assets/sdr-risk-mgnt.svg";
import SdrAccountManagement from "../../assets/sdr-acc-mgnt.svg";
import SdrHelp from "../../assets/sdr-help.svg";
import "./styles.scss";
import {useSelector} from "react-redux";
import {selectLeftCollapse} from "../../store/ui/ui.selectors";

const SideBar = () => {
 const leftCollapsed = useSelector(selectLeftCollapse);
 console.log(leftCollapsed);
 return (
  <div className="sdr-sidebar">
   <NavLink
    to={"/dashboard"}
    className={({isActive}) =>
     isActive ? "sdr-active-menu" : "sdr-disabled-menu"
    }
   >
    <img src={SdrDashboard} alt="" />
    {leftCollapsed ? "" : <p className="label">Dashboard</p>}
   </NavLink>
   <NavLink
    to={"/assets"}
    className={({isActive}) =>
     isActive ? "sdr-active-menu" : "sdr-disabled-menu"
    }
   >
    <img src={SdrAsset} alt="dashboard icon" />
    {leftCollapsed ? "" : <p className="label">Asset Management</p>}
   </NavLink>
   <NavLink
    to={"/mdr"}
    className={({isActive}) =>
     isActive ? "sdr-active-menu" : "sdr-disabled-menu"
    }
   >
    <img src={SdrMdr} alt="dashboard icon" />
    {leftCollapsed ? "" : <p className="label">MDR</p>}
   </NavLink>
   <NavLink
    to={"/end-point"}
    className={({isActive}) =>
     isActive ? "sdr-active-menu" : "sdr-disabled-menu"
    }
   >
    <img src={SdrEndPoint} alt="dashboard icon" />
    {leftCollapsed ? "" : <p className="label">End point</p>}
   </NavLink>
   <NavLink
    to={"/ndr"}
    className={({isActive}) =>
     isActive ? "sdr-active-menu" : "sdr-disabled-menu"
    }
   >
    <img src={SdrNdr} alt="dashboard icon" />
    {leftCollapsed ? "" : <p className="label">NDR</p>}
   </NavLink>
   <NavLink
    to={"/risk-management"}
    className={({isActive}) =>
     isActive ? "sdr-active-menu" : "sdr-disabled-menu"
    }
   >
    <img src={SdrRiskManagement} alt="dashboard icon" />
    {leftCollapsed ? "" : <p className="label">Risk Management</p>}
   </NavLink>
   <NavLink
    to={"/account-management"}
    className={({isActive}) =>
     isActive ? "sdr-active-menu" : "sdr-disabled-menu"
    }
   >
    <img src={SdrAccountManagement} alt="dashboard icon" />
    {leftCollapsed ? "" : <p className="label">Account Management</p>}
   </NavLink>
   <NavLink
    to={"/help"}
    className={({isActive}) =>
     isActive ? "sdr-active-menu" : "sdr-disabled-menu"
    }
   >
    <img src={SdrHelp} alt="dashboard icon" />
    {leftCollapsed ? "" : <p className="label">Help</p>}
   </NavLink>
  </div>
 );
};
export default SideBar;
