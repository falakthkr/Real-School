import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
	menuButton: {
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(3)
    },
    large: {
        width: theme.spacing(5),
        height: theme.spacing(5),
    }
}));

export default function MenuAppBar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar style={{ backgroundColor: 'white',position:"sticky" }}>
				<Toolbar>
					<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
						<i height="24px" width="24px" style={{ color: 'black' }} class="fas fa-bars" />
					</IconButton>
					<Typography variant="h6" className={classes.title}>
						<img
                            style={{position:"relative",left:"70px",marginRight:"350px"}}
                            alt = "Real School Logo"
							width="200px"
							src="https://therealschool.in/public/static/website/realschool/img/logo.png"
						/>
					</Typography>
                    <Typography style={{color:"black",fontFamily:'Grandstander',fontSize:"large",fontWeight:"bold",marginLeft:"50px"}}>
                        Masterclasses
                    </Typography>
                    <Typography style={{color:"black",fontFamily:'Grandstander',fontSize:"large",fontWeight:"bold",marginLeft:"50px"}}>
                        Programs
                    </Typography>
                    <Typography style={{color:"black",fontFamily:'Grandstander',fontSize:"large",fontWeight:"bold",marginLeft:"50px"}}>
                        Challenges
                    </Typography>
                    <Typography style={{color:"black",fontFamily:'Grandstander',fontSize:"large",fontWeight:"bold",marginLeft:"50px"}}>
                        Library
                    </Typography>
					<div style={{border:"2px solid black",marginLeft:"50px",borderRadius:"40px"}}>
                        <Typography style={{color:"black",fontFamily:'Grandstander',fontSize:"large",fontWeight:"bold"}}>
                            <AccountCircle className={classes.large} style={{ color: 'lightgreen' }} /><span style={{marginRight:"30px"}}>INR 200</span>
                        </Typography>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
}
