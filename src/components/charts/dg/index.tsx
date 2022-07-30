import React, {RefObject, useEffect, useState} from "react";
import * as d3 from "d3";
import {PieArcDatum} from "d3";

import "./styles.scss";
interface IDGProps {
 data: Data[];
 width: number;
 height: number;
}
type Data = {
 name: string;
 value: number;
};

const DG = (props: IDGProps) => {
 const ref: RefObject<HTMLDivElement> = React.createRef();
 const [data, setData] = useState<Data[]>([]);
 let _svg;
 useEffect(() => {
  _cleanSvg();
  if (JSON.stringify(props.data) !== JSON.stringify(data)) {
   setData(props.data);
   const {width} = props;
   const {height} = props;
   _createSvg(width, height);
   const color = ["#068606", "#C1C0C0", "#EEE"];
   const donut = d3
    .pie<Data>()
    .sort(null)
    .value((record) => record.value);
   _createDonut();
   const donutData = donut(props.data);
   _createArc(donutData, color, _createPath());
  }
 }, [data]);
 function _createSvg(width: number, height: number): void {
  if (_svg) {
   _svg.remove();
  }
  _svg = d3
   .select(".sdr-dg")
   .append("svg")
   .attr("width", width)
   .attr("height", height)
   .append("g")
   .attr("transform", `translate(${width / 2}, ${height / 2.5})`);
 }
 function _createDonut(): void {
  d3
   .pie<Data>()
   .sort(null)
   .value((record) => record.value);
 }
 function _createArc(donutData, color: string[], path) {
  return _svg

   .selectAll(".arc")
   .data(donutData)
   .enter()
   .append("g")
   .attr("class", "arc")
   .attr("fill", (d, i) => {
    return color[i] as string;
   })
   .append("path")
   .attr("d", path);
 }
 function _createPath() {
  return d3.arc<PieArcDatum<Data>>().innerRadius(80).outerRadius(120);
 }
 function _cleanSvg() {
  if (_svg) {
   _svg.remove();
  }
 }
 /***
  * generate color array from incoming data
  * match color array to data legend
  */
 return (
  <>
   <div className="sdr-dg"></div>
   <div className="sdr-dg-legend">legend</div>
  </>
 );
};
export default DG;
