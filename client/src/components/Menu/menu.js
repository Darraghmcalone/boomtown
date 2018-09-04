import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { Toolbar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';


const Menu = (props) =>

    <AppBar>
        <Toolbar>
            <IconButton color="inherit" aria-label="Menu">

            </IconButton>
            <Link to="/welcome">
                <Button color="primary">
                </Button>
            </Link>
        </Toolbar>



    </AppBar>

export default withStyles(Menu);