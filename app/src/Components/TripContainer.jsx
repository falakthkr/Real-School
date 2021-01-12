import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TripImage from '../Resources/trip.png';

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
					<Grid item xs={6}>
						<Grid
							container
							style={{ position: 'relative', left: '165px', fontFamily: 'Montserrat', textAlign: 'left' }}
						>
							<Grid
								item
								xs={12}
								style={{
									color: '#ADBABD',
									fontSize: '15px'
								}}
							>
								Home » Goals » Explorer ›
							</Grid>
							<Grid
								item
								xs={12}
								style={{
									color: '#333333',
									fontSize: '35px',
									fontWeight: 'bold'
								}}
							>
								Trip to the Palace of Versailles
							</Grid>
							<Grid
								item
								xs={12}
								style={{
									color: '#333333',
									fontSize: '18px',
									fontWeight: 'bold'
								}}
							>
								ONLINE MUSEUM <span style={{ position: 'relative', left: '25px' }}>8+ Years</span>
							</Grid>
							<Grid item xs={12} style={{ marginTop: '22px' }}>
								<img
									width="570px"
									alt="TripImage"
									style={{ borderRadius: '6px', opacity: '1' }}
									src={TripImage}
								/>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={6}>
						<Grid container>
							
						</Grid>
					</Grid>
				</Grid>
			</Paper>
		</div>
	);
}
