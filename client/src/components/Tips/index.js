import React from 'react';
import {Card,Row, Col} from 'react-materialize';

// import {Link} from 'react-router-dom';


const Tips = (props) => {

return (
    <Row>
     	 {/* <div id="hero">
				<h1> Footrub Hero </h1>
				<h3> Be someone's hero </h3>
             </div> */}
            
			
			 
             <Card id="tip-card" className= "z-depth-2" title='Tips'>
			 <Col m={8} offset={'m2'}>
			 <div className= "card-panel">
            {/* <img className="responsive-img" src="../Images/both-feet.png" alt=" feets that aren't rendering" /> */}
            </div>
            </Col>
            </Card>
            
			</Row>
			  
             
);


}

export default Tips;