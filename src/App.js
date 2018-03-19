import React, { Component } from "react";
import { line } from "d3-shape";
import { scaleLinear } from "d3-scale";
import { data } from "./data";

const width = 500;
const height = 300;
const padding = 10;

const xSelector = d => d.x;
const ySelector = d => d.y;

const xScale = scaleLinear()
  .range([padding, width - padding])
  .domain([0, 10]);

const yScale = scaleLinear()
  .range([height - padding, padding])
  .domain([0, 500]);

class App extends Component {
  state = {
    selected: null,
  };
  onMouseMove = e => {
    const index = Math.round(xScale.invert(e.clientX), 0);
    this.setState({
      selected: index,
    });
  };
  render() {
    const path = line()
      .x(d => xScale(xSelector(d)))
      .y(d => yScale(ySelector(d)));

    return (
      <div>
        <svg width={width} height={height} onMouseMove={this.onMouseMove}>
          <path d={path(data)} stroke="#ff6347" strokeWidth={3} fill="none" />
          {data.map((d, i) => {
            const yPoint = yScale(ySelector(d));
            const xPoint = xScale(xSelector(d));
            const r = this.state.selected === i ? 10 : 5;
            return (
              <circle cx={xPoint} cy={yPoint} r={r} stroke="#fff" strokeWidth={2} fill="#ff6347" />
            );
          })}
        </svg>
      </div>
    );
  }
}

export default App;
