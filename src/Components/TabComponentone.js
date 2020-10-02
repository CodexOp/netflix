import React from "react";
import Img from "../images/tab-1-pic.png";
import styled from "styled-components";
import {Link} from "react-router-dom";
import { generateMedia} from "styled-media-query";
import {Button} from "./Tabsnav/Button";
const TabComponent = () => {
return(
    <>
    <TabContentContainer >
        <div className="container">
            <div className="tab_content">
                <div className="mar">
                <span className="title"> If you decide netflix isn't for you, No Problem. No commitment. Cancel Online Anytime
                </span>
                <br />
            <Link  style={{height:'2.5rem', 
            marginTop:'4rem'}} className="buttona" to="/plan">    <Button  style={{height:'2.5rem', 
            marginTop:'4rem'}} > try It now</Button></Link>
             </div>
                <img className="imm" src={Img} alt="tab" />
               
            </div>
        </div>
    </TabContentContainer>
    </>
)
}

export default TabComponent;

// Media Query
const customMedia = generateMedia({
    lgDesktop:'1350px',
    mdDesktop:'1150px',
    tablet:'960px',
    smtablet:'740px'
  
  })
// tab componenet 1
const TabContentContainer = styled.div`
background: var(--main-deep-dark);


img{
    
    width:81%;
    

    ${customMedia.lessThan('smtablet')`
  
 margin:auto;
    `
    }
}

body{
    margin:0;
}
.title{
    margin-top:2rem;
    ${customMedia.lessThan('smtablet')`
    font-size:1.5rem;
    line-height:1;
    `
    }
}




.tab_content{
    display:grid;
    grid-template-columns :repeat(2, 1fr);
    grid-gap:2rem;
    align-item:center;
    font-size:2rem;
    padding:2.5rem;
   


    ${customMedia.lessThan('tablet')`
grid-template-columns:100%;
text-align:center;
padding:right:0;

    `
    }
 }

 .mar{
     margin-top:5rem;
 }



`