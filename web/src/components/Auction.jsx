import React, { Component } from 'react'
import RaisedButton from "material-ui/RaisedButton"
import TextField from "material-ui/TextField"
import DatePicker from "material-ui/DatePicker"
import Styles from './Styles.jsx'
import StatusBadge from './StatusBadge'

import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';

export default class Auction extends Component {
  constructor(props){
    super(props)
    this.state = {
      stepIndex: parseInt(props.auction.state,10),
      startingBid : "",
      immediateSell: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    this.setState({ [name]: value})
  }

  render() {
    const contentStyle = {margin: '0 16px'};

    return (
      <div style={{width: '100%', maxWidth: 800, margin: 'auto'}}>
        <Stepper activeStep={this.state.stepIndex}>
          <Step >
            <StepLabel style={{color: Styles.palette.textColor}}
              icon = {this.state.stepIndex === 0 ?
                <StatusBadge
                  state = {"0"}
                  color = {Styles.palette.textColor}
                  backgroundColor = {Styles.palette.primary1Color}
                  />
                :
                <StatusBadge
                  state = {"-1"}
                  color = {Styles.palette.canvasColor}
                  backgroundColor = {Styles.palette.primary1Color}
                  />}>
              List your domain
            </StepLabel>
          </Step>
          <Step>
            <StepLabel style={{color: Styles.palette.textColor}}
              icon = {this.state.stepIndex < 1 ?
                <StatusBadge
                  state = {"1"}
                  color = {Styles.palette.textColor}
                  backgroundColor = "transparent"
                  />
                : this.state.stepIndex === 1 ?
                <StatusBadge
                  state = {"1"}
                  color = {Styles.palette.textColor}
                  backgroundColor = {Styles.palette.primary1Color}
                  />
                :
                <StatusBadge
                 state = {"-1"}
                 color = {Styles.palette.canvasColor}
                 backgroundColor = {Styles.palette.primary1Color}
                 />
               }>
              Transfer your domain
            </StepLabel>
          </Step>
          <Step>
            <StepLabel style={{color: Styles.palette.textColor}}
              icon = {this.state.stepIndex < 2 ?
                <StatusBadge
                  state = {"2"}
                  color = {Styles.palette.textColor}
                  backgroundColor = "transparent"
                  />
                : this.state.stepIndex === 2 ?
                <StatusBadge
                  state = {"2"}
                  color = {Styles.palette.textColor}
                  backgroundColor = {Styles.palette.primary1Color}
                  />
                :
                <StatusBadge
                 state = {"-1"}
                 color = {Styles.palette.canvasColor}
                 backgroundColor = {Styles.palette.primary1Color}
                 />
                }>
              Auction running
            </StepLabel>
          </Step>
          <Step>
            <StepLabel style={{color: Styles.palette.textColor}}
              icon = {this.state.stepIndex < 3 ?
                <StatusBadge
                  state = {"3"}
                      color = {Styles.palette.textColor}
                      backgroundColor = "transparent"
                      />
                : this.state.stepIndex === 3 ?
                <StatusBadge
                  state = {"3"}
                  color = {Styles.palette.textColor}
                  backgroundColor = {Styles.palette.primary1Color}
                  />
                :
                <StatusBadge
                 state = {"-1"}
                 color = {Styles.palette.canvasColor}
                 backgroundColor = {Styles.palette.primary1Color}
                 />
                }>
              Auction ended
            </StepLabel>
          </Step>
        </Stepper>
        <div style={contentStyle}>
          {
             (this.state.stepIndex === 0) ?
              <div className="row">
                  <div className="col-4" style = {{textAlign : "left", fontStyle : "italic"}} >
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  </div>
                  <div className="col-8" style = {{textAlign : "left"}} >
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
              </div>
              :
              (this.state.stepIndex === 1) ?
              <div className="row">
                  <div className="col-4" style = {{textAlign : "left", fontStyle : "italic"}} >
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  </div>
                  <div className="col-8">
                    <div className = "row">
                      <div className="col-4">
                        Domain name
                      </div>
                      <div className="col-8" style = {{textAlign: "right"}}>
                        {this.props.auction.name}
                      </div>
                    </div>
                    <div className = "row" style = {{ height: "100%"}}>
                      <div className="col" style = {{ display: "table", height: "100%"  }}>
                        <div style = {{display: "table-cell",verticalAlign: 'middle', textAlign: "center"}}>
                        <RaisedButton
                          primary = {true}
                          fullWidth = {true}
                          label = "transfer your domain"
                        /></div>
                      </div>
                    </div>
                  </div>
              </div>
              :
              (this.state.stepIndex === 2) ?
                <div className="row">
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
                </div>
              :
              <div className="row">
                <div className="col-4" style = {{textAlign : "left", fontStyle : "italic"}} >
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                </div>
                <div className = "col-8">
                  <div className = "row" style = {{marginBottom: 20}}>
                    <div className="col-4">
                      Domain name
                    </div>
                    <div className="col-8" style = {{textAlign: "right"}}>
                      {this.props.auction.name}
                    </div>
                  </div>
                  <div className = "row" style = {{marginBottom: 20}}>
                    <div className="col-6" style = {{textAlign : "left"}}>
                      You sold your domain for
                    </div>
                    <div className="col-6" style = {{textAlign: "right"}}>
                      {`${this.props.auction.price} ETH`}
                    </div>
                  </div>
                  <div className = "row">
                    <div className="col-6" style = {{textAlign : "left"}}>
                      Buyer
                    </div>
                    <div className="col-6" style = {{textAlign : "right"}}>
                      {this.props.auction.buyer}
                    </div>
                  </div>
                </div>
              </div>
            }
        </div>
      </div>
    );
  }
}
