import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Styles from './Styles.jsx'


export default class SideBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menu: {
        list: 'search',
        sell: 'sell',
        faq: 'faq',
      },
    }
  }

  isActive = (url) => { return window.location.href.substring(window.location.href.lastIndexOf("/")+1) === url}

  render() {
    return (
      <div style={{marginTop:5}}>
        <div className = "row" style = {{width : '100%'}}>
          <div className = "col-3"></div>
                <SideBarEntry icon = "search" name = {this.state.menu.list} to = "/list" active = {this.isActive("list")} />
                <SideBarEntry icon = "list" name = {this.state.menu.sell} to = "/sell" active = {this.isActive("sell")} />
                <SideBarEntry icon = "people" name = {this.state.menu.faq} to = "/faq"  active = {this.isActive("faq")} />
          <div className = "col-4"></div>
        </div>
        <hr style = {{backgroundColor : Styles.palette.primary1Color, marginTop:-1}}></hr>
        </div>
    )
  }
}

const SideBarEntry = ({to, icon, icon2, name, active, style}) => {
    return (
      <div className="col-2">
      <Link to={to} style = {{color: "#ffffff"}}>
        <div className={` ${active ? "active" : "list-group-item"}`} style={{textAlign:"center"}}>
            <div style = {{display: "inline", marginRight: 8}}>
              <i className = "material-icons" style = {{float: "left",color: Styles.palette.alternateTextColor, paddingTop:0, fontSize: 24}}>{icon}</i>
              {name}
            </div>
        </div>
      </Link>
</div>
    )
}
