import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CopyrightFooter from "./CopyrightFooter"

export default function Footer() {

	return (
		<div>
			<AppBar style={{backgroundColor: '#635D5D' }} position="static">
				<Toolbar style={{marginTop:"10px",position: 'relative',left:"165px"}}>
					<Typography variant="h6">
						<img
							align="left"
							alt="Real School Logo"
							width="200px"
							src="https://therealschool.in/public/static/website/realschool/img/logo.png"
						/>
						<br />
						<p
							style={{
								textAlign: 'left',
								fontSize: '12px',
								fontWeight: '300',
								letterSpacing: '1.2px',
								color: 'white',
								fontFamily: 'Montserrat'
							}}
						>
							A product of uFaber Edutech
						</p>
						<p
							width="275px"
							style={{
								fontSize: '14px',
								fontWeight: '300',
								textAlign: 'left',
								color: 'white',
								fontFamily: 'Montserrat'
							}}
						>
							<i class="text-white fas fa-map-marker-alt" /> FF A-006, Art Guild House, Phoenix Market
							City, Kurla, Mumbai - 400070
						</p>
						<p
							style={{
								fontSize: '14px',
								fontWeight: '300',
								textAlign: 'left',
								color: 'white',
								fontFamily: 'Montserrat'
							}}
						>
							<i class="text-white fas fa-phone-square-alt" /> +91 8080 555 766
						</p>
						<p
							style={{
								fontSize: '14px',
								fontWeight: '300',
								textAlign: 'left',
								color: 'white',
								fontFamily: 'Montserrat'
							}}
						>
							<i class="text-white far fa-envelope" /> info@ufaber.com
						</p>
					</Typography>
					<div style={{ marginLeft: '50px' }}>
						<p
							style={{
								textAlign: 'left',
								fontSize: '14px',
								fontWeight: '600',
								color: 'white',
								fontFamily: 'Montserrat'
							}}
						>
							QUICK LINKS
						</p>
						<p
							style={{
								fontSize: '14px',
								fontWeight: '300',
								textAlign: 'left',
								color: 'white',
								fontFamily: 'Montserrat'
							}}
						>
							Teach with Us
						</p>
						<p
							style={{
								fontSize: '14px',
								fontWeight: '300',
								textAlign: 'left',
								color: 'white',
								fontFamily: 'Montserrat'
							}}
						>
							Refer a Friend
						</p>
						<p
							style={{
								fontSize: '14px',
								fontWeight: '300',
								textAlign: 'left',
								color: 'white',
								fontFamily: 'Montserrat'
							}}
						>
							Become an Affiliate
						</p>
					</div>
					<div style={{ marginLeft: '50px' }}>
						<p
							style={{
								fontSize: '14px',
								fontWeight: '300',
								textAlign: 'left',
								color: 'white',
								fontFamily: 'Montserrat'
							}}
						>
							About Us
						</p>
						<p
							style={{
								fontSize: '14px',
								fontWeight: '300',
								textAlign: 'left',
								color: 'white',
								fontFamily: 'Montserrat'
							}}
						>
							FAQs
						</p>
						<p
							style={{
								fontSize: '14px',
								fontWeight: '300',
								textAlign: 'left',
								color: 'white',
								fontFamily: 'Montserrat'
							}}
						>
							Blog
						</p>
						<p
							style={{
								fontSize: '14px',
								fontWeight: '300',
								textAlign: 'left',
								color: 'white',
								fontFamily: 'Montserrat'
							}}
						>
							Privacy Policy
						</p>
					</div>
					<div style={{ marginLeft: '50px' }}>
						<p><i class="text-white fab fa-facebook" style={{fontSize:"x-large",marginLeft:"10px"}}></i>
						<i class="text-white fab fa-instagram" style={{fontSize:"x-large",marginLeft:"10px"}}></i>
						<i class="text-white fab fa-youtube" style={{fontSize:"x-large",marginLeft:"10px"}}></i></p>
						<p>
							<img alt="play store" width="152px" src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" />
							<img alt="app store" width="152px" src="https://denver.fineairportparking.com/wp-content/uploads/2018/07/app-store-1.png" />
						</p>
					</div>
				</Toolbar>
			</AppBar>
			<CopyrightFooter />
		</div>
	);
}
