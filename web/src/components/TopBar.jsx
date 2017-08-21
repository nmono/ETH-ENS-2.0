import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Styles from './Styles.jsx'
import logo from '../style/img/clouds.png'


import Sell from 'material-ui/svg-icons/action/list'
import Search from 'material-ui/svg-icons/action/search'


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
        <img src = {logo}/>
        <div className = "row" style = {{width : '100%', marginTop: -48}}>
          <div className = "col-3"></div>
                <TopBarEntry icon = "search" name = {this.state.menu.list} to = "/list" active = {this.isActive("list")} />
                <TopBarEntry icon = "list" name = {this.state.menu.sell} to = "/sell" active = {this.isActive("sell")} />
                <TopBarEntry icon = "people" name = {this.state.menu.faq} to = "/faq"  active = {this.isActive("faq")} />
          <div className = "col-4"></div>
        </div>
        </div>
    )
  }
}

const TopBarEntry = ({to, icon, icon2, name, active, style}) => {
    return (
      <div className="col-2" style={{textAlign: "center", width: 300}}>
      <Link to={to} style = {{color: "#ffffff"}}>
        <div className={` ${active ? "active" : "list-group-item"}`} style={{textAlign:"center"}}>
            <div style = {{display: "inline"}}>
              <i className = "material-icons" style = {{float: "left", color: (active)? 'white' : 'black', paddingTop:0, fontSize: 28}}>{icon}</i>
              {name}
            </div>
        </div>
      </Link>
</div>
    )
}
