import React, { Component } from 'react'
import FlatButton from 'material-ui/FlatButton'
import Styles from './Styles.jsx'
import Badge from 'material-ui/Badge'

export default class FAQ extends Component {


  render(){
    return (
      <div className = "container">
        <div className = "headline">FAQ</div>
          <div>
            <FlatButton
                    primary = {true}
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
