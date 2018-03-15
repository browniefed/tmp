import React, { Component } from "react";
import { line, curveStep } from "d3-shape";
import { scaleLinear } from "d3-scale";
import { data } from "./data";
import { data as downUpData } from "./down_up";

const width = 500;
const height = 300;

const xSelector = d => d.x;
const ySelector = d => d.y;
const xScale = scaleLinear()
  .range([0, width])
  .domain([0, 10]);

const yScale = scaleLinear()
  .range([0, height])
  // .range([height, 0])
  .domain([0, 500]);

class App extends Component {
  render() {
    const path = line()
      .x(d => xScale(xSelector(d)))
      .y(d => yScale(ySelector(d)))
      // .curve(curveStep)

    return (
      <div>
        <svg width={width} height={height}>
          <path d={path(data)} stroke="#ff6347" strokeWidth={3} fill="none" />
        </svg>
      </div>
    );
  }
}

export default App;
