import React from 'react';
import {Card,
		 Row, 
		 Col,
		 Button,
		 Input
		} from 'react-materialize';
import {Link}from 'react-router-dom'
import Duration from "../Duration";		
import Hero from "../Hero";
import Tips from "../Tips";
// import Timer from "../Timer";

import "./style.css";


const Home = (props)=> {





	return (
		<div>
			<Hero />					
		 	<Row>
					 
				<Col m={6} offset={'m3'} className='landing-card'>
					<Card id ="card1"   className='z-depth-2' title='Options'>
						<Col m={3} offset={'m3'}>
							<Duration />
						</Col>			
							<Col m={2}>
								<Tips />
							</Col>
							
						<Row>
							<Col m={6} offset={'m3'}  className="disclaimer z-index-4">
								<Card>	
									<p id='disclaimerP'>I, {props.auth.username} understand that the information on this App is not a substitute for professional medical advice, diagnosis or treatment. All content, including text, graphics, images and information, contained on or available through this App is for general information purposes only.</p>

									<Row>
										<Input m={8} offset={'m2'} type='select' label='' icon='weekend' defaultValue='1'>
										<option value='1' className="validate" required>I agree</option>
										<option value='2'>I disagree</option>
										</Input>
									</Row>	
											
								</Card>	
								<Button id="session-begin" className='z-depth-3' ><Link to={{pathname: '/Leftfoot'}} id='ses-link'>Begin</Link></Button>
								{' '}
							</Col>
						</Row>	 
								  	<Button onClick = {props.handleLogout}>Log Out</Button>

									  {/* <Timer /> */}
									  
											
					</Card>
				</Col>	
				
			</Row>

		</div>

			
		
	);
	}



export default Home;