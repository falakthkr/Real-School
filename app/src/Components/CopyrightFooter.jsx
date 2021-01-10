import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default function CopyrightFooter() {

	return (
		<div>
			<AppBar style={{backgroundColor: '#5A5555',padding:"2px" }} position="static">
                <Typography style={{fontFamily:"Montserrat", fontSize:"14px",textAlign:"center"}}>© 2019 uFaber, All rights reserved uFaber Edutech</Typography>
			</AppBar>
		</div>
	);
}
