import React from 'react';
import Image from '../Resources/student.png';
import Robot from '../Resources/robot.png';
import Footer from "./Footer"

export default class MobileContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div align="left" style={{ backgroundColor: 'white', marginTop: '10px', textAlign: 'center' }}>
				<hr style={{ position: 'relative', left: '165px', width: '1110px' }} />
				<h1 style={{ fontFamily: 'Grandstander', fontSize: '25px' }}>See what our students have created</h1>
				<br />
				<div style={{ display: 'flex', flexDirection: 'row' }}>
					<div>
						<img src={Image} alt="student" style={{ width: '304px', height: '588px', opacity: '0.1' }} />
					</div>
					<div>
						<img src={Image} alt="student" style={{ width: '304px', height: '588px', opacity: '0.1' }} />
					</div>
					<div
						style={{
							position: 'relative',
							top: '-15px',
							border: '10px solid black',
							color: 'white',
							width: '309px',
							height: '631px',
							boxShadow: '5px 5px 0px #00000029',
							borderRadius: '30px',
							zIndex: '2'
						}}
					>
						<img
							src={Robot}
							alt="student"
							style={{
								position: 'relative',
								left: '-5px',
								top: '-5px',
								width: '299px',
								height: '623px',
								borderRadius: '30px',
								zIndex: '1'
							}}
						/>
					</div>
					<div>
						<img src={Image} alt="student" style={{ width: '304px', height: '588px', opacity: '0.1' }} />
					</div>
					<div>
						<img src={Image} alt="student" style={{ width: '304px', height: '588px', opacity: '0.1' }} />
					</div>
				</div>
				<div style={{position:"relative",top:"-45px", backgroundColor: '#635D5D',height:"168px" }}>
					<button style={{marginTop:"60px",width:"160px",height:"45px",backgroundColor:"#FF3A58",boxShadow:"2px 2px 0px #0000001A",border:"1px solid #FF3A58",borderRadius:"5px",color:"white",fontFamily:"Grandstander",fontSize:"14px"}}>Go to RealTV</button>
				</div>
                <Footer />
			</div>
		);
	}
}
