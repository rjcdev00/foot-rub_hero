import React from 'react';
import {Link} from 'react-router-dom';
import {Card, Row, Col} from 'react-materialize';
import Hero from "../Hero";
// const Home = (props) =>{
// 	return (
// 		<div>
// 			<h1>You REALLY (home index.js) should only see this if you are logged in!</h1>
// 			<p>{props.auth.username}</p>
// 			<button onClick = {props.handleLogout}>Log Out</button>
// 		</div>
// 	);
// }
// import {MediaBox} from 'react-materialize';
// import {Image} from 'react-materialize';

const Home = (props)=> {
	return (
	<div>
		<Hero />
		

		
			
		 <Row>
					 
			<Col m={8} offset={'m2'} className='landing-card'>
		<Card id ="card1"   className='z-depth-2' title='Options'actions={[<Link to = "/signup" >Go to sign up</Link>]}>
		<Col m={8} offset={'m2'} className="option-card">
		<Row   />
		<button onClick = {props.handleLogout}>Log Out</button>{[<Link to = "/tips" >Helpful tips</Link>]}
		</Col>	
		<div>
			<h1>You REALLY (home index.js) should only see this if you are logged in!</h1>
			<p>{props.auth.username}</p>
			
		</div>
		
			
			
		
	
	  </Card>
	  </Col>
	  </Row>


	</div>	
	);
	}



export default Home;