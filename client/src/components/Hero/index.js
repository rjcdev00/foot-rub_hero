import React from 'react';

import {CardPanel,Col, Row } from 'react-materialize';
import FootprintsFull from"../../Images/bothFeet.png";
import "./style.css" ;

const Hero = (props)=> {

     
    return (  
        <div>
				
            <Row>
                <Col m={4} offset={'m4'}>
                    <CardPanel id ="hero-panel" className="z-depth-3">
                        <h1> Footrub Hero </h1>
                        <h4> Be someone's hero </h4>
                        <div id="hero" className='z-depth-4'>
                            <img className="responsive-img"   id="feet"src={FootprintsFull}alt=" feets that aren't rendering" />                
                        </div> 
                    </CardPanel>
                </Col>    
            </Row>       
                
             
        </div>       
    );
}
   

 
export default Hero;