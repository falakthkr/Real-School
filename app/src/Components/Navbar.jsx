import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar style={{backgroundColor:"white"}} position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <i style={{color:"black",fontSize:"x-large"}}  class="fas fa-bars"></i>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <img width="200px" src="https://therealschool.in/public/static/website/realschool/img/logo.png" />
          </Typography>
            <div>
                <AccountCircle style={{color:"black",position:"relative",left:"300px"}} />
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
