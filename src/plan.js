import React from "react";
import Logo from "./svg/logo.svg";
import styled from "styled-components";
import { generateMedia } from "styled-media-query";
import AboutPlan from "./AboutPlan";

const Plan = () => {
  return (
    <>
      <Main>
        <div className="main_login_container">
          <div className="header_top">
            <Logos src={Logo} alt="logo" className="logo" />
          </div>
          <AboutPlan />
        </div>
      </Main>
    </>
  );
};
export default Plan;

// Media Query
const customMedia = generateMedia({
  lgDesktop: "1350px",
  mdDesktop: "1150px",
  tablet: "960px",
  smtablet: "740px",
  mobiles: "450px",
  mobiles1: "500px",
});

//logo
const Logos = styled.img`
  width: 11rem;
  position: absolute;
  top: 25%;
  left: 11%;
  transform: translate(-50%, -50%);
  margin-left: 0;

  ${customMedia.lessThan("mobiles1")`
  width: 9rem;
  position: absolute;
  top: 25%;
  left: 21%;
  transform: translate(-50%, -50%);
  margin-left: 20px;`}

  ${customMedia.lessThan("smtablet")`
  width: 9rem;
  position: absolute;
  top: 25%;
  left: 21%;
  transform: translate(-50%, -50%);
  margin-left: 20px;`}
`;

const Main = styled.div`
  .main_login_container {
    ${customMedia.lessThan("mobiles1")`
    background:rgba(0,0,0,0.9)!important;
    transition: transform 150ms ease-out;`}
`;
