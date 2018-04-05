import React from 'react';
import { Button,
         Dropdown,
         NavItem,
         Modal
        } from 'react-materialize';

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
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad   minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip   ex ea commodo consequat. Duis aute irure dolor in reprehenderit in    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur     sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt    mollit anim id est laborum</p>
                    </Modal>
                </NavItem>


                <NavItem divider />
                    <NavItem>
                        <Modal
                                    header='Oils and Lotions'
                            trigger={<NavItem>Oils</NavItem>}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad   minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip   ex ea commodo consequat. Duis aute irure dolor in reprehenderit in    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur     sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt    mollit anim id est laborum</p>
                        </Modal>
                    </NavItem>


                <NavItem divider />
                <NavItem>
                        <Modal
                                    header='Get Comfortable'
                            trigger={<NavItem>Position</NavItem>}>
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