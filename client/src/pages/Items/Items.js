import { withStyles } from '@material-ui/core/styles'
import React from 'react'
import ItemsContainer from '../../containers/ItemsContainer'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import styles from './styles'
import {connect} from 'react-redux'

const Items = ({ classes }) => {
  return(
  <Grid>      
    <Typography variant="display4" className={classes.headline}>
      Items Page
    </Typography>
  <ItemsContainer>
  {({ itemsData: { items, loading } }) => {
    return loading
      ? (
        <p>Loading...</p>
      )
      : (
        <p>items go here</p>
      );
  }}
</ItemsContainer>

    </Grid>
  );
};
const mapStateToProps = ({ items }) => ({
  items
 });

export default connect(mapStateToProps)(withStyles(styles)(Items));
