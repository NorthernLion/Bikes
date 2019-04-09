import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'

import { getAllBikeStations } from './reducers/BikeStationReducer'
import { tokenLogin } from './reducers/LoginReducer'


import LoginPage from './components/Login/LoginPage'
import RegisterPage from './components/register/RegisterPage'
import Fromto from './components/Journey/Fromto'


class App extends Component {

  componentDidMount() {    
    try {
      const loggedUserJSON = window.localStorage.getItem('bikesLogger')
      if (loggedUserJSON && loggedUserJSON !== '{}') {
        const user = JSON.parse(loggedUserJSON)
        this.props.tokenLogin(user)
      }
    } catch (exception) {
      console.log(exception)
    }
  }

  componentWillReceiveProps(nProps) {
    const userAndToken = {
      user: nProps.user,
      token: nProps.token,
      created: nProps.created
    }
    window.localStorage.setItem('bikesLogger', JSON.stringify(userAndToken))
  }   

  render() {
    const LoadingChecker = () => <div>{this.props.loading === true ? <p>loading lol</p>: <Main />}</div>

    const Main = () => {
      return (
        <main>
          <Switch>            
            <Route path={`/register`} render={() => <RegisterPage />} />
            <Route path={`/`} render={() => <LoginPage />} />
          </Switch>
        </main>
      )
    }

    return (
      <Container>
        {LoadingChecker()}
        <Fromto getAllBikeStations={this.props.getAllBikeStations} />
      </Container>
    )
  }


}

const mapStateToProps = state => {
  return {
    user: state.user.user,
    token: state.user.token,
    loading: state.loading.loading
  }
}

export default withRouter(connect(mapStateToProps, { tokenLogin, getAllBikeStations })(App))
