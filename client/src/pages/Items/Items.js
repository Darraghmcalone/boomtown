import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import ItemsContainer from '../../containers/ItemsContainer'
import ItemCard from './../../components/ItemCard'
import styles from './styles'

const Items = ({ classes }) => {
  return (
    <div>

      <Grid
        container
        align="center"
        justify="center"
        className={classes.gridContainer}
      >
        <ItemsContainer>
          {({ itemsData: { items, loading, error } }) => {
            if (loading) return '...loading'
            if (error) return '...error'
            return (
              <div className={classes.itemGrid}>
                   <Grid container spacing={24} className={classes.itemContainer}>
                   {items.map(item => (
                     <Grid item key={item.id} xs={12}
                     sm={6}
                     md={4}
                     lg={4}>
                       <ItemCard item={item} />
                     </Grid>
                   ))}
                 </Grid>
                ))}z
              </div>
            )
          }}
        </ItemsContainer>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(Items)
