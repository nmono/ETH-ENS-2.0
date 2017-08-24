import React, { Component } from 'react'

export default class StatusBadge  extends Component {

  render(){
    return(
      <div style = {{backgroundColor: this.props.backgroundColor, borderRadius:"50%", height:40, width:40, textAlign: "center", display: "table"}}>
        <div style = {{verticalAlign: 'middle', display: "table-cell", textAlign: "center",
                       paddingLeft:4,
                       paddingTop: 4
                     }}>
          <svg width = "23" fill ={this.props.color}  x="0px" y="0px" viewBox="0 0 24 24" enable-background="new 0 0 25 25">
            {
              this.props.state === "-1" ?
              <g transform="translate(0,4)">
                <polygon points="18.6,2.3 6,14.9 1.4,10.3 0,11.7 6,17.7 20,3.7 "/>
              </g>
              :
              this.props.state === "0" ?
                <g transform="translate(0,4)">
                  <path d="M10,0C4.5,0,0,4.5,0,10c0,5.5,4.5,10,10,10c5.5,0,10-4.5,10-10C20,4.5,15.5,0,10,0z M10,18 c-4.4,0-8-3.6-8-8c0-4.4,3.6-8,8-8c4.4,0,8,3.6,8,8C18,14.4,14.4,18,10,18z"/>
                  <polygon points="11,9 11,4 9,4 9,9 4,9 4,11 9,11 9,16 11,16 11,11 16,11 16,9  "/>
                </g>
              :
              this.props.state === "1" ?
                <g transform="translate(0,4)">
                  <path d="M19.7,4.3l-4-4c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4L16.6,4H4C3.4,4,3,4.4,3,5c0,0.6,0.4,1,1,1h12.6l-2.3,2.3 c-0.4,0.4-0.4,1,0,1.4c0.4,0.4,1,0.4,1.4,0l4-4C20.1,5.3,20.1,4.7,19.7,4.3z"/>
                  <path d="M16,14H3.4l2.3-2.3c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0l-4,4c-0.4,0.4-0.4,1,0,1.4l4,4c0.4,0.4,1,0.4,1.4,0 c0.4-0.4,0.4-1,0-1.4L3.4,16H16c0.6,0,1-0.4,1-1C17,14.4,16.6,14,16,14z"/>
                </g>
              :
              this.props.state === "2" ?
                <g transform="translate(0,2)">
                  <path d="M10.4,8.9l2-2C12.7,6.6,13,6.1,13,5.5c0-0.5-0.2-1-0.6-1.4L8.8,0.6C8.1-0.2,6.8-0.2,6,0.6L0.6,6 c-0.8,0.8-0.8,2,0,2.8l3.5,3.5c0.4,0.4,0.9,0.6,1.4,0.6c0.5,0,1-0.2,1.4-0.6l2-2l9.7,9.7l1.4-1.4L10.4,8.9z M5.5,10.9L5.5,10.9   L2,7.4L7.4,2L11,5.5L5.5,10.9L5.5,10.9z"/><rect x="0" y="18"  width="10" height="2"/>
                </g>
              :
              this.props.state === "3" ?
                <g transform="translate(0,4)">
                  <path d="M10,7c0.6,0,1,0.4,1,1h2c0-1.3-0.8-2.4-2-2.8V4H9v1.2C7.8,5.6,7,6.7,7,8c0,1.7,1.3,3,3,3c0.6,0,1,0.4,1,1 c0,0.6-0.4,1-1,1c-0.6,0-1-0.4-1-1H7c0,1.3,0.8,2.4,2,2.8V16h2v-1.2c1.2-0.4,2-1.5,2-2.8c0-1.7-1.3-3-3-3C9.4,9,9,8.6,9,8   C9,7.4,9.4,7,10,7z"/>
                  <path d="M10,0C4.5,0,0,4.5,0,10c0,5.5,4.5,10,10,10c5.5,0,10-4.5,10-10C20,4.5,15.5,0,10,0z M10,18 c-4.4,0-8-3.6-8-8c0-4.4,3.6-8,8-8c4.4,0,8,3.6,8,8C18,14.4,14.4,18,10,18z"/>
                </g>
              :""
            }
          </svg>
        </div>
      </div>
    )
  }
}
