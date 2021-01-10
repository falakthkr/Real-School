import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	paper: {
		padding: theme.spacing(2)
	}
}));

export default function TripContainer() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Paper className={classes.paper}>
				<Grid container>
                    <Grid item style={{position:"relative",left:"165px",color:"#ADBABD",fontFamily:"Montserrat",fontSize:"15px",textAlign:"left"}}>
                        Home » Goals » Explorer ›
                    </Grid>
                    <Grid item style={{position:"relative",top:"23px",color:"#ADBABD",fontFamily:"Montserrat",fontSize:"15px",textAlign:"left"}}>
                        Trip to the Palace of Versailles
                    </Grid>
				</Grid>
			</Paper>
		</div>
	);
}
