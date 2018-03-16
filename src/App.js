import React, { Component } from "react";
import { scaleBand, scaleLinear } from "d3-scale";
import { data } from "./data";

const width = 500;
const height = 300;

const xSelector = d => d.x;
const ySelector = d => d.y;

const xScale = scaleBand()
  .range([0, width])
  .domain(data.map(d => xSelector(d)))
  .padding(0.3);

const yScale = scaleLinear()
  .range([height, 0])
  .domain([0, 500]);

class App extends Component {
  render() {
    return (
      <div>
        <svg width={width} height={height}>
          {data.map((d, i) => {
            const yValue = yScale(ySelector(d));
            const barHeight = height - yValue;

            return (
              <rect
                key={i}
                width={xScale.bandwidth()}
                height={barHeight}
                x={xScale(xSelector(d))}
                y={yValue}
                // y={0}
                stroke="#ff6347"
                strokeWidth={3}
                fill="#f5f5f5"
              />
            );
          })}
        </svg>
      </div>
    );
  }
}

export default App;
