import React from 'react';
import {Link} from 'react-router-dom';

import {Card,  Button, Row, Col} from 'react-materialize';
import "./style.css"

const SignUp = (props)=> {
	
		return (
			<div className= "container" id= "signUpCont">
				
			 <Row>
				 
			 <div id="hero">
				<h1> Footrub Hero </h1>
				<h3> Be someone's hero </h3>
				<img src={'footprints.jpg'} />
		 	</div>
			 
			 <Col m={6} offset={'m3'}>
			 <div className= "card-panel">
			<img className="responsive-img" src={"../Images/both-feet.png"} alt=" feets that aren't rendering" />
			 </div>
			 </Col>
			 </Row>
				 
	
				<Row>				
				<Col m={4} offset={'m4'}>
			<Card id ="card1" className='z-depth-2' title='REGISTER'actions={[<Link to = "/" >Go to Log in</Link>]}>	
			
			
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
		  {/* </Col> */}
		
		</div>	
		);
	


}




export default SignUp;