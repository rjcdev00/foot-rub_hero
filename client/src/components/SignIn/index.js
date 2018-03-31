import React from 'react';
import "./style.css";
import {Link} from 'react-router-dom';
import {Card} from 'react-materialize';
import {CardTitle} from 'react-materialize';
import {Row} from 'react-materialize';
import {Col} from 'react-materialize';

const SignIn = (props)=> {

	return (
		<div>
		<Row>
			<Col offset-m= {4} m= {4}  className='landing-card'>  
		<Card className='blue-grey darken-2' textClassName='white-text' title='SIGN IN'actions={[<Link to = "/signup" >Go to sign up</Link>]}>	
		
		
			<form>
				<label>Email</label><br/>
				<input value = {props.username} onChange = {props.handleChange} name='username' type='email' placeholder = 'example@email.com'/>
				<br />
				<label>Password</label><br/>
				<input name='password' type='password' value = {props.password} onChange = {props.handleChange} />
				<br />
				{/* <button type = 'submit' name = "/auth/signin" onClick = {props.handleSubmit}>Sign In</button> */}
				<button className="btn waves-effect waves-light" type="submit" name="/auth/signin"  onClick = {props.handleSubmit}>Sign in 
    <i className="material-icons right">send</i>
  </button>
			</form>
			
		
	
	  </Card>
	  </Col>
	  </Row>
	  {/* </Col> */}
	
	</div>	
	);

}

export default SignIn;