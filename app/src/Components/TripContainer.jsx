import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TripImage from '../Resources/trip.png';
import ThumbsUp from '../Resources/like.png';

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
		<div className={classes.root} width="1440px" height="750px">
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
						<Grid
							container
							style={{
								position: 'relative',
								left: '165px',
								fontFamily: 'Montserrat',
								textAlign: 'left',
								width: '500px'
							}}
						>
							<Grid
								item
								xs={12}
								style={{
									color: 'transparent',
									fontSize: '15px'
								}}
							>
								whitespace
							</Grid>
							<Grid item xs={12}>
								<div
									style={{
										float: 'right',
										backgroundColor: '#FDFFD3',
										marginLeft: '50px',
										width: '160px',
										height: '50px',
										border: '1px solid black',
										borderRadius: '5px',
										boxShadow: '1px 1px 0px #00000029',
										padding: '5px'
									}}
								>
									<Grid>
										<img
											width="31px"
											height="34px"
											alt="ThumbsUp"
											style={{ opacity: '1', marginLeft: '5px' }}
											src={ThumbsUp}
										/>
										<span
											style={{
												textAlign: 'left',
												position: 'relative',
												top: '0px',
												left: '15px',
												textTransform: 'uppercase',
												fontFamily: 'Montserrat',
												fontWeight: 'bold',
												fontSize: '18px',
												color: '#333333'
											}}
										>
											125
											<span
												style={{
													textAlign: 'left',
													fontFamily: 'Montserrat',
													fontSize: '10px',
													position: 'absolute',
													top:"20px",
													right:"-45px"
												}}
											>
												RECOMMEND
											</span>
										</span>
									</Grid>
								</div>
							</Grid>
							<Grid item xs={12} style={{ marginTop: '50px' }}>
								<span style={{color:"#A9B7B9",fontSize:"14px",textAlign:"14px",fontWeight:"18px",fontFamily:"Montserrat"}}>Live on</span>
								<div>
									
								</div>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Paper>
		</div>
	);
}
