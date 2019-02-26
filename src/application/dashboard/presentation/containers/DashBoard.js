import React, {Component} from 'react';
import {Responsive as ResponsiveGridLayout} from 'react-grid-layout';
import _ from 'lodash';
import RGL, {WidthProvider} from "react-grid-layout";
import styled from 'styled-components';

const ReactGridLayout = WidthProvider(RGL);
const dashboardLayout = [
  {component: 'weather', x: 0, y: 0, w: 3, h: 4, static: true},
  {component: 'dust', x: 3, y: 0, w: 3, h: 4, static: true},
  {component: 'news', x: 6, y: 0, w: 4, h: 10, static: true},
  {component: 'status', x: 10, y: 0, w: 2, h: 5, static: true},
  {component: 'todos', x: 0, y: 0, w: 3, h: 5, static: true},
  {component: 'stock', x: 3, y: 0, w: 3, h: 4, static: true},
];

export default class DashBoard extends Component {
  static defaultProps = {
    className: 'layout',
    items: dashboardLayout.length,
    rowHeight: 50,
    onLayoutChange: function() {},
    cols: 12,
  };

  constructor(props) {
    super(props);
    const layout = this.generateLayout();
    this.state = {
      layout
    };
  }

  generateDom = () => {
    // return _.map(_.range(this.props.items), i => {
    //   return (
    //     <DummyContainer key={i}>
    //       <span className={'text'}>{i}</span>
    //     </DummyContainer>
    //   );
    // });

    return dashboardLayout.map((item, index) => {
      return (
        <DummyContainer key={index}>
          <span className={'text'}>{item.component}</span>
        </DummyContainer>
      )
    })
  };

  generateLayout = () => {
    return _.map(dashboardLayout, (item, i) => {
      const y = _.result(item.y, 'y') || Math.ceil(Math.random() * 4) + 1;
      return {
        // x: (i * 2) % 12,
        // y: Math.floor(i / 6) * y,
        // w: 2,
        // h: y,
        // i: i.toString()
        x: item.x,
        y: item.y,
        w: item.w,
        h: item.h,
        i: i.toString()
      };
    });
  };

  onLayoutChange = (layout) => {
    this.props.onLayoutChange(layout);
  };

  render() {
    return(
      <ReactGridLayout
        layout={this.state.layout}
        onLayoutChange={this.onLayoutChange}
        {...this.props}
      >
        {this.generateDom()}
      </ReactGridLayout>
    )
  }
}

const DummyContainer = styled.div`
  background: gray;
`;