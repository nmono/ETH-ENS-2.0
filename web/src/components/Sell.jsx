import React, { Component } from 'react'
import RaisedButton from "material-ui/RaisedButton"
import TextField from "material-ui/TextField"
import DatePicker from "material-ui/DatePicker"
import Moment from "moment"
import Auction from "./Auction"


export default class Sell extends Component {

  constructor(props){
    super(props)
    this.state = {
      auctions : [
        {NH :1233,
           highesbidder : 122222,
          time : 1111,
           price : 20.1,
           buyer: "ff",
           highestbid : 22,
           name : "LMAA",
           state : 0}

      ]
    }
  }


  render(){
    return (
      <div className = "container">
        <div className = "innerContainer">
          {this.state.auctions.map(auction =>
            <Auction key = {auction.NH} auction={auction}/>
          )}
        </div>
      </div>
    )
  }
}
