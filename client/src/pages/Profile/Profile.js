import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import styles from './styles'

const Profile = ({ classes }) => {
  return (
    <Grid>
      <div>
        <p>
          This is the profile page located at <code>/profile/:userId</code>.
      </p>
      </div>

      <Typography variant="display4" className={classes.headline}>
        Profile Page
    </Typography>

    </Grid>
  )
}

export default withStyles(styles)(Profile)
