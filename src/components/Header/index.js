import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'
import styles from './index.css'

class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <NavLink to="/product/1" exact className={styles.item} activeStyle={{ color: 'blue' }}>
          <div className="fw7 mr1">Item</div>
        </NavLink>
        <div className="divider">|</div>
        <NavLink to="/form" exact className={styles.item} activeStyle={{ color: 'blue' }}>
            Form
        </NavLink>
      </div>
    );
  }
}

export default withRouter(Header)
