import { withStyles } from '@material-ui/core/styles'
import React from 'react'
import ItemsContainer from '../../containers/ItemsContainer'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import styles from './styles'

const Items = ({ classes }) => {
  return(
  <Grid>
  {/* <ItemsContainer>
  {({ itemsData: { items, loading } }) => {
    return loading
      ? (
        <p>Loading...</p>
      )
      : (
        <p>items go here</p>
      );
  }}
</ItemsContainer> */}
      <Typography variant="display4" className={classes.headline}>
      Items Page
    </Typography>
    </Grid>
  );
};

export default withStyles(styles)(Items)
