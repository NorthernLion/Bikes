import { connect } from 'react-redux'
import { createUser } from '../../services/User'
import React from 'react'
import { Form, Input, Button, Grid, Loader } from 'semantic-ui-react'

export class RegisterPage extends React.Component {
  handleSubmit = async e => {
    e.preventDefault()

    if (e.target.password.value !== e.target.passwordA.value) {
      console.log('you goold')
    } else {
      const content = {
        username: e.target.username.value,
        name: e.target.name.value,
        password: e.target.password.value
      }
      console.log(content)
      await this.props.createUser(content)
    }
  }

  render() {
    return (
      <div className="RegisterPage">
        <Loader active={this.props.loading.loading} inline="centered" />

        <Grid>
          <Grid.Row centered>
            <h3>Register to service here </h3>
          </Grid.Row>
        </Grid>

        <Grid>
          <Grid.Row centered>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group inline>
                <label style={{ width: '75px' }}>Username</label>
                <Input type="text" name="username" icon="user" required="true" iconPosition="left" style={{ minWidth: '25em' }} placeholder="Your username" className="form-control1" />
              </Form.Group>

              <Form.Group inline>
                <label style={{ width: '75px' }}>Real name</label>
                <Input type="text" name="name" icon="user" required="true" iconPosition="left" style={{ minWidth: '25em' }} placeholder="Your real name" className="form-control2" />
              </Form.Group>

              <Form.Group inline>
                <label style={{ width: '75px' }}>Password</label>
                <Input type="password" name="password" required="true" icon="lock" iconPosition="left" style={{ minWidth: '25em' }} placeholder="Your password" className="form-control3" />
              </Form.Group>

              <Form.Group inline>
                <label style={{ width: '75px' }}>Password Again</label>
                <Input type="password" name="passwordA" required="true" icon="lock" iconPosition="left" style={{ minWidth: '25em' }} placeholder="Your password again" className="form-control4" />
              </Form.Group>

              <Form.Group>
                <Button type="submit" color="blue">
                  Register
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
  createUser
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterPage)