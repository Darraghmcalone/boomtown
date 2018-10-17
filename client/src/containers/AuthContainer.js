import { adopt } from 'react-adopt'
import { Mutation } from 'react-apollo'
import React from 'react'

import client from '../apollo'

import {
  VIEWER_QUERY,
  LOGIN_MUTATION,
  LOGOUT_MUTATION,
  SIGNUP_MUTATION
} from '../apollo/queries'

const signup = ({ render }) => {
  return (
    <Mutation
      mutation={SIGNUP_MUTATION}
      refetchQueries={result => [{ query: VIEWER_QUERY }]}
    >
      {(mutation, { data, error, loading }) =>
        render({ mutation, data, error, loading })
      }
    </Mutation>
  )
}

const login = ({ render }) => {
  return (
    <Mutation
      mutation={LOGIN_MUTATION}
      refetchQueries={result => [{ query: VIEWER_QUERY }]}
    >
      {(mutation, { data, error, loading }) =>
        render({ mutation, data, error, loading })
      }
    </Mutation>
  )
}

const logout = ({ render }) => {
  /**
   * @TODO: Use Apollo's <Mutation /> component to use the logout mutation.
   */
  return <h1>Logout</h1>
}

const AuthContainer = adopt({
  signup,
  login
})

export default AuthContainer
