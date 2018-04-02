import React from 'react';
import "./style.css";
import {Link} from 'react-router-dom';
import {Card} from 'react-materialize';
import {Button} from 'react-materialize';
import {Row} from 'react-materialize';
import {Col} from 'react-materialize';

// import {MediaBox} from 'react-materialize';
// import {Image} from 'react-materialize';

const SignIn = (props)=> {

	return (
		<div>
			
		 <Row>
			 <div id="hero">
				<h1> Footrub Hero </h1>
				<h3> Be someone's hero </h3>
		 	</div>
			 
			 <Col m={6} offset={'m3'}>
			 <div className= "card-panel">
			{/* <img className="responsive-img" src="../Images/both-feet.png" alt=" feets that aren't rendering" /> */}
			 </div>
			 </Col>
			 </Row>
			 

			<Row>				
			<Col m={4} offset={'m4'} className='landing-card'>
		<Card id ="card1" title='LOG IN'actions={[<Link to = "/signup" >Go to sign up</Link>]}>	
		
		
			<form>
				<label>Email</label><br/>
				<input value = {props.username} onChange = {props.handleChange} name='username' type='email' placeholder = 'example@email.com'/>
				<br />
				<label>Password</label><br/>
				<input name='password' type='password' value = {props.password} onChange = {props.handleChange} />
				<br />
				{/* <button type = 'submit' name = "/auth/signin" onClick = {props.handleSubmit}>Sign In</button> */}
				<Button className="btn waves-effect waves-light" type="submit" name="/auth/signin"  onClick = {props.handleSubmit}>Log in 
   		<i className="material-icons right">send</i>
  			</Button>
			</form>
			
		
	
	  </Card>
	  </Col>
	  </Row>
	  {/* </Col> */}
	
	</div>	
	);

}

export default SignIn;