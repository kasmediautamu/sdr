import React, {useEffect} from "react";
import * as d3 from "d3";
import {ArrayUtil} from "./array.util";
import {MathUtil} from "../doughnut-percent-chart/math.util";
import "./styles.scss";

export type NetworkEventType =
 | "Ransomware"
 | "Remote Access Trojan"
 | "Bruteforce Account"
 | "Beacon Related"
 | "Non Standard NW Traffic"
 | "Trojan"
 | "Denial of Service"
 | "Insecure Access"
 | "Firewall Breach"
 | "Non Standard Routing";

export type NetworkEventRisk = "High Risk" | "Low Risk";

/**
 * network status
 */
export interface NetworkStatus {
 customerId: string;
 eventCount: number;
 eventType: NetworkEventType;
 eventRisk: NetworkEventRisk;
}
export interface DoughnutChartData {
 // value
 value: number;
 // label
 label: string;
 // css color string
 color: string;
 // priority
 risk: NetworkEventRisk;
}

export interface DoughnutChartArc {
 // selection
 selection?: d3.Selection<any, any, any, any>;
 // data
 data: DoughnutChartData | any;
 // arc center
 centerOfArc: [number, number];
}

const DoughnutChart = () => {
 // chart data
 const [_data, _setData] = React.useState([
  {
   value: 10,
   label: "plot1",
   color: "#000",
   risk: "High Risk",
  },
  {
   value: 30,
   label: "plot1",
   color: "#eee",
   risk: "High Risk",
  },
 ]);
 // size
 const _size = 168;
 //inner radius
 const _outerRadius = _size / 2;
 const _innerRadius = _outerRadius - 23;
 // total value
 let _total = 0;
 // svg
 let _svg;
 //  circle
 let _circle;
 // arcs group
 let _arcsGroup;
 // arcs
 let _arcs: DoughnutChartArc[] = [];
 // hover arc
 let _hoveredArc: DoughnutChartArc;
 // tooltip x
 let _tooltipX = 0;
 let _tooltipY = 0;
 useEffect(() => {
  _createChart();
 }, []);
 //  onDestroy
 // _destroyArcs();
 function _showTooltip(): boolean {
  return !!_hoveredArc;
 }

 function _tooltipLeft(): string {
  return `${_tooltipX}px`;
 }
 function tooltipTop(): string {
  return `${_tooltipY}px`;
 }
 function currentData(): DoughnutChartData | undefined {
  return _hoveredArc?.data;
 }
 //  function currentPercent() {
 //   return ((currentData?.value || 0) / _total) * 100;
 //  }
 function total(): number {
  return _total;
 }

 /**
  * create chart
  */
 function _createChart(): void {
  _total = ArrayUtil.sum(_data.map((item) => item.value));
  //   _destroyArcs();
  _arcs = [];
  _createSvg();
  _createCircle();
  _createArcs();
  _addEventsToArcs();
 }
 /**
  * create svg
  */
 function _createSvg(): void {
  if (_svg) {
   _svg.remove();
  }
  _svg = d3
   .select("sdr-doughtnut")
   .append("svg")
   .attr("width", _size)
   .attr("height", _size);
 }
 function _createCircle(): void {
  if (_circle) {
   _circle.remove();
  }
  _circle = _svg
   ?.append("circle")
   ?.append("circle")
   .attr("cx", _outerRadius)
   .attr("cy", _outerRadius)
   .attr("r", _outerRadius)
   .attr("fill", "none")
   .attr("class", "sdr-circle");
 }
 function _createArcs(): void {
  let previous = 0;
  _arcsGroup = _svg?.append("g");
  _data.forEach((item) => {
   const deg = 360 * (item.value / _total);
   const value = previous + deg;
   const arc = _createArcFromTo(previous, value);
   const path = this._arcsGroup
    ?.append("path")
    .attr("d", arc)
    .attr("x", 0)
    .attr("y", 0)
    .attr("transform", `translate(${_outerRadius},${_outerRadius})`)
    .attr("fill", item.color);
   _arcs.push({
    selection: path,
    data: item,
    centerOfArc: MathUtil.getArcPointCoordinates(
     this._outerRadius,
     this._outerRadius,
     this._outerRadius - 11.5,
     previous + (value - previous) / 2 - 90
    ),
   });
   previous = value;
  });
 }
 /**
  * destroy arcs to remove events
  */
 function _destroyArcs(): void {
  this._arcs.forEach((item) => item.selection?.remove());
 }

 /**
  * add events to arc
  */
 function _addEventsToArcs(): void {
  _arcs.forEach((item) => {
   item.selection?.on("mouseenter", () => {
    const {x, y} = _svg.node().getBoundingClientRect();

    _hoveredArc = item;
    _tooltipX = x + item.centerOfArc[0];
    _tooltipY = y + item.centerOfArc[1];
   });

   item.selection?.on("mouseleave", () => {
    _hoveredArc = undefined;
   });
  });
 }
 /**
  * create arc from deg to deg
  * @param from start deg
  * @param to end deg
  */
 function _createArcFromTo(from: number, to: number): d3.Arc<any, any> {
  return d3
   .arc()
   .innerRadius(_innerRadius)
   .outerRadius(_outerRadius)
   .startAngle(MathUtil.degreeToRadian(from))
   .endAngle(MathUtil.degreeToRadian(to));
 }
 return <div className="sdr-doughnut-chart"></div>;
};
export default DoughnutChart;
