import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import Grid from '@material-ui/core/Grid'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import { Form, Field } from 'react-final-form'
import styles from './styles'
import validate from './helpers/validation'
import AuthContainer from '../../containers/AuthContainer'

const onSubmit = values => {}
/**
 * @TODO: Uncomment the following lines when authentication is added to the form
 */

class AccountForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formToggle: true
    }
  }

  render() {
    const { classes } = this.props
    return (
      <AuthContainer>
        {({ login, signup, data, loading, error }) => {
          if (loading) {
            return 'loading...'
          }
          if (error) {
            return 'error'
          }
          return (
            <Form
              onSubmit={
                this.state.formToggle
                  ? values => {
                     console.log('client: values:', values)
                      login.mutation({
                        variables: {
                          user: values
                        }
                      })
                    }
                  : values => {
                    console.log('client: values:', values)
                      signup.mutation({
                        variables: {
                          user: values
                        }
                      })
                    }
              }
              validate={validate}
              initialValues={{}}
              render={({     
                handleSubmit,
                pristine,
                values
              }) => (
                <form onSubmit={handleSubmit} className={classes.accountForm}>
                  {!this.state.formToggle && (
                    <FormControl fullWidth className={classes.formControl}>
                      <InputLabel htmlFor="fullname">Username</InputLabel>
                      <Field name="fullname">
                        {({ input, meta }) => (
                          <Input
                            id="fullname"
                            type="text"
                            inputProps={{
                              autoComplete: 'off'
                            }}
                            {...input}
                          />
                        )}
                      </Field>
                    </FormControl>
                  )}
                  <FormControl fullWidth className={classes.formControl}>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Field name="email">
                      {({ input, meta }) => (
                        <Input
                          id="email"
                          type="text"
                          {...input}
                        />
                      )}
                    </Field>
                  </FormControl>
                  <FormControl fullWidth className={classes.formControl}>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Field name="password">
                      {({ input, meta }) => (
                        <Input
                          id="password"
                          type="password"
                          {...input}
                        />
                      )}
                    </Field>
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <Grid
                      container
                      direction="row"
                      justify="space-between"
                      alignItems="center"
                    >
                      <Button
                        type="submit"
                        className={classes.formButton}
                        variant="contained"
                        size="large"
                        color="secondary"
                        disabled={
                          false // @TODO: This prop should depend on pristine or valid state of form
                        }
                      >
                        {this.state.formToggle ? 'Enter' : 'Create Account'}
                      </Button>
                      <Typography>
                        <button
                          className={classes.formToggle}
                          type="button"
                          onClick={() => {
                            this.setState({
                              formToggle: !this.state.formToggle
                            })
                          }}
                        >
                          {this.state.formToggle
                            ? 'Create an account.'
                            : 'Login to existing account.'}
                        </button>
                      </Typography>
                    </Grid>
                  </FormControl>
                </form>
              )}
            />
          )
        }}
      </AuthContainer>
      // @TODO: Close Final Form <Form />
      // @TODO: Close <AuthContainer />
    )
  }
}

export default withStyles(styles)(AccountForm)
