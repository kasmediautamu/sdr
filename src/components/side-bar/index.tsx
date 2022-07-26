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

const SideBar = () => {
 //  const [isCollapsed, setIsCollapsed] = useState<string>(
 //   localStorage.getItem("sidebar").toString() || "isCollapsed"
 //  );
 return (
  <div className="sdr-sidebar">
   <NavLink
    to={"/dashboard"}
    className={({isActive}) =>
     isActive ? "sdr-active-menu" : "sdr-disabled-menu"
    }
   >
    <img src={SdrDashboard} alt="" />
    <p className="label">Dashboard</p>
   </NavLink>
   <NavLink
    to={"/assets"}
    className={({isActive}) =>
     isActive ? "sdr-active-menu" : "sdr-disabled-menu"
    }
   >
    <img src={SdrAsset} alt="dashboard icon" />
    <p className="label">Asset Management</p>
   </NavLink>
   <NavLink
    to={"/mdr"}
    className={({isActive}) =>
     isActive ? "sdr-active-menu" : "sdr-disabled-menu"
    }
   >
    <img src={SdrMdr} alt="dashboard icon" />
    <p className="label">MDR</p>
   </NavLink>
   <NavLink
    to={"/end-point"}
    className={({isActive}) =>
     isActive ? "sdr-active-menu" : "sdr-disabled-menu"
    }
   >
    <img src={SdrEndPoint} alt="dashboard icon" />
    <p className="label">End point</p>
   </NavLink>
   <NavLink
    to={"/ndr"}
    className={({isActive}) =>
     isActive ? "sdr-active-menu" : "sdr-disabled-menu"
    }
   >
    <img src={SdrNdr} alt="dashboard icon" />
    <p className="label">NDR</p>
   </NavLink>
   <NavLink
    to={"/risk-management"}
    className={({isActive}) =>
     isActive ? "sdr-active-menu" : "sdr-disabled-menu"
    }
   >
    <img src={SdrRiskManagement} alt="dashboard icon" />
    <p className="label">Risk Management</p>
   </NavLink>
   <NavLink
    to={"/account-management"}
    className={({isActive}) =>
     isActive ? "sdr-active-menu" : "sdr-disabled-menu"
    }
   >
    <img src={SdrAccountManagement} alt="dashboard icon" />
    <p className="label">Account Management</p>
   </NavLink>
   <NavLink
    to={"/help"}
    className={({isActive}) =>
     isActive ? "sdr-active-menu" : "sdr-disabled-menu"
    }
   >
    <img src={SdrHelp} alt="dashboard icon" />
    <p className="label">Help</p>
   </NavLink>
  </div>
 );
};
export default SideBar;
