import { withStyles } from '@material-ui/core/styles'
import React from 'react'
import { ItemsContainer} from './container/itemscontainer'
import styles from './styles'

const Items = ({ classes }) => {
  return(
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
  );
};

export default withStyles(styles)(Items)
