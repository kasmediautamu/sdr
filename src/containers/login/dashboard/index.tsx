import React from "react";
import DG from "../../../components/charts/dg";
import DonutChart from "../../../components/charts/doughnut-percent-chart";
import LineChart from "../../../components/charts/line-chart";
import Layout from "../../../components/lay-out";

const Dashboard = () => {
 return (
  <Layout title="Dashboard">
   <div className="sdr-dashboard">
    {/* <DonutChart /> */}
    {/* <DoughnutChart /> */}
    {/* <Donut /> */}
    {/* <DG
     data={[
      {name: "Yes", value: 60},
      {name: "No", value: 20},
      {name: "Non", value: 20},
     ]}
     width={250}
     height={350}
    /> */}
    <LineChart />
   </div>
  </Layout>
 );
};
export default Dashboard;
