import Styles from './Styles.jsx'
import React, { Component } from 'react'
import StatusBadge from './StatusBadge'


export default class AuctionDetails extends Component {

  render () {
    return (
      <div style={{width: '100%', maxWidth: 800, margin: 'auto'}}>
        <div style = {{ margin: 16}} className = "row">
          <div className = "col-1">
            <StatusBadge
              state = {"2"}
              color = {Styles.palette.textColor}
              backgroundColor = {Styles.palette.primary1Color}
              />
          </div>
          <div className = "col-11" style = {{height: 40, display: "table", color: Styles.palette.textColor}}>
            <div style = {{verticalAlign: 'middle', display: "table-cell"}}>
              Running auction
            </div>
          </div>
        <div className="row" style = {{padding:15}}>
          <div className="col-4" style = {{textAlign : "left", fontStyle : "italic"}} >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
          </div>
          <div className="col-8" style = {{textAlign : "left"}} >
            <div className = "row" style = {{marginBottom: 20}}>
              <div className="col-4">
                Domain name
              </div>
              <div className="col-8" style = {{textAlign: "right"}}>
                {this.props.auction.name}
              </div>
            </div>
            <div className = "row" style = {{marginBottom: 20}}>
              <div className="col-4">
                Highest bid
              </div>
              <div className="col-8" style = {{textAlign: "right"}}>
                {`${this.props.auction.highestBid} ETH`}
              </div>
            </div>
            <div className = "row"  style = {{marginBottom: 20}}>
              <div className="col-4">
                Bidder
              </div>
              <div className="col-8" style = {{textAlign: "right"}}>
                {this.props.auction.highestBidder}
              </div>
            </div>
            <div className = "row">
              <div className="col-4">
                Time Left
              </div>
              <div className="col-8" style = {{textAlign: "right"}}>
                {this.props.auction.timeLeft} Blocks<br></br>
              <i style = {{color: '#a0a0a0'}}> Approx. 20 h</i>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    )
  }
}
