import React, { Component } from "react";
import { line, curveStep } from "d3-shape";
import { scaleLinear } from "d3-scale";
import { data } from "./data";

const width = 500;
const height = 300;

const xSelector = d => d.x;
const ySelector = d => d.y;
const xScale = scaleLinear()
  .range([0, width])
  .domain([0, 10]);

const yScale = scaleLinear()
  .range([height, 0])
  .domain([0, 500]);

class App extends Component {
  render() {
    const path = line()
      .x(d => xScale(xSelector(d)))
      .y(d => yScale(ySelector(d)));

    return (
      <div>
        <svg width={width} height={height}>
          <path d={path(data)} stroke="#ff6347" strokeWidth={3} fill="none" />
          {data.map(d => {
            const yPoint = yScale(ySelector(d));
            const xPoint = xScale(xSelector(d));
            return (
              <circle cx={xPoint} cy={yPoint} r="3" stroke="#fff" strokeWidth={2} fill="#ff6347" />
            );
          })}
        </svg>
      </div>
    );
  }
}

export default App;
