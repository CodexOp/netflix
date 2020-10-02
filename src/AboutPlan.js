import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { generateMedia } from "styled-media-query";
import { Button } from "./Components/Tabsnav/Button";
import CheckmarkLogo from "./images/Checkmark.png";
import { Icon } from "react-icons-kit";
import { ic_done } from "react-icons-kit/md/ic_done";

const AboutPlan = () => {
  return (
    <>
      <FormContainer>
        <div className="form_container">
          <div className="form">
            <img className="imglogo" src={CheckmarkLogo} alt="hy" />
            <span className="step">STEP 1 OF 3</span>
            <h1 className="texxt">Choose Your Plan</h1>
            <div className="input_container">
              <Icon className="rightTick" icon={ic_done} />
              No commitments, cancel anytime.
            </div>
            <div className="input_container">
              <Icon className="rightTick" icon={ic_done} />
              Everything on netflix for one low price,
            </div>
            <div className="input_container">
              <Icon className="rightTick" icon={ic_done} />
              Unlimited viewing on all yours devices.
            </div>
          </div>
          <Link to="./">
            <Button className="but">See The Plans </Button>
          </Link>
        </div>
      </FormContainer>
    </>
  );
};

export default AboutPlan;

// form container

const customMedia = generateMedia({
  lgDesktop: "1350px",
  mdDesktop: "1150px",
  tablet: "960px",
  smtablet: "740px",
  mobiles: "450px",
});

const FormContainer = styled.div`
  display: grid;
  justify-content: center;
  position: relative;
  z-index: 5;
  ${customMedia.lessThan("mobiles")`
  background-color:rgba(0,0,0,0.9)
  `}

  .form_container {
    background: rgba(0, 0, 0, 0.8);
    position: relative;
    width: 28.125rem;
    height: 30.25rem;
    padding: 4rem;
    margin-bottom: 40%;
    ${customMedia.lessThan("mobiles")`
    background-color:rgba(0,0,0,0.9);
    width: 100%;
   
    height: 67vh;
    `}

    .form {
      ${customMedia.lessThan("mobiles")`
    padding:2rem; `}
    }

    .step {
      text-align: center;
      display: block;
      justify-content: center;
      margin-top: 15px;
    }

    .imglogo {
      display: block;
      margin: auto;
      text-align: center;
    }

    .texxt {
      text-align: center;
      font-size: 1.5rem;
      margin-top: 0.5rem;
    }

    .input_empty {
      color: #fff;
      background: #333;
      border: 0;
      border-radius: 0.25rem;
      height: 3rem;
      padding: 0.9rem 1.25rem 0;
    }

    .rightTick {
      display: inline;
      margin-right: 1rem;
      color: red;
    }

    .input_container {
      display: flex;
      justify-content: center;

      margin-top: 1.5rem;
      text-align: left;
      ${customMedia.lessThan("mobiles")`
    margin-left:8%; `}
    }
  }

  form div label {
    position: absolute;
    top: 0.625rem;
    left: 1.25rem;
    ponter-events: none;
    color: #8a8a8a;
    font-size: 1rem;
    transition: transform 150ms ease-out, font-size 150ms ease-out;
  }

  form div {
    position: relative;
  }

  input:focus ~ label {
    top: 0.4374rem;
    font-size: 0.7rem;
  }

  input:focus {
    outline: none;
  }

  //checkbox
  .checkboxx {
    margin-left: 0.75rem;
    padding-left: 1.875rem;
    position: relative;
    font-size: 0.9rem;
    cursor: pointer;
    color: #999;
  }

  .checkboxx input {
    display: none;
  }

  .checkmark {
    display: inline-block;
    background: #454545;
    width: 1.1rem;
    height: 1.1rem;
    left: 0;
    top: 0;
    position: absolute;
    border-radius: 0.1rem;
  }
  .but {
    color: #fff;
    background: rgba(229, 9, 20);
    border: none;
    width: 20rem;

    padding: 0.8rem 1.3rem;
    border-radius: 0.125rem;
    font-size: 1rem;
    text-align: center;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
    transition: opacity 0.2s ease-in;
    curson: pointer;
    text-decoration: none;
    margin: 1rem 0;
    ${customMedia.lessThan("mobiles")`
 width:100%; 
 margin:auto;   `}
  }

  .checkboxx input:checked + .checkmark:after {
    content: "";
    position: absolute;
    height: 0.25rem;
    width: 0.625rem;
    border-left: 2px soid #000;
    border-bottom: 2px solid #000;
    top: 25%;
    left: 21%;
    transform: rotate(-45deg);
  }

  .help {
    color: #828282;
    margin-left: 6.6rem;
    font-size: 0.9rem;
  }
  //bottom form

  .bottom_form img {
    width: 1.5625rem;
    margin: 0.625rem 0.625rem -0.43rem 0;
  }

  .bottom_form {
    position: absolute;
    bottom: 0;
    margin-bottom: 4rem;
  }

  //sign up

  .signup {
    color: white;
    font-size: 1rem;
    &:hover {
      text-decoration: underline;
    }
  }
`;
