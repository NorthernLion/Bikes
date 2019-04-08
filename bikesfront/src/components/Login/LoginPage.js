import { connect } from 'react-redux'
import { login } from '../../services/Login'
import React from 'react'
import { Form, Input, Button, Grid, Loader } from 'semantic-ui-react'
import { ButtonS, InputS} from './LoginStyles'

export class LoginPage extends React.Component {
  handleSubmit = async e => {
    e.preventDefault()

    const content = {
      username: e.target.username.value,
      password: e.target.password.value
    }
    await this.props.login(content)
  }

  render() {
    return (
      <div className="LoginPage">
        <Loader active={this.props.loading.loading} inline="centered" />

        <Grid>
          <Grid.Row centered>
            <h3>Enter your info</h3>
          </Grid.Row>
        </Grid>

        <Grid>
          <Grid.Row centered>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group inline>
                <label style={{ width: '75px' }}>Username</label>
                <Input type="text" name="username" icon="user" required="true" iconPosition="left" style={{ minWidth: '25em' }} placeholder="Your AD-username" className="form-control1" />
              </Form.Group>

              <Form.Group inline>
                <label style={{ width: '75px' }}>Password</label>
                <Input type="password" name="password" required="true" icon="lock" iconPosition="left" style={{ minWidth: '25em' }} placeholder="Your password" className="form-control2" />
              </Form.Group>

              <Form.Group>
                <Button type="submit" color="blue">
                  Login
                </Button>
              </Form.Group>
            </Form>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    user: state.user,
    loading: state.loading
  }
}

const mapDispatchToProps = {
  login
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage)