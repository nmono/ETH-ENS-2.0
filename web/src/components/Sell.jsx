import React, { Component } from 'react'
import RaisedButton from "material-ui/RaisedButton"
import TextField from "material-ui/TextField"
import DatePicker from "material-ui/DatePicker"
import Moment from "moment"

import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';

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

class Auction extends Component {
constructor(props){
  super(props)
  this.state = {
    stepIndex: props.auction.state,
    startingBid : "",
    immediateSell: ""
  }
  this.handleChange = this.handleChange.bind(this)
}
  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    this.setState({ [name]: value})
  }

  render() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};

    return (
      <div style={{width: '100%', maxWidth: 800, margin: 'auto'}}>
        <Stepper activeStep={this.state.stepIndex}>
          <Step >
            <StepLabel style={{color:'#ffffff'}}>List your domain</StepLabel>
          </Step>
          <Step>
            <StepLabel style={{color:'#ffffff'}}>Transfer your domain</StepLabel>
          </Step>
          <Step>
            <StepLabel style={{color:'#ffffff'}}>Auction running</StepLabel>
          </Step>
          <Step>
            <StepLabel style={{color:'#ffffff'}}>Auction ended</StepLabel>
          </Step>
        </Stepper>
        <div style={contentStyle}>
          {
             (this.state.stepIndex === 0) ?
              <div className="row">
                  <div className = "col"></div>
                  <div className="col-4" style = {{textAlign : "left", fontStyle : "italic"}} >
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  </div>
                  <div className="col-7" style = {{textAlign : "left"}} >
                    <div className = "row" style = {{marginTop: -30}}>
                      <div className ="col-12" style = {{paddingRight: 10}}>
                    <TextField
                      floatingLabelText="Your domain"
                      name = "domainName"
                      fullWidth = {true}
                      style = {{marginBottom : !this.state.startingBid === "" || isNaN (this.state.startingBid) ? 0 : 31}}
                      errorText = {!this.state.startingBid === "" || isNaN (this.state.startingBid)? "Enter a valid price" :"" }
                      onChange = {this.handleChange}
                    />
                  </div>
                </div>
                <div className = "row"  style = {{marginTop : -20}}>
                  <div className ="col-5">
                    <TextField
                      floatingLabelText="Starting bid"
                      name = "startingBid"
                      fullWidth = {true}
                      onChange = {this.handleChange}
                      value = {this.state.startingBid}
                      style = {{marginBottom : !this.state.startingBid === "" || isNaN (this.state.startingBid) ? 0 : 32}}
                      errorText = {!this.state.startingBid === "" || isNaN (this.state.startingBid)? "Enter a valid price" :"" }
                    />
                </div>
                <div className ="col-1" style = {{marginTop: 37, padding:0, textAlign: "left"}}>ETH </div>
                <div className ="col-5">
                    <TextField
                      floatingLabelText="Selling price"
                      name = "immediateSell"
                      fullWidth = {true}
                      value = {this.state.immediateSell}
                      onChange = {this.handleChange}
                      style = {{marginBottom : !this.state.immediateSell === "" || isNaN (this.state.immediateSell) ? 0 : 32}}
                      errorText = {!this.state.immediateSell === "" || isNaN (this.state.immediateSell) ? "Enter a valid price" :"" }
                    />
                  </div>
                  <div className ="col-1" style  = {{marginTop: 37, paddingLeft:0,textAlign: "right"}}>ETH</div>
                </div>
                <div className = "row" style = {{marginTop : -20}}>
                  <div className ="col-5">
                    <DatePicker
                      name = "endDate"
                      value = {this.state.endDate}
                      fullWidth = {true}
                      floatingLabelText="Auction will end at"
                    />
                  </div>
                  <div className ="col-1"/>
                  <div className ="col-6" style = {{marginTop: 27, paddingLeft: 0, paddingRight:5}}>
                  {(isNaN (this.state.startingBid) || isNaN (this.state.immediateSell) || this.state.immediateSell === "" || this.state.startingBid === "") ? "" :
                    <RaisedButton
                      primary = {true}
                      fullWidth = {true}
                      label = "Start auction"
                    />
                }
                </div>
                </div>
                </div>
                <div className = "col"></div>
              </div>
              :
              (this.state.stepIndex === 1) ?
              <div className="row">
                  <div className = "col"></div>
                  <div className="col-4" style = {{textAlign : "left", fontStyle : "italic"}} >
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  </div>
                  <div className="col-7">
                    <div className = "row" style = {{ top: '35%', position: 'relative'}}
>                      <div className="col-12" >
                        <RaisedButton
                          primary = {true}
                          fullWidth = {true}
                          label = "transfer your domain"
                        />
                      </div>
                    </div>
                  </div>
                  <div className = "col"></div>
              </div>
              :
              (this.state.stepIndex === 2) ?
                <div className="row">
                  <div className = "col"></div>
                  <div className="col-4" style = {{textAlign : "left", fontStyle : "italic"}} >
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    </div>
                  <div className="col-7" style = {{textAlign : "left"}} >
                    <div className = "row" style = {{marginBottom: 20}}>
                      <div className="col-4">
                        Highest bid
                      </div>
                      <div className="col-8" style = {{textAlign: "right"}}>
                        {`${this.props.auction.highestbid} ETH`}
                      </div>
                    </div>
                    <div className = "row"  style = {{marginBottom: 20}}>
                      <div className="col-4">
                        Bidder
                      </div>
                      <div className="col-8" style = {{textAlign: "right"}}>
                        {this.props.auction.highesbidder}
                      </div>
                    </div>
                    <div className = "row">
                      <div className="col-4">
                        Time Left
                      </div>
                      <div className="col-8" style = {{textAlign: "right"}}>
                        20 Blocks<br></br>
                      <i style = {{color: '#a0a0a0'}}> Approx. 20 h</i>
                      </div>
                    </div>
                  </div>
                  <div className = "col"></div>
              </div>
              :
              <div className="row">
                <div className = "col"></div>
                <div className="col-4" style = {{textAlign : "left", fontStyle : "italic"}} >
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                </div>
                <div className = "col-7">
                  <div className = "row">
                    <div className="col-6" style = {{textAlign : "left"}}>
                      You sold your domain for
                    </div>
                    <div className="col-6" style = {{textAlign: "right"}}>
                      {`${this.props.auction.price} ETH`}
                    </div>
                  </div>
                  <div className = "row" style = {{marginTop: 20}}>
                    <div className="col-6" style = {{textAlign : "left"}}>
                      Buyer
                    </div>
                    <div className="col-6" style = {{textAlign : "right"}}>
                      {this.props.auction.buyer}
                    </div>
                  </div>
                </div>
                <div className = "col"></div>
              </div>
          }

            <div>
              <div style={{marginTop: 12}}>
                <RaisedButton
                  label="Back"
                  disabled={stepIndex === 0}
                  onTouchTap={this.handlePrev}
                  style={{marginRight: 12}}
                />
                <RaisedButton
                  label={stepIndex === 2 ? 'Finish' : 'Next'}
                  primary={true}
                  onTouchTap={this.handleNext}
                />
              </div>
            </div>

        </div>
      </div>
    );
  }
}
