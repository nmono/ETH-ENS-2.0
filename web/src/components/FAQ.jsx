import React, { Component } from 'react'
import FlatButton from 'material-ui/FlatButton'
import Styles from './Styles.jsx'
import Badge from 'material-ui/Badge'
import Dialog from 'material-ui/Dialog'
import Auction from './Auction'

export default class FAQ extends Component {

 constructor(props){
   super(props)
   this.state = {
     open : false
   }
 }

 handleOpen = () => {
   this.setState({open: true});
 };

 handleClose = () => {
   this.setState({open: false});
 };

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
        <div className = "headline">FAQ</div>
          <Dialog open = {this.state.dialogOpen}
           actions={actions}
           modal={false}
           titleStyle = {{backgroundColor: Styles.palette.primary1Color, padding: 10}}
           open={this.state.open}
           onRequestClose={this.handleClose}
          >
          <Auction auction={  {NH :1233,
               highesbidder : 122222,
              time : 1111,
               price : 20.1,
               buyer: "ff",
               highestbid : 22,
               name : "LMAA",
               state : 0}}/>
           </Dialog>
          <div>
            <FlatButton
                    primary = {true}
                    onClick = {this.handleOpen}
                    label =  {<div style={{fontSize : 16}}>Start a new auction</div>}
                    icon = {<i className = "material-icons" style = {{ color: Styles.palette.disabledColor,
                         paddingTop:0, fontSize: 120, marginTop: 16}}>add</i>}
                    style = {{ width : 200,
                                height : 200,
                                borderStyle: 'solid',
                                borderWidth: '3px',
                                borderColor: Styles.palette.disabledColor
                            }}
            />
        </div>
        <div>
          <div style= {{display: "inline", width: 200}}>
            <div className = "row">
              <div className = "col-2">
                <Badge  badgeStyle = {{height: 30, width: 30}}
                        badgeContent = {"1"}   primary = {true}/>
              </div>
              <div className = "col-6">
                <div style = {{color: Styles.palette.primary1Color}}>
                  adressp
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}
