import React, {RefObject, useEffect, useState} from "react";
import * as d3 from "d3";
import {MathUtil} from "./math.util";
import {PieArcDatum} from "d3-shape";
import "./styles.scss";

import "./styles.scss";

type Data = {
 name: string;
 width: number;
 height: number;
 size: number;
 value: number;
 color: string;
 trackColor: string;
};

export interface DoughnutPercentChartData {
 // chart size
 size?: number;
 //doughnut wisth
 width?: number;
 // value
 value: number;
 // chart color
 color: string;
 // track color
 trackColor?: string;
}

const DonutChart = () => {
 const ref: RefObject<HTMLDivElement> = React.createRef();
 const [data, setData] = useState({
  size: 206,
  value: 10,
  width: 28,
  color: "#80C342",
  trackColor: "#ECECEC",
 });
 let _svg;
 let _circle;
 let _track;
 let _percent;
 useEffect(() => {
  _createChart();
 }, []);
 const _createChart = () => {
  const {
   size = 206,
   value = 20,
   width = 28,
   color = "",
   trackColor = "#ECECEC",
  } = data;
  const outerRadius = size / 2;
  const innerRadius = outerRadius - width / 2;
  _createSvg(size);
  _createCircle(outerRadius);
  _createTrack(innerRadius, outerRadius, value, trackColor);
  _createPercent(innerRadius, outerRadius, value, color);
 };
 const _createSvg = (size: number) => {
  if (_svg) {
   _svg.remove();
  }
  _svg = d3
   .select(".sdr-tsx")
   .append("svg")
   .attr("width", size)
   .attr("height", size)
   .attr("viewBox", `0 0 ${size} ${size}`);
 };
 /**
  * create circle
  * @param radius radius
  */
 const _createCircle = (radius: number): void => {
  if (_circle) {
   _circle.remove();
  }
  _circle = _svg
   ?.append("circle")
   .attr("cx", radius)
   .attr("cy", radius)
   .attr("r", radius)
   .attr("fill", "none")
   .attr("class", "sdr-circle");
 };
 const _createTrack = (
  innerRadius: number,
  outerRadius: number,
  value: number,
  color: string
 ): void => {
  if (_track) {
   _track.remove();
  }
  // calculate track arc
  const trackArc = d3
   .arc()
   .innerRadius(innerRadius)
   .outerRadius(outerRadius)
   .startAngle(MathUtil.getRadianPercent(value))
   .endAngle(MathUtil.degreeToRadian(360));
  // create track
  _track = _svg
   ?.append("path")
   .attr("d", trackArc as any)
   .attr("x", 0)
   .attr("y", 0)
   .attr("transform", `translate(${outerRadius},${outerRadius})`)
   .attr("fill", color);
 };
 const _createPercent = (
  innerRadius: number,
  outerRadius: number,
  value: number,
  color: string
 ) => {
  if (_percent) {
   _percent.remove();
  }
  //calculate percent arc
  const percentArc = d3
   .arc()
   .innerRadius(innerRadius)
   .outerRadius(outerRadius)
   .startAngle(MathUtil.degreeToRadian(0))
   .endAngle(MathUtil.getRadianPercent(value));
  //   create percent
  _percent = _svg
   ?.append("path")
   .attr("d", percentArc as any)
   .attr("x", 0)
   .attr("y", 0)
   .attr("transform", `translate(${outerRadius},${outerRadius})`)
   .attr("fill", color);
 };
 return <div className="sdr-tsx"></div>;
};

export default DonutChart;
