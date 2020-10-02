import React from 'react';
import {Button} from "./Button";
import styled from "styled-components";
import {generateMedia} from "styled-media-query";
import {Link} from 'react-router-dom';
import ImgTv from "../../images/tab-tv.png";
import ImgTab from "../../images/tab-tablet.png"
import mac from "../../images/tab-macbook.png";



const Devices = () => {
    return(
<>
<TabContainer>
    <div className="tab_content">
        <div className="tab_top_content">
            <span style={{fontSize:'1.5rem'}} >Watch TV Shows And Movies Anytime, Anywhere - Personalized For You.</span>
            <Link className="btn" to="/plan">     <Button  >   try it now </Button>  </Link>
        </div>
        {/* Tab Bottom Content*/}
<div className="tab_bottom">

    {/*Tv Imge contaciner */}
    <div>
        <img src={ImgTv} alt="tv" className="imagess" />
        <h3>Watch On Your TV</h3>
        <p>Smart Tvs, PlayStation, Xbox, Chromecast, Apple Tv, Ble-ray Players and more.</p>
    </div>

  {/*Tablet Imge contaciner */}
  <div>
        <img src={ImgTab} alt="tv" className="imagess"  />
        <h3>Watch Instantly or download for later</h3>
        <p>Availaible on Your Phone And Tablet Wherever you go</p>
    </div>

      {/*Macbook Imge contaciner */}
      <div>
        <img src={mac} alt="tv" className="imagess"/>
        <h3>Use Any Computer</h3>
        <p>Watch Right On Netflix.com</p>
    </div>

</div>

    </div>
</TabContainer>
</>
    );
}

export default Devices;



// Media Query
const customMedia = generateMedia({
    lgDesktop:'1350px',
    mdDesktop:'1150px',
    tablet:'960px',
    smtablet:'740px',
    mobiles:'400px',
  
  })

//main tab Content




const TabContainer = styled.div`
background:var(--main-deep-dark);

.tab_content{
    margin:0 15%;
}


// Tab Top Content

.tab_top_content{
    display:grid;
    grid-template-columns: repeat(12, 1fr);
    justify-content:center;
    align-item:center;
    padding:2.5rem 0;
    ${customMedia.lessThan('lgDesktop')`
  grid-template-columns:repeat(2, 1fr);

       `
       }
       ${customMedia.lessThan('tablet')`
       grid-template-columns:1fr;
       text-align: center;
       row-gap: 1.5rem;
     
            `
            }


            ${customMedia.lessThan('tablet')`
            grid-template-columns:1fr;
          
                 `
                 }
}

span{
    grid-column: 1 / 8;
    ${customMedia.lessThan("tablet")`
    grid-column: 1 / 10;
    font-size:1.5rem;
    `
}
}

.btn{
    grid-column:9/12;
    margin:0 1.25rem 1.25rem;
    ${customMedia.lessThan("tablet")`
    grid-column: 1 / -1;
   margin-left:20%;
   margin-right:20%;
    `
}

${customMedia.lessThan('mobiles')`
grid-column: 1 / -1;
margin-left:10%;
margin-right:10%;
`
}
}

//Tab Bottom Content

.tab_bottom{
    display:grid;
    grid-template-columns : repeat(3, 1fr);
    grid-gap:2rem;
    text-align:center;
    margin-top:2rem;
    ${customMedia.lessThan("tablet")`
   grid-template-columns:1fr;
    `
}
}

.imagess{
    width:18.75rem;
    ${customMedia.lessThan("mobiles")`
    width:13.75rem;
     `
 }
}

img{
    width:100%;
}

h3{
    margin:0.5rem 0;
}

p{
    color:var(--main-grey);
}

`