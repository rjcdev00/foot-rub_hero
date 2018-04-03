import React from 'react';
import {Link} from 'react-router-dom';
import {Card, CardTitle, Button, Row, Col} from 'react-materialize';
import "./style.css" 

const Hero = (props)=> {
class Hero extends React.Component {
    render() {
     
 return (

 
    
        <div>
				
        <Row>
            
        <div id="hero">
           <h1> Footrub Hero </h1>
           <h3> Be someone's hero </h3>
        </div>
        
        <Col m={6} offset={'m3'}>
        <div className= "card-panel">
       <img className="responsive-img" src="../Images/both-feet.png" alt=" feets that aren't rendering" />
        </div>
        </Col>
        </Row>
        </div>
        
    
 );
}
   }
  }
export default Hero;