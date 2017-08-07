import React, { Component } from 'react'

import TextField from 'material-ui/TextField'



export default class Search extends Component {


  constructor(props){
    super(props)
    this.state ={
      search : "",
      address : "",
      errorText :"",
      owner : ""
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
else   this.setState({owner : ""}
      )
    })
    .catch((reason) => {});

}

  render(){
    return (
      <div className = "container">
        <div className = "headline">SEARCH</div>
        <div style = {{textAlign: "center"}}>
        <TextField value={this.state.search} onChange={this.handleChange} name="search"
          errorText={this.state.errorText}></TextField>
        </div>
          <div style = {{textAlign: "center"}}>ETH ADRESS : {this.state.address}</div>
          <div style = {{textAlign: "center"}}>ETH OWNER : {this.state.owner}</div>
      </div>
    )
  }



}
