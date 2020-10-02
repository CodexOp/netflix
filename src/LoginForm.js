import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import fb from "./images/fb-logo.png";
import { generateMedia } from "styled-media-query";
const Form = () => {
  return (
    <>
      <FormContainer>
        <div className="form_container">
          <form>
            <h1>Sign In</h1>
            <div className="input_container">
              <input className="input_empty" type="email" required />
              <label>Email or Phone</label>
            </div>
            <div className="input_container">
              <input className="input_empty" type="password" required />
              <label>password</label>
            </div>
            <div className="input_container">
              <Link to="./mainapp">
                <But type="submit"> Sign In</But>
              </Link>
            </div>
            <label className="checkboxx">
              Remember me
              <input type="checkbox" checked />
              <span className="checkmark"></span>
            </label>
            <Link
              style={{
                listStyle: "none",
                marginLeft: "6.6rem",
                fontSize: "0.9rem",
                textDecoration: "none",
                color: "#828282",
              }}
              to="/"
              className="help"
            >
              Need Help?
            </Link>
            <div className="bottom_form">
              <img src={fb} alt="fb" className="fb" />
              <Link to="/" className="loginfb">
                Login with Facebook
              </Link>
              <br /> <br />
              <span style={{ color: "#999" }}>new to Netflix?</span>&nbsp;
              <Link to="/" className="signup">
                Sign up now
              </Link>
            </div>
          </form>
        </div>
      </FormContainer>
    </>
  );
};

export default Form;

//media query
const customMedia = generateMedia({
  lgDesktop: "1350px",
  mdDesktop: "1150px",
  tablet: "960px",
  smtablet: "740px",
  mobiles: "500px",
});

// form container

const FormContainer = styled.div`
  display: grid;
  justify-content: center;
  position: relative;
  z-index: 5;
  ${customMedia.lessThan("mobiles")`
  background:rgba(0,0,0,0.9);
  `}

  .form_container {
    background: rgba(0, 0, 0, 0.8);
    position: relative;
    width: 28.125rem;
    height: 41.25rem;
    padding: 4rem;
    ${customMedia.lessThan("mobiles")`
    padding: 1rem;
    width:100%;
    background:rgba(0,0,0,0.9);
    `}
  }

  .input_container {
    display: grid;
    grid-template-columns: 1fr;
    margin-top: 1.5rem;
    ${customMedia.lessThan("mobiles")`
    margin-left:25px;
  
     `}
  }

  .input_empty {
    color: #fff;
    background: #333;
    border: 0;
    border-radius: 0.25rem;
    height: 3rem;
    padding: 0.9rem 1.25rem 0;
    ${customMedia.lessThan("mobiles")`
   width:90%;
 
    `}
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
  .loginfb {
    color: #828282;
    font-size: 0.9rem;
    text-decoration: none;
  }

  .bottom_form {
    position: absolute;
    bottom: 0;
    margin-bottom: 4rem;
    ${customMedia.lessThan("mobiles")`
    bottom: 150px;
    left:20%;
  `}
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

//button

const But = styled.button`
  color: #fff;
  background: rgba(229, 9, 20);
  border: none;
  padding: 0.8rem 1.3rem;
  border-radius: 0.125rem;
  font-size: 1rem;
  text-align: center;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
  transition: opacity 0.2s ease-in;
  curson: pointer;
  text-decoration: none;
  margin: 1rem 0;
`;
