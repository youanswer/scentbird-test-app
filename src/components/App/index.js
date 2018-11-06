import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from '~/components/Header'
import Item from '~/components/Item'
import Form from '~/components/Form'
import styles from './index.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className={styles.main}>
          <Switch>
            <Route exact path="/product/:id" component={Item} />
            <Route exact path="/form" component={Form} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
