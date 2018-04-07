import React from 'react';
import {
    Card
} from 'react-materialize';
import Countdown from '../Countdown';

const Leftfoot = (props) => {
    return(
<div>
    <Card>
    <p> timer should be here
         <Countdown />
    </p>
    </Card>
</div>
    );
}
export default Leftfoot;