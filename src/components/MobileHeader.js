import React, { useState } from "react";
import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'gatsby';

const Global = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
`
const MenuIcon = styled.button`
  position: fixed;
  top: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 5;

  div {
    width: 1.5rem;
    height: 0.2rem;
    background: black;
    border-radius: 5px;
    transform-origin: 1px;
    position: relative;
    transition: opacity 300ms, transform 300ms;

    :first-child {
      transform: ${({nav}) => nav ? 'rotate(45deg)' : 'rotate(0)' } 
    }

    :nth-child(2) {
      opacity: ${({nav}) => nav ? "0" : "1"}
    }
    :nth-child(3) {
      transform: ${({nav}) => nav ? 'rotate(-45deg)' : 'rotate(0)'}
    }
  }
`
const MenuLinks = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  width: 25%;
  transition: transform 300ms; 
  background: #d7d7d7;
  position: absolute;
  top: 0;
  right: 0;
  transform: ${({ nav }) => (nav ? "translateX(0)" : "translateX(100%)")};

  ul {
    list-style-type: none;
  }

  li {
    margin-top: 1rem;
  }

  .linkStyle {
    text-decoration: none;
    color: red;
    font-size: 1.5rem;

    :hover {
      color: blue;
    }
  }
`

const Hamburger = () => {
  const [nav, showNav] = useState(false)

  return (
    <div>
      <Global />
      <MenuIcon nav={nav} onClick={() => showNav(!nav)}>
        <div />
        <div />
        <div />
      </MenuIcon>
      <MenuLinks nav={nav}>
        <ul>
          <li>
            <Link className="linkStyle" href="#">Home</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link className="linkStyle" href="#">Gallery</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link className="linkStyle" href="#">About Me</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link className="linkStyle" href="#">Contact Us</Link>
          </li>
        </ul>
      </MenuLinks>
    </div>
  )
}

export default Hamburger;