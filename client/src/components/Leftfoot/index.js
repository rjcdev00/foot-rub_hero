import React from 'react';
import {
    Card,
    Col,
    Row
} from 'react-materialize';
import './style.css';
import Countdown from '../Countdown';
import Hero from "../Hero";

const Leftfoot = (props) => {
    render(){
        return(
            <div>
                <Hero />
                <Row>
                    <Col m={4} offset={'m4'}>

                        <Card id='card1' className='z-depth-2'>
                            <Countdown />
                    
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }    
}
export default Leftfoot;