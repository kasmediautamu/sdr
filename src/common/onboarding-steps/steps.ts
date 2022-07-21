import Setupcomany from "../../assets/images/setupcompany.svg";
import Setupproperties from "../../assets/images/setupproperties.svg";
import Completesetup from "../../assets/images/completesetup.svg";
export const onBoardingsteps = [
 {
  id: 1,
  title: "Set up company",
  status: true,
  description: "Lorem ipsum dolor sit amet, consectetur sadispscing elitr",
  image: Setupcomany,
  mainLinkLabel: "Get Started",
  mainLink: "/dashboard/company-set-up",
  isNext: false,
 },
 {
  id: 2,
  title: "Set up properties",
  status: true,
  description: "Lorem ipsum dolor sit amet, consectetur sadispscing elitr",
  image: Setupproperties,
  mainLinkLabel: "Get Started",
  mainLink: "/dashboard/property-set-up",
  minorLinkLabel: "Required Information for locations",
  minorLink: "/",
  isNext: false,
 },
 {
  id: 3,
  title: "Complete setup",
  status: false,
  description: "Lorem ipsum dolor sit amet, consectetur sadispscing elitr",
  image: Completesetup,
  mainLinkLabel: "Complete",
  mainLink: "/#",
  isNext: true,
 },
];
