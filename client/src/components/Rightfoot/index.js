import React from 'react';
// import{ Component } from 'react';
import {
    Card,
    Col,    
    Row
} from 'react-materialize';

import './style.css';
import Rightimg from '../../Images/right.png';



const Righfoot = (props)=> { 
        return(
            <div>
                
                  
                 
                <Row>
                    <Col m={4} offset={'m4'}>

                        <Card id='card1' className='z-depth-2'>
                            {/* <Countdown /> */}
                            <div id='right-img'className='z-depth-4'>
                                     <div id='cursor' className='z-depth-3'>
                                     
                                      </div>
                                      <div id='cursor1' className='z-depth-3'>
                                      
                                      </div>
                                     <img className='responsive-img' id ='right-single' src={ Rightimg }alt='right foot that isnt rendering' />
                               
                            </div>
                     
                        </Card>
                        <Row>
                            <Col m={4} offset={'m4'}> 
                                 <p> TIMER HERE </p>
                            </Col>
                        </Row>    
                    </Col>
                </Row>
            </div>

        );
    } 
   
export default Righfoot;