import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import { Form, Field } from 'react-final-form'
import shareformstyles from './styles';
import validate from './helpers/validation';
import TextField from '@material-ui/core/TextField';
import styles from './styles';

class ShareForm extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    formToggle: true
  }

  render() {
    const { classes } = this.props;
    return (

      <Form>
        <TextField
          id="password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          margin="normal"
        />


        <Button
          size="large"
          color="red">

        </Button>


      </Form>

    )

  }
}

export default ShareForm
