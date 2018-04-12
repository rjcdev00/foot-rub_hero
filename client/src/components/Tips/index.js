import React from 'react';
import { Button,
         Dropdown,
         NavItem,
         Modal
        } from 'react-materialize';
import Position from"../../Images/massage-bolsters.png"
import "./style.css";
// import {Link} from 'react-router-dom';


const Tips = (props) => {

return (
    <div>
        <Dropdown trigger={
            <Button>Tips</Button>
            }>
                <NavItem> 
                    <Modal
                                    header='Contraindications'
                            trigger={<NavItem>Nopes</NavItem>}>
                            { <p>While generally safe, there are some conditions in which massage is { <b>Absolutely</b>} not in the best interest of the recipient, these conditions include:
                                    <hr/>
                                    <ul>
                                        <li>Fever. </li>
                                        <li>Contagious diseases, including any cold or flu, no matter how mild it may seem. </li>
                                        <li>Recent operations or acute injuries. </li>
                                        <li>Neuritis.</li>
                                        <li>Skin diseases. </li>
                                    </ul> 
                                   
                                There are also conditions specific to the area in which it is recommended you avoid massaging:
                                <hr/>
                                    <ul>
                                        <li>Varicose veins. </li>
                                        <li>Undiagnosed lumps or bumps. </li>                
                                        <li> Bruising, cuts or abrasions.</li>
                                        <li>Sunburn.</li>
                                        <li>Undiagnosed pain. </li>
                                        <li>Inflammation, including arthritis. </li>
                                        <li>Pregnancy. </li>
                                    </ul> 

                                <hr/>
                                <b>In any case, it is recommended you seek the opinion of your healthcare provider before beginning any massage program.</b>
                                <hr/>
                             </p>}
                    </Modal>
                </NavItem>


                <NavItem divider />
                    <NavItem>
                        <Modal
                                    header='Oils and Lotions'
                            trigger={<NavItem>Oils</NavItem>}>
                            <p>While not required for foot massage (and indeed it is sometimes better without) the use of oils and lotions during your session can be a luxurious treat for the recipient. Use an oil that is safe for topical applications, in most cases oila labeled "food-grade" are safe. Lotions come in a variety of scents choose one you like, avoid any lotions that may contain exfoliating elements.</p>
                        </Modal>
                    </NavItem>


                <NavItem divider />
                <NavItem>
                        <Modal
                                    header='Get Comfortable'
                            trigger={<NavItem>Position</NavItem>}>
                            <img className="responsive-img"   id="position"src={Position}alt=" Getting comfortable" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad   minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip   ex ea commodo consequat. Duis aute irure dolor in reprehenderit in    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur     sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt    mollit anim id est laborum</p>
                        </Modal>
                    </NavItem>
                
                <NavItem divider />
                <NavItem>
                        <Modal
                                    header='Strokes and Pressure'
                            trigger={<NavItem>Strokes</NavItem>}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad   minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip   ex ea commodo consequat. Duis aute irure dolor in reprehenderit in    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur     sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt    mollit anim id est laborum</p>
                        </Modal>
                    </NavItem>
            
        </Dropdown>
               
    </div>            
                
);


}

export default Tips;