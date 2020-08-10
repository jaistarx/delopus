import React, { Component } from 'react'
import HorizontalScroll from 'react-scroll-horizontal'
 
class ScrollingHorizontally extends Component {
  render() {
    const child   = { width: `30em`, height: `100%`,color:'black'}
    const parent  = { width: `60em`, height: `100%`,color:'black'}
    return (
      <div style={parent}>
        <HorizontalScroll>
            <div style={child} ><p>IMAGE 1</p></div>
            <div style={child} ><p>IMAGE 1</p></div>
            <div style={child} ><p>IMAGE 1</p></div>
        </HorizontalScroll>
      </div>
    )
  }
}

export default ScrollingHorizontally;