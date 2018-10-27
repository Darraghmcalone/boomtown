import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { Link } from 'react-router-dom'
import Logo from '../../images/boomtown.svg'
import MenuAppbar from '../../components/MenuAppBar'
import ShareButton from '../../components/ShareButton'
import styles from './styles'


function HeaderNav(props) {
  const { classes } = props
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.barContainer}>
          <Link to="/items">
            <img
              className={classes.logo}
              src={Logo}
              style={{ width: 60, height: 52, marginLeft: -12, marginTop: 5 }}
            />
          </Link>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <ShareButton />
            <MenuAppbar />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default withStyles(styles)(HeaderNav)
