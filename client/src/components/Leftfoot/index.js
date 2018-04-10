import React from 'react';
import {
    Card,
    Col,
    Row
} from 'react-materialize';
import './style.css';
import Leftimg from '../../Images/left.png';
// import Timer from '../Timer';

// import Hero from "../Hero";

const Leftfoot = (props) => {
   
        return(
            <div>
                {/* <Hero /> */}
                <Row>
                    <Col m={4} offset={'m4'}>

                        <Card id='card1' className='z-depth-2'>
                            {/* <Countdown /> */}
                            <div id='left-img'className='z-depth-4'>
                                     <div id='cursor'>
                                      </div>
                                     <img className='responsive-img' id ='left-single' src={Leftimg}alt='left foot that isnt rendering' />
                               
                            </div>
                     
                        </Card>
                        <Row>
                            <Col m={4} offset={'m4'}> 
                                 {/* <Timer /> */}
                            </Col>
                        </Row>    
                    </Col>
                </Row>
            </div>
        );
    }    

export default Leftfoot;