import React, {PureComponent} from 'react';
import {Svg, G, Rect, Text} from 'react-native-svg';
import * as d3 from 'd3';

const GRAPH_MARGIN = 8;
const GRAPH_BAR_WIDTH = 14;
const colors = {
  bars: '#E3562A',
};

export default class BarChart extends PureComponent {
  render() {
    // Dimensions
    const SVGHeight = 150;
    const SVGWidth = 300;
    const graphHeight = SVGHeight - 2 * GRAPH_MARGIN;
    const graphWidth = SVGWidth - 2 * GRAPH_MARGIN;
    const data = this.props.data;

    // X scale point
    const xDomain = data.map(item => item.label);
    const xRange = [0, graphWidth];
    const x = d3.scalePoint().domain(xDomain).range(xRange).padding(1);

    // Y scale linear
    const yDomain = [0, d3.max(data, d => d.value)];
    const yRange = [0, graphHeight];
    const y = d3.scaleLinear().domain(yDomain).range(yRange);

    return (
      <Svg width={SVGWidth} height={SVGHeight}>
        <G y={graphHeight}>
          {/* bars */}
          {data.map(item => (
            <Rect
              key={'bar' + item.label}
              x={x(item.label) - GRAPH_BAR_WIDTH / 2}
              y={y(item.value) * -1}
              rx={4}
              width={GRAPH_BAR_WIDTH}
              height={y(item.value)}
              fill={colors.bars}
              onPress={() => console.log(item.value)}
            />
          ))}

          {/* labels */}
          {data.map(item => (
            <Text
              key={'label' + item.label}
              fontSize={12}
              x={x(item.label)}
              y={10}
              fill="black"
              textAnchor="middle">
              {item.label}
            </Text>
          ))}
        </G>
      </Svg>
    );
  }
}
