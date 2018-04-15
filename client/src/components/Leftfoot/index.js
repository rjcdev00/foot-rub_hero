import React from 'react';
// import{ Component } from 'react';
import {
    Card,
    Col,
    Row,
    Button
} from 'react-materialize';
import {Link}from 'react-router-dom';
import './style.css';
import Leftimg from '../../Images/left.png';



const Leftfoot = (props)=> {
        return(
            <div>
                {/* <Hero /> */}
                <Row>
                    <Col m={4} offset={'m4'}>

                        <Card id='card1' className='z-depth-2'>
                            {/* <Countdown /> */}
                            <div id='left-img'className='z-depth-4'>
                                     <div id='cursor' className='z-depth-3'>
                                     
                                      </div>
                                      <div id='cursor1' className='z-depth-3'>
                                      
                                      </div>
                                     <img className='responsive-img' id ='left-single' src={Leftimg}alt='left foot that isnt rendering' />
                               
                            </div>
                     
                        </Card>
                        <Row>
                            <Col m={4} offset={'m4'}> 
                                 <p> TIMER HERE </p>
                                 <Button id="session-begin" className='z-depth-3' ><Link to={{pathname: '/Rightfoot'}} id='ses-link'>Begin</Link></Button>
								{' '}
                            </Col>
                        </Row>    
                    </Col>
                </Row>
            </div>
        );
    }    

export default Leftfoot;