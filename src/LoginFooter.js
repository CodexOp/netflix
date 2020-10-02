import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { iosWorld } from "react-icons-kit/ionicons/iosWorld";
import { arrowSortedDown } from "react-icons-kit/typicons/arrowSortedDown";
import { generateMedia } from "styled-media-query";

const Footer = () => {
  const togglea = () => {
    const aaa = document.querySelector(".lang-toggle");
    const blokk = aaa.style.display;
    if (blokk === "block") {
      aaa.style.display = "none";
    } else {
      aaa.style.display = "block";
    }
  };
  return (
    <>
      <Footermain>
        <span style={{ marginLeft: "12.5%", fontSize: "1.125rem" }}>
          <Link>Questions ? call 820-903-4454</Link>
        </span>
        <div className="footer_col">
          <ul>
            <li>
              <Link>FAQ</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link>Help Center</Link>
            </li>
          </ul>

          <ul>
            <li>
              <Link>Privacy</Link>
            </li>
          </ul>

          {/* Button */}
          <div onClick={togglea} className="langbtn">
            <Icon icon={iosWorld} size={20} />
            &nbsp; &nbsp; English
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

        <span style={{ marginLeft: "12.5%", fontSize: "0.9rem" }}>
          Netflix India
        </span>
      </Footermain>
    </>
  );
};

export default Footer;

// Media Query
const customMedia = generateMedia({
  lgDesktop: "1350px",
  mdDesktop: "1150px",
  tablet: "960px",
  smtablet: "740px",
  mobiles: "450px",
});
//styled footer

const Footermain = styled.footer`
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
  padding-top: 3rem;
  padding-bottom: 6rem;
  margin-top: 6rem;
  position: relative;
  z-index: 5;
  ${customMedia.lessThan("mobiles")`
 margin-top:0;
 `}

  .footer_col {
    width: 80%;
    margin: 1rem auto 0;
    color: #999;
    font-size: 0.9rem;
    overflow: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    ${customMedia.lessThan("tablet")`
 grid-template-columns:repeat(2, 1fr);
 `}
  }

  ul li {
    list-style: none;
    line-height: 2.5;
  }

  a {
    font-size: 0.9rem;
    color: #999;
    text-decoration: none;
    &:hover {
      color: white;
      transition: 0.2s;
      text-decoration: underline;
    }

    p {
      text-decoratiom: underline;
      cursor: poiter;
    }
  }

  .langbtn {
    background: transparent;
    border: 0.9px solid #333;
    padding: 1rem;
    position: relative;
    width: 9rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left: 2rem;
  }
  //Toggle language contest

  .lang-toggle {
    margin: -13px 0 0 71.9%;
    display: none;
    position: absolute;
  }

  .lang-toggless {
    display: none;
    position: absolute;
  }

  .lang-toggle ul {
    margin: 0;
    background: var(--main-deep-dark);
    width: 9rem;
    border: 1px solid #333;
    text-align: center;

    &:hover {
      background: #0085ff;
      color: #fff;
    }
  }

  .lang-toggle ul:last-child {
    margin-bottom: 2rem;
  }
`;
