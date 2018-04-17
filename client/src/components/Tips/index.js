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
                                 <hr/>  
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
                            <p>While not required for foot massage (and indeed it is sometimes better without) the use of  warm oils and lotions during your session can be a luxurious treat for the recipient. Use an oil that is safe for topical applications, in most cases oila labeled "food-grade" are safe. Lotions come in a variety of scents choose one you like, avoid any lotions that may contain exfoliating elements.</p>
                        </Modal>
                    </NavItem>


                <NavItem divider />
                <NavItem>
                        <Modal
                                    header='Get Comfortable'
                            trigger={<NavItem>Position</NavItem>}>
                            <img className="responsive-img"   id="position"src={Position}alt=" Getting comfortable" />
                            <p>The best position for performing foot massage is to have the recipient lay face up, with pillows supporting their head, and a bolster or pillows under the knees. Sit at facing them, with their left foot on your right side, and their right foot on your left side. </p>
                        </Modal>
                    </NavItem>
                
                <NavItem divider />
                <NavItem>
                        <Modal
                                    header='Strokes and Pressure'
                            trigger={<NavItem>Strokes</NavItem>}>
                            {

                                <p>
                                    When giving a foot massage the best indicator of how much pressure you should use should always be the comfort of the recipient. Having said that, here are some things to remember:
                                    <ul>
                                        <hr/>
                                        <li>A foot massage must not be vigorous, instead it should involve gentle rubbing around your foot from sole till tip.</li> <hr/>
                                        <li>Sole is the area where you can increase pressure during massage and as you reach top, reduce the amount of pressure.</li><hr/>
                                        <li>Along with straight rubbing, you should move your thumbs in circular motion throughout the heel area.</li><hr/> 
                                        <li>Massage entire feet including special focus on points including heels, ankle bone, foot arch with gentle kneading and rolling technique using your hands.</li><hr/>
                                        <li>Give special attention to your feet toes. Massaging toes would involve gentle pulling of each toe to a point that keeps this practice comfortable for your client. Slip your fingers within the gap between toes and rub the base with your thumbs</li><hr/>
                                        <li>Do not overburden or overwork your hands. Massage is done to release tensed muscles and this could be done well with gentle movement of your hands.</li><hr/>
                                        <li>Do not apply too much pressure as it may cause discomfort or pain and would ruin the pleasing effect of this therapy</li> <hr/>
                                    </ul>    
                                </p>

                            }

                        </Modal>
                    </NavItem>
            
        </Dropdown>
               
    </div>            
                
);


}

export default Tips;