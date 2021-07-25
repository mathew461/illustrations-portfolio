import React from "react";
import './Layout.css';
import styled from 'styled-components';
import { Link } from 'gatsby';

const MenuIcon = styled.button`
  position: fixed;
  top: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;

  div {
    width: 1.5rem;
    height: 0.2rem;
    background: black;
    border-radius: 5px;
    transform-origin: 1px;
  }
`

const MenuLinks = styled.nav`
  display: flex;
  flex.direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  width: 100%;
`

const Wrapper = styled.div

const indexPage = () => {
  return (
    <div>
    <MenuIcon>
      <div />
      <div />
      <div />
    </MenuIcon>
      <MenuLinks>
        <ul>
          <li>
            <Link href="#">Home</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="#">Gallery</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="#">About Me</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="#">Contact Us</Link>
          </li>
        </ul>
      </MenuLinks>
    </div>
  )
}

export default indexPage;