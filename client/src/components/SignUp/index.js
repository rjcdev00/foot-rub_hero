import React from 'react';
import {Link} from 'react-router-dom';
import {Card, Button, Row, Col} from 'react-materialize';

import "./style.css";

const SignUp = (props)=> {

	return (
		<div className="container" id="signUpCont">
		 


		<Row>				
		<Col m={4} offset={'m4'} className='signUp-card'>
	<Card className='blue-grey darken-2' textClassName='white-text' title='SIGN UP'actions={[<Link to = "/" >Go to sign in</Link>]} >	
	
	
		<form>
			<label>Email</label><br/>
			<input value = {props.username} onChange = {props.handleChange} name='username' type='email' placeholder = 'example@email.com'/>
			<br />
			<label>Password</label><br/>
			<input name='password' type='password' value = {props.password} onChange = {props.handleChange} />
			<br />
			{/* <button type = 'submit' name = "/auth/signin" onClick = {props.handleSubmit}>Sign In</button> */}
			<Button className="btn waves-effect waves-light" type="submit" name="/auth/signup"  onClick = {props.handleSubmit}>Sign up 
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