import React from 'react';
import {Link} from 'react-router-dom';

import {Card,
		Button,
		Row, 
		Col
		} from 'react-materialize';
import Hero from "../Hero";		
import "./style.css"

const SignUp = (props)=> {
	
		return (
			<div>
				<Hero />
				<Row>				
					<Col m={4} offset={'m4'}>
						<Card id ="card1" className='z-depth-4' title='REGISTER'actions={[<Link to = "/" >Go to Log in</Link>]}>	
							<form>
									<label>Email</label><br/>
									<input value = {props.username} onChange = {props.handleChange} name='username' type='email' placeholder = 'example@email.com'/>
									<br />
									<label>Password</label><br/>
									<input name='password' type='password' value = {props.password} onChange = {props.handleChange} />
									<br />
									{/* <button type = 'submit' name = "/auth/signin" onClick = {props.handleSubmit}>Sign In</button> */}
										<Button className="btn waves-effect waves-light z-depth-5" type="submit" name="/auth/signup"  onClick = {props.handleSubmit}>Register
											<i className="material-icons right">send</i>
										</Button>
							</form>
						</Card>
					</Col>
				</Row>	
			</div>
		);
		  
}		 
		 
		 
		
			
		
	







export default SignUp;