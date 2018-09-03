import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import { Form, Field } from 'react-final-form'
import shareformstyles from './styles';
import validate from './helpers/validation';
import TextField from '@material-ui/core/TextField';
import Checkboxes from '../ShareItemForm/checkboxes'
import styles from './styles';

class ShareItemForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formToggle: true,
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid
      container spacing={24}
        direction="column"

      >
        <FormControl container spacing={24}>
          <Button
            size="large"
            color="yellow">
            SELECT AN IMAGE
          </Button>
          <InputLabel htmlFor="name">Name Your Item</InputLabel>
          <Field
          padding="200"
            render={({ input, meta }) => (
              <Input
                id="product-name"
                type="name"
                inputProps={{
                  autoComplete: 'off'
                }}
                value={''}
              />
            )}
          />
          <form onSubmit={this.handleSubmit}>


            <TextField
              placeholder="describe"
              value={this.state.value}
              onChange={this.handleChange}
            />

          </form>

          <Select>
            <Checkboxes />
          </Select>

          <Button
            size="large"
            color="red">
            Share
          </Button>

        </FormControl>
        <Form>



        </Form>
      </Grid>
    )

  }
}

export default withStyles(styles)(ShareItemForm)
