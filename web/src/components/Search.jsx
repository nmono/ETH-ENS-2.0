import React, { Component } from 'react'

import TextField from 'material-ui/TextField'
import Styles from './Styles.jsx'
import Pagination from './Pagination'
import SortDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import SortUp from 'material-ui/svg-icons/hardware/keyboard-arrow-up';
import IconButton from 'material-ui/IconButton'
import Sorter from './Sorter'
import AuctionDetails from './AuctionDetails'
import Dialog from 'material-ui/Dialog'

export default class Search extends Component {


  constructor(props){
    super(props)
    this.state ={
      search : "",
      page : 0,
      address : "",
      errorText :"",
      owner : "",
      sortMode: "name1",
      currentAuction: {},
      dialogOpen: false,

      auctions:[
        {name : "abcd", highestBid: "112", highestBidder: "ddd", timeLeft: "12"},
        {name : "w", highestBid: "112", highestBidder: "ddd", timeLeft: "12"},
        {name : "abffcd", highestBid: "112", highestBidder: "ddd", timeLeft: "12"},

        {name : "dkasd", highestBid: "112", highestBidder: "ddd", timeLeft: "12"},
        {name : "dasdsa", highestBid: "112", highestBidder: "ddd", timeLeft: "12"},
        {name : "99daqdas", highestBid: "112", highestBidder: "ddd", timeLeft: "12"},
        {name : "99daqdafs", highestBid: "112", highestBidder: "ddd", timeLeft: "12"},
        {name : "ere", highestBid: "112", highestBidder: "ddd", timeLeft: "12"},
        {name : "da", highestBid: "112", highestBidder: "ddd", timeLeft: "12"},
        {name : "fda", highestBid: "112", highestBidder: "ddd", timeLeft: "12"},
        {name : "343fas", highestBid: "112", highestBidder: "ddd", timeLeft: "12"},
        {name : "dasA", highestBid: "112", highestBidder: "ddd", timeLeft: "12"},
        {name : "e3ew", highestBid: "112", highestBidder: "ddd", timeLeft: "12"},
      ]
    }
    this.handleChange = this.handleChange.bind(this)
    this.sortHandler = this.sortHandler.bind(this)
    this.lookup = this.lookup.bind(this)
    this.filter = this.filter.bind(this)
  }

  handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    this.setState({ [name]: value})
    this.lookup(value)
  }

  handleClose = () => {
    this.setState({dialogOpen: false});
  };

  lookup(value){
    var ENS = require('ethereum-ens');
    var ens = new ENS(window.web3);
    var address = ens.resolver(value.trim()).addr().then((addr) => {
      this.setState({address : addr, errorText :""})
    })
    .catch((reason) => {
      this.setState({address : "", errorText : new String(reason), address :""})
    });
    var owner = ens.owner(value.trim()).then((owner) => {
      if (this.state.adress !== "")
        this.setState({owner : owner})
      else
         this.setState({owner : ""}
      )
    })
    .catch((reason) => {});
  }

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
    return (
      <div className = "container">
        <Dialog
            open = {this.state.dialogOpen}
            auction={this.state.currentAuction}
            modal={false}
            titleStyle = {{backgroundColor: Styles.palette.primary1Color, padding: 10}}
            onRequestClose={this.handleClose}
          >
          <AuctionDetails auction={this.state.currentAuction} />
       </Dialog>
        <div className = "row">
          <div className = "col-1">Search</div>
          <div className = "col-3">
            <TextField value={this.state.search} onChange={this.handleChange} name="search"
              hintText = "Search for an ETH-adress"
              errorText={this.state.errorText}></TextField>
          </div>
          <div className = "col-8">
              <div>ETH ADRESS : {this.state.address}</div>
              <div>ETH OWNER : {this.state.owner}</div>
          </div>
        </div>
        <hr style = {{backgroundColor : Styles.palette.disabledColor, marginTop: 20, marginBottom: 10}}></hr>
        <Sorter sortHandler={this.sortHandler}
                includeStatus = {false}/>
        <div className = "row">
          {this.state.auctions.filter(this.filter).map(auction =>
            <div className = "col-3" key = {auction.name} style = {{padding:10, cursor: 'pointer'}}
              onClick = {() => {this.setState({currentAuction: auction, dialogOpen: true})}}
              >
              <div style =  {{  borderStyle: 'solid',
                                padding: 7,
                                paddingRight: 10,
                                paddingLeft: 10,
                                borderWidth: '3px',
                                borderColor: Styles.palette.primary1Color}}
              >
              <div style = {{color : Styles.palette.disabledColor}}>{auction.name}</div>
              <div style = {{fontSize:12}}>
                <div style={{width: '50%', display: 'inline-block'}}>Current price</div>
                <div style={{width: '50%', display: 'inline-block', textAlign: "right"}}>{auction.highestBid}</div>
              </div>
              <div style = {{fontSize:12}}>
                <div style={{width: '50%', display: 'inline-block'}}>Time left</div>
                <div style={{width: '50%', display: 'inline-block', textAlign: "right"}}>{auction.timeLeft}</div>
              </div>
              </div>
            </div>
          )}
          {this.state.auctions.length > 5 ?
            <Pagination pages = {Math.ceil(this.state.auctions.length/6)} page = {this.state.page} jumpTo = {(page) => this.setState({page: page})} />
            : ""
          }
        </div>
      </div>
    )
  }



}
