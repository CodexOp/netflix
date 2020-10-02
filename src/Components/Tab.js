import React, { useState } from "react";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import TabDoor from "./Tabsnav/TabDoor.js";
import TabsPrice from "./Tabsnav/TabsPrice.js";
import Tabsdevices from "./Tabsnav/Tabsdevices.js";
import "../css/TabsNav.css";
import TabComponent from "./TabComponentone"
import Devices from "./Tabsnav/TabComponentTwo";
import Tabthree from "./Tabsnav/TabComponentthree";

const Tabss = () => {
    const [state, setState] = useState(0);
const clicked =() => {
    setState(1);
}

const clicked2tab =() => {
    setState(2);
}


const clicked1 =() => {
    setState(0);
}
    
    return(
               <Tabs className="tabs"  >
                   <TabList className="tabs_nav_container"  >
                       <Tab onClick={clicked1} className={ `${state===0 ? 'active tab-selected' :null}`}>  <TabDoor />
                       <p className="intro" ><strong>No Commitments <br /> cancel order at anytime  </strong> </p> 
                       <span className="middleScreen" style={{marginTop:"0.4rem"}}>Cancel</span>
                       </Tab>
                       <Tab onClick={clicked}  className={ `${state===1 ? 'active tab-selected ' :null}`}>  <Tabsdevices />
                       <p className="intro" style={{marginTop:"-5rem"}}><strong>Watch anywhere</strong> </p>  
                       <span className="middleScreen" style={{marginTop:"-5.3rem"}} >Devices</span>
                       </Tab>
                       <Tab onClick={clicked2tab} className={ `${state===2 ? 'active tab-selected ' :null}`}> <TabsPrice />
                        <p className="intro" ><strong>pick your price</strong> </p> 
                        <span className="middleScreen" style={{marginTop:"0.4rem" }}>Price</span>
                        </Tab>
                   </TabList>

                                              {/* Tabs Content */}
<TabPanel>
<TabComponent />
</TabPanel>
<TabPanel>
<Devices />

</TabPanel>

<TabPanel>
<Tabthree />

</TabPanel>

               </Tabs>
    );
}

export default Tabss;