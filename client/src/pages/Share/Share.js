import { withStyles } from '@material-ui/core/styles'
import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import styles from './styles'
import ShareItemForm from '../../components/ShareItemForm';

const Share = ({ classes }) => {
  return (
    <Grid
      container
      className={classes.root}
      direction="row"
      alignItems="center"
      justify="center"
    >
      <Typography variant="display4" className={classes.headline}>
          Share. Borrow. Prosper.
        </Typography>
    
        <ShareItemForm>
        </ShareItemForm>
      </Grid>
    


  )
}

export default withStyles(styles)(Share)
