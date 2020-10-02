import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { Icon } from "react-icons-kit";
import { Link } from "react-router-dom";
import { cross } from "react-icons-kit/icomoon/cross";
import { checkmark } from "react-icons-kit/icomoon/checkmark";
import { generateMedia } from "styled-media-query";

const Tabthree = () => {
  return (
    <>
      <TabContainer style={{ background: "black" }}>
        <div className="tab_content">
          <div className="tab-top-content">
            <span style={{ fontSize: "1.5rem" }}>
              {" "}
              Choose One Plan And Watch Everything On Netflix.{" "}
            </span>
            <Link className="btn" to="/plan">
              <Button>try it now</Button>
            </Link>
          </div>

          {/*Tab Bottom Content*/}

          <div className="tab_bottom">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Basic</th>
                  <th>Standard</th>
                  <th>Premium</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="tdshow">Monthly price</td>
                  <td className="tdhide">price</td>
                  <td>$9.99</td>
                  <td>$13.99</td>
                  <td>$17.99</td>
                </tr>
                <tr>
                  <td className="tdshow">HD Availaibility</td>
                  <td className="tdhide">HD</td>
                  <td>
                    <Icon icon={cross} size={10} />
                  </td>
                  <td>
                    <Icon icon={checkmark} size={10} />
                  </td>
                  <td>
                    <Icon icon={checkmark} size={10} />
                  </td>
                </tr>

                <tr>
                  <td className="tdshow">Ultra HD Availaible</td>
                  <td className="tdhide">Ultra HD</td>
                  <td>
                    <Icon icon={cross} size={10} />
                  </td>
                  <td>
                    <Icon icon={cross} size={10} />
                  </td>
                  <td>
                    <Icon icon={checkmark} size={10} />
                  </td>
                </tr>

                <tr>
                  <td className="tdshow">Screens you Can Watch At Same Time</td>
                  <td className="tdhide">Screens</td>
                  <td>1</td>
                  <td>2</td>
                  <td>4</td>
                </tr>

                <tr>
                  <td className="tdshow">
                    Watch On Your Laptop, TV, Phone, Tablet
                  </td>
                  <td className="tdhide">Device</td>
                  <td>
                    <Icon icon={checkmark} size={10} />
                  </td>
                  <td>
                    <Icon icon={checkmark} size={10} />
                  </td>
                  <td>
                    <Icon icon={checkmark} size={10} />
                  </td>
                </tr>

                <tr className="tdshow">
                  <td>Unlimited Movies and TV Show</td>
                  <td className="tdhide">Unlimited</td>
                  <td>
                    <Icon icon={checkmark} size={10} />
                  </td>
                  <td>
                    <Icon icon={checkmark} size={10} />
                  </td>
                  <td>
                    <Icon icon={checkmark} size={10} />
                  </td>
                </tr>

                <tr>
                  <td className="tdshow">Cancel AnyTime</td>
                  <td className="tdhide">Cancel</td>
                  <td>
                    <Icon icon={checkmark} size={10} />
                  </td>
                  <td>
                    <Icon icon={checkmark} size={10} />
                  </td>
                  <td>
                    <Icon icon={checkmark} size={10} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </TabContainer>
    </>
  );
};

export default Tabthree;

// Media Query
const customMedia = generateMedia({
  lgDesktop: "1350px",
  mdDesktop: "1150px",
  tablet: "960px",
  smtablet: "740px",
  mobiles: "500px",
});

const TabContainer = styled.div`
  .tab_content {
    margin: 0 15%;
    padding-bottom: 1%;

    ${customMedia.lessThan("mdDesktop")`
    grid-template-columns:1fr;
    row-gap:1.5rem;
    text-align:center;
    `}
    ${customMedia.lessThan("mobiles")`
margin:0 3%;
 `}
  }

  .tdshow {
    ${customMedia.lessThan("mobiles")`
    display:none;
     `}
  }
  .tdhide {
    display: none;

    ${customMedia.lessThan("mobiles")`
    display:block;
     `}
  }

  .tab-top-content {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    padding: 3rem 0 0;
  }

  span {
    grid-column: 2 / 9;
    ${customMedia.lessThan("mdDesktop")`
    grid-column:1/-1;


    `}
  }

  .btn {
    grid-column: 9/12;
    margin-left: 3rem;
    margin-right: 5rem;
    margin-top: -1.1rem;

    ${customMedia.lessThan("mdDesktop")`
    grid-column:1/-1;
    margin-left:30%;
    margin-right:30%;
    margin-top:2rem;

    `}

    ${customMedia.lessThan("mobiles")`
    grid-column:1/-1;
    margin-left:15%;
    margin-right:15%;
    margin-top:2rem;

    `}
  }

  .tab_bottom {
    margin: 2rem auto;
  }

  //table

  table {
    width: 100%;
    margin-top: 5rem;
    border-collapse: collapse;
  }

  table thead th {
    text-transform: uppercase;
    padding: 0.8rem;

    ${customMedia.lessThan("mobiles")`
   padding:0.4rem;
    `}
  }

  table tbody {
    display: table-row-group;
    verticle-align: middle;
    border-color: inherit;
  }

  table tbody tr td {
    color: #999;
    padding: 0.8rem 1.2rem;
    text-align: center;

    ${customMedia.lessThan("mobiles")`
    padding:0.2rem 0.3rem;
     `}
  }

  table tbody tr td:first-child {
    text-align: left;
  }

  table tbody tr:nth-child(even) {
    background: #222;
  }
`;
