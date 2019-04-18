/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import styled from 'styled-components';

const Bar = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
border: 2px solid #F05252;
box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
margin-top: 2em;
padding: 2em 2em;
border-radius: 3px;
background: #F1F8FF
`;

const List = styled.ul`
display: flex;
flex-direction: column;
list-style-type: none;
margin: 0em 2em;
`;

class Footer extends Component {
  render() {
    return (
      <footer>
        <Bar>
          <List>
            <li>
              <strong>Learn</strong>
            </li>
            <li>
              <a href="/">Guides</a>
            </li>
            <li>
              <a href="/">Reference</a>
            </li>
            <li>
              <a href="/">Samples</a>
            </li>
          </List>
          <List>
            <li>
              <strong>Stay Connected</strong>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Youtube</a>
            </li>
            <li>
              <a href="/">Facebook</a>
            </li>
          </List>
          <List>
            <li>
              <strong>Support</strong>
            </li>
            <li>
              <a href="/">Contact Support</a>
            </li>
            <li>
              <a href="/">Live Chat</a>
            </li>
            <li>
              <a href="/">Offices</a>
            </li>
          </List>
        </Bar>
      </footer>
    );
  }
}

export default Footer;
