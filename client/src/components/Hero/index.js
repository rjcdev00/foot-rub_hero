import React from 'react';
// import {Link} from 'react-router-dom';
import { Row, Col} from 'react-materialize';
import FootprintsFull from"../../Images/footprintfull.png";
import "./style.css" ;

const Hero = (props)=> {

     
    return (  
        <div>
				
            <Row>
            
                <div id="hero">
                <h1> Footrub Hero </h1>
                <h3> Be someone's hero </h3>
                </div>        
                <Col m={4} offset={'m4'}>
                    <div className= "card-panel">
                        <img className="responsive-img"  id="feet"src={FootprintsFull}alt=" feets that aren't rendering" />
                     </div>
                </Col>
            </Row>
        </div>       
    );
}
   

 
export default Hero;