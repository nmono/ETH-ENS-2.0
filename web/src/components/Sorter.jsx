import SortDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import SortUp from 'material-ui/svg-icons/hardware/keyboard-arrow-up';
import Styles from './Styles.jsx'
import React, { Component } from 'react'
import IconButton from 'material-ui/IconButton'


export default class Sorter extends Component {


  constructor(props){
    super(props)
      this.state ={
        sortMode: (props.includeStatus)? "state1":  "name1",
      }
    }


 sort(dimension, direction){
   this.setState({sortMode: dimension+direction})
   this.props.sortHandler(dimension, direction)
 }


  render(){
    return (
      <div className = "row" style= {{fontSize: 14, textTransform: 'uppercase'}}>
        <div className = "col"/>
        {this.props.includeStatus ?
          <div className = "row col-2">
            <div  style = {{color : Styles.palette.disabledColor, textAlign: "center"}}>
              <div>
                <IconButton style = {{display: 'block',height: 28, width: 28, minWidth : "100%", padding: 0}}
                  iconStyle = {{height: 28, width: 28,
                                color:(this.state.sortMode === "state1")? Styles.palette.disabledColor: Styles.palette.primary1Color }}
                  onClick = {() => this.sort("state", 1)}
                  >
                  <SortUp/>
                </IconButton>
              </div>
              <div>Status</div>
              <div>
                <IconButton style = {{display: 'block',height: 28, width: 28, minWidth : "100%", padding: 0}}
                  iconStyle = {{height: 28, width: 28,
                                color:(this.state.sortMode === "state-1")? Styles.palette.disabledColor: Styles.palette.primary1Color }}
                  onClick = {() => this.sort("state", -1)}
                  >
                  <SortDown/>
                </IconButton>
              </div>
            </div>
          </div>
          : ""}
        <div className = "row col-2">
          <div  style = {{color : Styles.palette.disabledColor, textAlign: "center"}}>
            <div>
              <IconButton style = {{display: 'block',height: 28, width: 28, minWidth : "100%", padding: 0}}
                iconStyle = {{height: 28, width: 28,
                              color:(this.state.sortMode === "name1")? Styles.palette.disabledColor: Styles.palette.primary1Color }}
                onClick = {() => this.sort("name", 1)}
                >
                <SortUp/>
              </IconButton>
            </div>
            <div>Name</div>
            <div>
              <IconButton style = {{display: 'block',height: 28, width: 28, minWidth : "100%", padding: 0}}
                iconStyle = {{height: 28, width: 28,
                              color:(this.state.sortMode === "name-1")? Styles.palette.disabledColor: Styles.palette.primary1Color }}
                onClick = {() => this.sort("name", -1)}
                >
                <SortDown/>
              </IconButton>
            </div>
          </div>
        </div>
        <div className = "row col-2">
          <div  style = {{color : Styles.palette.disabledColor, textAlign: "center"}}>
            <div>
              <IconButton style = {{display: 'block',height: 28, width: 28, minWidth : "100%", padding: 0}}
                iconStyle = {{height: 28, width: 28,
                              color:(this.state.sortMode === "price1")? Styles.palette.disabledColor: Styles.palette.primary1Color }}
                onClick = {() => this.sort("price", 1)}
                >
                <SortUp/>
              </IconButton>
            </div>
            <div>Price</div>
            <div>
              <IconButton style = {{display: 'block',height: 28, width: 28, minWidth : "100%", padding: 0}}
                iconStyle = {{height: 28, width: 28,
                              color:(this.state.sortMode === "price-1")? Styles.palette.disabledColor: Styles.palette.primary1Color }}
                onClick = {() => this.sort("price", -1)}
                >
                <SortDown/>
              </IconButton>
            </div>
          </div>
        </div>
        <div className = "row col-2">
          <div  style = {{color : Styles.palette.disabledColor, textAlign: "center"}}>
            <div>
              <IconButton style = {{display: 'block',height: 28, width: 28, minWidth : "100%", padding: 0}}
                iconStyle = {{height: 28, width: 28,
                              color:(this.state.sortMode === "timeLeft1")? Styles.palette.disabledColor: Styles.palette.primary1Color }}
                onClick = {() => this.sort("timeLeft", 1)}
                >
                <SortUp/>
              </IconButton>
            </div>
            <div>Time left</div>
            <div>
              <IconButton style = {{display: 'block',height: 28, width: 28, minWidth : "100%", padding: 0}}
                iconStyle = {{height: 28, width: 28,
                              color:(this.state.sortMode === "timeLeft-1")? Styles.palette.disabledColor: Styles.palette.primary1Color }}
                onClick = {() => this.sort("timeLeft", -1)}
                >
                <SortDown/>
              </IconButton>
            </div>
          </div>
        </div>
        <div className = "col"/>
    </div>
  )
}
}
