import React from 'react';
import Grid from '@material-ui/core/Grid';
import TripImage from '../Resources/trip.png';
import ThumbsUp from '../Resources/like.png';
import AppImage from '../Resources/app.png';

export default function TripContainer() {
	return (
		<div width="1440px" height="750px">
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
												top: '20px',
												right: '-45px'
											}}
										>
											RECOMMEND
										</span>
									</span>
								</Grid>
							</div>
						</Grid>
						<Grid item xs={12} style={{ marginTop: '50px' }}>
							<span
								style={{
									color: '#A9B7B9',
									fontSize: '14px',
									textAlign: '14px',
									fontWeight: '18px',
									fontFamily: 'Montserrat'
								}}
							>
								Live on
							</span>
							<span
								style={{
									position: 'relative',
									left: '400px',
									color: '#A9B7B9',
									fontSize: '14px',
									textAlign: '14px',
									fontWeight: '18px',
									fontFamily: 'Montserrat'
								}}
							>
								Devices
							</span>
							<span style={{ position: 'relative', left: '352px', top: '20px' }}>
								<img width="11px" height="17px" alt="TripImage" src={AppImage} />
								<span
									style={{
										marginRight: '2px',
										marginLeft: '2px',
										fontSize: '14px',
										textAlign: '14px',
										fontWeight: '18px',
										fontFamily: 'Montserrat'
									}}
								>
									or
								</span>
								<img width="11px" height="17px" alt="TripImage" src={AppImage} />
							</span>
							<div>
								<p style={{ fontSize: '24px' }}>
									<span style={{ fontWeight: 'bold' }}>29 June 2020</span> for 60 min
								</p>
							</div>
							<div>
								<span
									style={{
										color: '#A9B7B9',
										fontSize: '14px',
										textAlign: '14px',
										fontWeight: '18px',
										fontFamily: 'Montserrat'
									}}
								>
									Choose Slot
								</span>
								<div style={{ display: 'flex', flexDirection: 'row' }}>
									<div
										style={{
											marginRight: '10px',
											backgroundColor: 'white',
											border: '1px solid #707070',
											borderRadius: '20px',
											textAlign: 'center',
											fontFamily: 'Grandstander',
											fontSize: '14px',
											width: '102px',
											height: '35px',
											topMargin: '20px'
										}}
									>
										<span style={{ color: '#515151', position: 'relative', top: '6px' }}>
											Explorer
										</span>
									</div>
									<div
										style={{
											marginRight: '10px',
											backgroundColor: 'white',
											border: '1px solid #707070',
											borderRadius: '20px',
											textAlign: 'center',
											fontFamily: 'Montserrat',
											fontSize: '14px',
											width: '102px',
											height: '35px',
											topMargin: '20px'
										}}
									>
										<span style={{ color: '#515151', position: 'relative', top: '6px' }}>
											5 PM
										</span>
									</div>
									<div
										style={{
											marginRight: '10px',
											backgroundColor: 'white',
											border: '1px solid #707070',
											borderRadius: '20px',
											textAlign: 'center',
											fontFamily: 'Montserrat',
											fontSize: '14px',
											width: '102px',
											height: '35px',
											topMargin: '20px'
										}}
									>
										<span style={{ color: '#515151', position: 'relative', top: '6px' }}>
											6.30 PM
										</span>
									</div>
								</div>
							</div>
							<br />
							<br />
							<div>
								<span
									style={{
										color: '#A9B7B9',
										fontSize: '14px',
										textAlign: '14px',
										fontWeight: '18px',
										fontFamily: 'Montserrat'
									}}
								>
									Class Fee
								</span>
								<div style={{ display: 'flex', flexDirection: 'row' }}>
									<div
										style={{
											marginRight: '15px',
											backgroundColor: 'white',
											borderRadius: '5px',
											fontFamily: 'Montserrat',
											width: '160px',
											height: '45px',
											boxShadow: '2px 2px 0px #0000001A',
											topMargin: '20px',
											textAlign: 'center'
										}}
									>
										<p>
											<span
												style={{
													color: '#6997A1',
													position: 'relative',
													top: '6px',
													fontSize: '14px',
													textDecoration: 'line-through'
												}}
											>
												INR 120
											</span>
											<span
												style={{
													color: 'black',
													position: 'relative',
													top: '7px',
													fontSize: '18px',
													marginLeft: '3px',
													fontWeight: 'bold'
												}}
											>
												INR 60
											</span>
										</p>
									</div>
									<div>
										<p
											style={{
												marginLeft: '10px',
												textDecoration: 'underline',
												color: '#FF3A58',
												fontSize: '15px',
												fontWeight: '600',
												marginTop: '12px'
											}}
										>
											Earn 100+ Points
										</p>
									</div>
								</div>
								<br />
								<div style={{ display: 'flex', flexDirection: 'row' }}>
									<div
										style={{
											marginRight: '15px',
											backgroundColor: '#FF3A58',
											borderRadius: '5px',
											width: '350px',
											height: '45px',
											border: '1px solid #FF3A58',
											boxShadow: '2px 2px 0px #0000001A',
											topMargin: '20px',
											textAlign: 'center'
										}}
									>
										<p
											style={{
												color: 'white',
												fontFamily: 'Grandstander',
												fontSize: '16px',
												marginTop: '10px',
												fontWeight: 'normal'
											}}
										>
											Book this Class for Free
										</p>
									</div>
									<div
										style={{
											marginRight: '15px',
											backgroundColor: 'white',
											borderRadius: '5px',
											width: '65px',
											height: '45px',
											border: '1px solid #FF3A58',
											boxShadow: '2px 2px 0px #0000001A',
											topMargin: '20px',
											textAlign: 'center'
										}}
									>
										<p
											style={{
												color: '#FF3A58',
												fontFamily: 'Grandstander',
												fontSize: '14px',
												marginTop: '13px',
												fontWeight: 'normal'
											}}
										>
											Share
										</p>
									</div>
								</div>
							</div>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
}
