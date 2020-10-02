import React from "react";
import logo from "../svg/logo.svg";
import { NavLink, Link } from "react-router-dom";

import styled from "styled-components";
import "../css/App.css";
import Icon from "react-icons-kit";
import { ic_navigate_next } from "react-icons-kit/md/ic_navigate_next";

import { generateMedia } from "styled-media-query";

const Header = () => {
  return (
    <>
      <HeaderComponent className="header_container">
        <div className="header_top">
          <Link to="/">
            <Logo src={logo} alt="netflix logo" />
          </Link>
          <NavLink to="/login" className="signIn_btn">
            Sign In
          </NavLink>
        </div>
        {/* Header Content */}
        <div className="header_content">
          <Title>See What's next.</Title>
          <Subtitle>WATCH ANYWHERE. CANCEL ANYTIME.</Subtitle>
          <Link to="/mainapp">
            <button className="trybtn">
              {" "}
              try it now{" "}
              <Icon className="icons" icon={ic_navigate_next} size={37} />
            </button>
          </Link>
        </div>
        +
      </HeaderComponent>
    </>
  );
};

export default Header;

const customMedia = generateMedia({
  lgDesktop: "1350px",
  mdDesktop: "1150px",
  tablet: "960px",
  smtablet: "740px",
  mobile: "450px",
});

// Header container
const HeaderComponent = styled.div`
  .icons {
    ${customMedia.lessThan("smtablet")`
  display:none!important;
  `}
  }

  .signIn_btn {
    right: 0;
    margin: 1.125rem 3% 0;
    padding: 0.4375rem 1.0625rem;
    font-weight: 400;
    line-height: normal;
    border-radius: 0.1875rem;
    font-size: 1rem;
    background: var(--main-red);
    position: absolute;
    translate: transform(-50%, -50%);
    cursor: pointer;
    transition: background 0.2s ease-in;
    &:hover {
      background: var(--main-red-hover);
    }
    ${customMedia.lessThan("smtablet")`
margin-top:1.25rem;
right:5rem;
`}

    ${customMedia.lessThan("mobile")`
margin-top:1.25rem;
right:1rem;
`}
  }

  a {
    text-decoration: none;
    color: white;
  }

  //Header Top

  .header_top {
    position: relative;
    height: 10rem;
    z-index: 1;
  }

  //Header Content

  .header_content {
    width: 65%;
    position: relative;
    margin: 4.5rem auto 0;
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
    flex-direction: column;
    z-index: 1;

    ${customMedia.lessThan("smtablet")`
  display:grid;
  grid-template-rows: repeat(3, 60px);
  margin-top:4rem;
  `}

    ${customMedia.lessThan("mobile")`
  display:grid;
  grid-template-rows: repeat(3, 60px);
 width:75%;
  `}
  }

  .trybtn {
    display: inline-block;
    color: white;
    background: var(--main-red);
    text-transform: uppercase;
    border: none;
    padding: 1.1rem;
    z-index: 1;
    outline: none;
    margin: 0 33%;
    border-radius: 0.1875rem;
    font-size: 2rem;
    text-align: center;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
    transition: background 0.2s ease-in;
    cursor: pointer;
    &:hover {
      background: var(--main-red-hover);
    }

    ${customMedia.lessThan("lgDesktop")`
  margin:0 33%;
  font-size:1.5rem;
  `}
    ${customMedia.lessThan("mdDesktop")`
  margin:0 25%;
  font-size:1.5rem;
  `}

  ${customMedia.lessThan("smtablet")`
  margin:0 20%;
  font-size:1.2rem;
  `}
  ${customMedia.lessThan("mobile")`
  margin:0 15%;
  font-size:1.0rem;
  `}
  }
`;

//Logo Component
const Logo = styled.img`
  width: 10rem;
  height: 3.5rem;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${customMedia.lessThan("tablet")`
left:20%;
`}
  ${customMedia.lessThan("mobile")`
left:20%;
width:7rem;
height:2.2rem;
`}
`;

//Main title

const Title = styled.h1`
  margin: 0 0 1.2rem;
  font-size: 5rem;
  font-weight: 700;
  line-weight: 1.1rem;
  ${customMedia.lessThan("smtablet")`
font-size:2.3rem;0
`}
  ${customMedia.lessThan("mobile")`
font-size:1.7rem;
`}
`;

//Sub Title

const Subtitle = styled.h2`
  font-weight: 400;
  font-size: 1.875rem;
  line-height: 1.25rem;
  margin: 0 0 1.875rem;
  text-transform: uppercase;
  ${customMedia.lessThan("smtablet")`
font-size:1.4rem;
margin:0;
line-height:1.2;
`}
  ${customMedia.lessThan("mobile")`
font-size:1.3rem;
line-height:1.2;
`}
`;
