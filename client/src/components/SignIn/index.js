import React from 'react';
import {Link} from 'react-router-dom';
import {Card, Row, Button, Col} from 'react-materialize';
// import Leftfoot from '../Leftfoot';
import Hero from "../Hero";
import "./style.css";
// import {MediaBox} from 'react-materialize';
// import {Image} from 'react-materialize';

const SignIn = (props)=> {
	
	return (
		<div>
			<Hero />
			
		  		

				 <Row>
					<Col m={4} offset={'m4'}>
					 	<Card id='card1' className='z-depth-2' title="LOG IN" actions={[<Link to = '/SignUp' > Register </Link>]}>
							<form>
								<label>Email</label><br/>
								<input value = {props.username} onChange = {props.handleChange} name='username' type='email' placeholder = 'example@email.com'/>
								<br />
								<label>Password</label><br/>
								<input name='password' type='password' value = {props.password} onChange = {props.handleChange} />
								<br />
									<Button className="btn waves-effect waves-light z-depth-5" type="submit" name="/auth/signin"  onClick = {props.handleSubmit}>Log in 
   										<i className="material-icons right">send</i>
  									</Button>
							</form>	
   						</Card>
  
   					</Col>
    			</Row>

		</div> 
	);
}


export default SignIn;