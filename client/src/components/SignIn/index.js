import React from 'react';
import "./style.css";
import {Link} from 'react-router-dom';
import {Card} from 'react-materialize';
import {CardTitle} from 'react-materialize';

const SignIn = (props)=> {

	return (
		<div><Card className='large'
		header={<CardTitle image='./././public/assets/images/foot-print-full.jpg'><h1>SIGN IN</h1></CardTitle>}
		actions={[<a href='#'>This is a Link</a>]}>	<Link to = "/signup" >Go to sign up</Link>
			<form>
				<label>Email</label><br/>
				<input value = {props.username} onChange = {props.handleChange} name='username' type='email' placeholder = 'example@email.com'/>
				<br />
				<label>Password</label><br/>
				<input name='password' type='password' value = {props.password} onChange = {props.handleChange} />
				<br />
				<button type = 'submit' name = "/auth/signin" onClick = {props.handleSubmit}>Sign In</button>
			</form>
		
	
	  </Card>
			
		</div>
	);

}

export default SignIn;