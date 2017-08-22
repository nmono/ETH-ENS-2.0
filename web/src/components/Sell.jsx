import React, { Component } from 'react'
import Moment from "moment"
import Auction from "./Auction"
import Styles from './Styles.jsx'
import Pagination from './Pagination'
import Badge from 'material-ui/Badge'
import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/FlatButton'
import Sorter from './Sorter'

import Dialog from 'material-ui/Dialog'
import AddAuction from 'material-ui/svg-icons/content/add-circle-outline';


export default class Sell extends Component {

  constructor(props){
    super(props)
    this.state = {
      page : 0,
      auctions : [
        {NH :1233,
           highesbidder : 122222,
          time : 1111,
           price : 20.1,
           buyer: "ff",
           highestbid : 22,
           name : "LMAA",
           state : "2"},
         {NH :1233,
            highesbidder : 122222,
           time : 1111,
            price : 20.1,
            buyer: "ff",
            highestbid : 22,
            name : "ddd",
            state : "1"},
          {NH :1233,
             highesbidder : 122222,
            time : 1111,
             price : 20.1,
             buyer: "ff",
             highestbid : 22,
             name : "00",
             state : "3"},
           {NH :1233,
              highesbidder : 122222,
             time : 1111,
              price : 20.1,
              buyer: "fddf",
              highestbid : 22,
              name : "333ddd",
              state : "2"}

      ],
      currentAuction: {},
      dialogOpen : false
    }
    this.sortHandler = this.sortHandler.bind(this)
    this.filter = this.filter.bind(this)
  }


   handleOpen = () => {
     this.setState({dialogOpen: true});
   };

   handleClose = () => {
     this.setState({dialogOpen: false});
   };

   sortHandler (dimension, direction) {
     var temp = this.state.auctions.sort(function(a,b) {
       return direction*a[dimension].localeCompare(b[dimension])
     })
     this.setState({auctions : temp})
   }

   filter (current, index){
     return index >= this.state.page * 6 && index < (1 + this.state.page)*6
   }

  render(){
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onClick={this.handleClose}
      />,
    ];
    return (
      <div className = "container">
        <Dialog
            open = {this.state.dialogOpen}
            actions={actions}
            modal={false}
            titleStyle = {{backgroundColor: Styles.palette.primary1Color, padding: 10}}
            onRequestClose={this.handleClose}
          >
        <Auction auction={this.state.currentAuction}/>
       </Dialog>
       <Sorter sortHandler={this.sortHandler}
         includeStatus = {true}/>
       <div className = "row row-eq-height" style = {{marginTop: 20}}>
          <div className = "col-3 " style = {{paddingRight:25, paddingLeft: 25, paddingBottom: 25, cursor: 'pointer'}}
            onClick = {() => {this.setState({currentAuction: {state: 0}, dialogOpen: true})}}
            >
            <div className = "row"  style =  {{  borderStyle: 'solid',
                              padding: 7,
                              paddingRight:20, paddingLeft: 15,
                              borderWidth: '3px',
                              borderColor: Styles.palette.primary1Color}}>
              <div className = "col-3" style = {{padding: 0, textAlign: 'left'}}>
                <AddAuction style = {{marginTop: 8, height:44, width:44, color: Styles.palette.primary1Color}}/>
              </div>
              <div className = "col-9" style = {{padding: 0}}>
                <div style = {{height: "100%", display: "table"}}>
                  <div style = {{color : Styles.palette.disabledColor, fontSize:18, verticalAlign: 'middle', display: "table-cell", textAlign: 'left'}}>Start a new auction</div>
                </div>
              </div>
            </div>
          </div>
          {this.state.auctions.filter(this.filter).map(auction =>
            <div className = "col-3 " key = {auction.name} style = {{paddingRight:25, paddingLeft: 25, paddingBottom: 20,cursor: 'pointer'}}
              onClick = {() => {this.setState({currentAuction: auction, dialogOpen: true})}}
              >
              <div className = "row"  style =  {{  borderStyle: 'solid',
                                padding: 7,
                                paddingRight:20, paddingLeft: 20,
                                borderWidth: '3px',
                                borderColor: Styles.palette.primary1Color}}>
                <div className = "col-3" style = {{padding: 0, textAlign: 'left'}}>
                  <Badge  badgeStyle = {{marginTop: 8, height: 40, width: 40}}
                          badgeContent = {parseInt(auction.state) + 1}   primary = {true}/>
                </div>
                <div className = "col-9" style = {{padding: 0}}>

                  <div style = {{color : Styles.palette.disabledColor}}>{auction.name}</div>
                  <div style = {{fontSize:12}}>
                    <div style={{width: '50%', display: 'inline-block'}}>Current price</div>
                    <div style={{width: '50%', display: 'inline-block', textAlign: "right"}}>{auction.price}</div>
                  </div>
                  <div style = {{fontSize:12}}>
                    <div style={{width: '50%', display: 'inline-block'}}>Time left</div>
                      <div style={{width: '50%', display: 'inline-block', textAlign: "right"}}>{auction.timeLeft}</div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {this.state.auctions.length > 5 ?
            <Pagination pages = {Math.ceil(this.state.auctions.length/6)} page = {this.state.page} />
            : ""
          }
        </div>
      </div>
    )
  }
}
