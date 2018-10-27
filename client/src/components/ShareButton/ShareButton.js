import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import AddIcon from '@material-ui/icons/Add'
import styles from './styles';


function ShareButton(props) {
  const { classes } = props

  return (
    <Link
      to="/share"
      className={classes.link}
    >
      <Button href="#text-buttons" className={classes.button}>
        <AddIcon
           className={classes.addIcon}
        />
        Share Something
      </Button>
    </Link>
  )
}

ShareButton.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ShareButton)
