import React, { Component } from 'react'

import TextField from 'material-ui/TextField'
import Styles from './Styles.jsx'


export default class Search extends Component {


  constructor(props){
    super(props)
    this.state ={
      search : "",
      address : "",
      errorText :"",
      owner : "",

      auctions:[
        {name : "abcd", price: "112", bidder: "ddd", timeLeft: "12"},
        {name : "w", price: "112", bidder: "ddd", timeLeft: "12"},
        {name : "dkasd", price: "112", bidder: "ddd", timeLeft: "12"},
        {name : "dasdsa", price: "112", bidder: "ddd", timeLeft: "12"},
        {name : "99daqdas", price: "112", bidder: "ddd", timeLeft: "12"}
      ]
    }
    this.handleChange = this.handleChange.bind(this)
    this.lookup = this.lookup.bind(this)
  }

  handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    this.setState({ [name]: value})
    this.lookup(value)
  }

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

  render(){
    return (
      <div className = "container">
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
        <hr style = {{backgroundColor : Styles.palette.disabledColor, marginTop: 20, marginBottom: 20}}></hr>
        <div className = "row">
            <div className = "col"/>
            <div className = "col-2" style = {{color : Styles.palette.disabledColor, textAlign: "center"}}>Name</div>
            <div className = "col-2" style = {{color : Styles.palette.disabledColor, textAlign: "center"}}>Price</div>
            <div className = "col-2" style = {{color : Styles.palette.disabledColor, textAlign: "center"}}>Time left</div>
            <div className = "col"/>
        </div>
        <div className = "row" style = {{marginTop: 30}}>
          {this.state.auctions.map(auction =>
            <div className = "col-3" key = {auction.name} style = {{padding:10}}>
              <div style =  {{  borderStyle: 'solid',
                                padding: 5,
                                borderWidth: '3px',
                                borderColor: Styles.palette.primary1Color}}
              >
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
          )}
        </div>
      </div>
    )
  }



}
