import React from 'react';
import {Link} from 'react-router-dom';
import {Card,
		 Row, 
		 Col,
		 Dropdown, 
		 NavItem, 
		 Button,
		 Input
		} from 'react-materialize';
import Hero from "../Hero";
import "./style.css";


const Home = (props)=> {
	return (
		<div>
			<Hero />					
		 	<Row>
					 
				<Col m={6} offset={'m3'} className='landing-card'>
					<Card id ="card1"   className='z-depth-2' title='Options'>
						<Col m={3} offset={'m3'}>
							<Dropdown trigger ={
							<Button>Duration</Button>
									}>								<NavItem>10 Min</NavItem>
									<NavItem>20 Min</NavItem>
							</Dropdown>
						</Col>			
							<Col m={2}>
								{[<Link id='hint-link' to ="/tips"><Button>Setup</Button></Link>]}
							</Col>
						<Row>
							<Col m={6} offset={'m3'}  className="disclaimer">
								<Card>	
									<p id='disclaimerP'>I, {props.auth.username}   understand that massage therapy is not a substitute for medical care and that it is recommended that I work with my primary caregiver for any condition I may have.. </p>

									<Row>
										<Input m={8} offset={'m2'} type='select' label='' icon='weekend' defaultValue='1'>
										<option value='1'>I Agree</option>
										<option value='2'>I Disagree</option>
										</Input>
									</Row>	
											
								</Card>	
							</Col>
						</Row>	 
								  	<Button onClick = {props.handleLogout}>Log Out</Button>
											
					</Card>
				</Col>	
				
			</Row>

			
	</div>	
	);
	}



export default Home;