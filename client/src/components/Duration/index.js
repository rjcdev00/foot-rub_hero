import React from 'react';
import {Button,
        Dropdown,
        NavItem
        }from 'react-materialize';


const Duration = (props)=> {
    return(
        <Dropdown trigger ={
			<Button>Duration</Button>
				}>
					<NavItem>10 Min</NavItem>
					<NavItem>20 Min</NavItem>
        </Dropdown>
    );    
                   
}

export default Duration;