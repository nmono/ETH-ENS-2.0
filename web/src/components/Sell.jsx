import React, { Component } from 'react'
import RaisedButton from "material-ui/RaisedButton"
import TextField from "material-ui/TextField"
import DatePicker from "material-ui/DatePicker"


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
    finished: false,
    stepIndex: props.auction.state,
  }
}
  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 3,
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return 'List your domain to sell';
      case 1:
        return 'Transfer your domain';
      case 2:
        return 'Running auction';
      case 3:
          return 'Auction ended';
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }

  render() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};

    return (
      <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
        <Stepper activeStep={this.state.stepIndex}>
          <Step >
            <StepLabel style={{color:'#ffffff'}}>List your domain</StepLabel>
          </Step>
          <Step>
            <StepLabel style={{color:'#ffffff'}}>Transfer your domain</StepLabel>
          </Step>
          <Step>
            <StepLabel style={{color:'#ffffff'}}>Running auction</StepLabel>
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
                  <div className="col-6" style = {{textAlign : "left"}} >
                  <TextField
                      floatingLabelText="Your domain"
                      name = "domainName"
                  />
                  <TextField
                    floatingLabelText="Starting bid"
                    name = "startingBid"
                  />
                  <TextField
                    floatingLabelText="Price for immmeditate sell"
                    name = "immediate Sell"
                  />
                <DatePicker
                  name = "date"
                />
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
                  <div className="col-6" style = {{verticalAlign: "middle"}}>
                    <div className = "row">
                      <div className="col-12">
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
                  <div className="col-6" style = {{textAlign : "left"}} >
                    <div className = "row">
                      <div className="col-4">
                        Highest bid
                      </div>
                      <div className="col-8" style = {{textAlign: "right"}}>
                              20
                      </div>
                    </div>
                    <div className = "row">
                      <div className="col-4">
                        Bidder
                      </div>
                      <div className="col-8" style = {{textAlign: "right"}}>
                        LMAA
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
                <div className = "col-6">
                  <div className = "row">
                    <div className="col-4" style = {{textAlign : "left"}}>
                      You sold your domain for
                    </div>
                    <div className="col-8" style = {{textAlign: "right"}}>
                      20 ETH
                    </div>
                  </div>
                </div>
                <div className = "col"></div>
              </div>
          }
          {finished ? (
            <p>
              <a
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  this.setState({stepIndex: 0, finished: false});
                }}
              >
                Click here
              </a> to reset the example.
            </p>
          ) : (
            <div>
              <p>{this.getStepContent(stepIndex)}</p>
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
          )}

        </div>
      </div>
    );
  }
}
