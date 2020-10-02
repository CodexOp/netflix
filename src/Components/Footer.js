import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {Icon} from "react-icons-kit";
import {iosWorld} from 'react-icons-kit/ionicons/iosWorld'
import {arrowSortedDown} from "react-icons-kit/typicons/arrowSortedDown";
import {generateMedia} from "styled-media-query";

const Footer = () => {
   

    const togglea = () => {
        const aaa = document.querySelector('.lang-toggle');
         const blokk = aaa.style.display;
         if (blokk === "block")  {
             aaa.style.display="none";
             
             
         }
         else{
            aaa.style.display="block";
         
         }

    }
    return(<>
  
    <Footermain >
        <span style={{marginLeft:'17%',
    fontSize:'1.125rem'}} ><Link>Questions ? call 820-903-4454</Link></span>
        <div className="footer_col">
            <ul>
            <li><Link>FAQ</Link></li>
            <li><Link>Investor Relation</Link></li>
            <li><Link>Ways To Watch</Link></li>
            <li>corporate Information<Link></Link></li>
            <li><Link>Netflix Orignals</Link></li>
            </ul>
            <ul>
            <li><Link>Help Center</Link></li>
            <li><Link>Jobs</Link></li>
            <li><Link>Terms Of Use</Link></li>
            <li><Link>Contact Us</Link></li>
        
            </ul>

            
            <ul>
            <li><Link>Account</Link></li>
            <li><Link>Reedem Gift Cards</Link></li>
            <li><Link> Privacy</Link></li>
            <li><Link>Speed Test</Link></li>
        
            </ul>

            <ul>
            <li><Link>Media Center</Link></li>
            <li><Link>Buy Gift Cards</Link></li>
            <li><Link> Cookies Preferences</Link></li>
            <li><Link>Legal Notices</Link></li>
        
            </ul>
{/* Button */}
<div onClick={togglea} className="langbtn">
    <Icon icon={iosWorld} size={20} />
  &nbsp;  &nbsp;  English
    <Icon icon={arrowSortedDown} size={20} />

</div>
        </div>
        {/* Toggle Ul Class*/}
        
        <div className="lang-toggle">
            <ul>
               <li> English</li>
            </ul>
            <ul>
            <li>French</li>
            </ul>
        </div>


        <span style={{marginLeft:'17%' , fontSize:'0.9rem' }}>Netflix India</span>
    </Footermain>
    </>);
} 

export default Footer;



// Media Query
const customMedia = generateMedia({
    lgDesktop:'1350px',
    mdDesktop:'1150px',
    tablet:'960px',
    smtablet:'740px',
    mobiles:'450px'
  
  })
//styled footer

const Footermain = styled.footer`
background:var(--main-deep-dark);
padding-top:6rem;
padding-bottom:3rem;
color:#999;

ul{
    ${customMedia.lessThan("mobiles")`
 padding-left:0;
 `}
}
.footer_col{
 width:70%;
 margin:1rem auto 0;
 font-size:0.9rem;
 overflow:auto;
 display:grid;
 grid-template-columns: repeat(4, 1fr);   
 ${customMedia.lessThan("tablet")`
 grid-template-columns:repeat(2, 1fr);
 `}

 ${customMedia.lessThan("mobiles")`
 grid-template-columns:repeat(2, 1fr);
 width:80%;
 margin:0.5rem auto 0;
 `}
}

ul li{
    list-style:none;
    line-height:2.5;

}

a{
    color:#999;
    text-decoration:none;
    &:hover{
        color:white;
        transition:0.2s;
    }

}

.langbtn{
    background:transparent;
    border: 0.9px solid #333;
    padding: 1rem;
    width:9rem;
    margin-top:1rem;
    margin-bottom:1rem;
    margin-left:2rem;
}
//Toggle language contest

.lang-toggle{
    margin:0 0 0 17.1%;
    display:none;
   
    
    
}



.lang-toggless{
    display:none;
   
    
    
}


.lang-toggle ul{
    margin:0;
background:var(--main-deep-dark);
width:9rem;
border:1px solid #333;
text-align:center;

&:hover{
    background: #0085ff;
    color:#fff;
}

}


.lang-toggle ul:last-child{
    margin-bottom:2rem;
}
`

