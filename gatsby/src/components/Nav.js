import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavStyles = styled.nav`
  margin-bottom: 3rem;
  ul {
    margin: 0;
    padding: 0;
    text-align: center;
    list-style: none;
    display: grid;
    grid-template-columns: auto 1fr 1fr 1fr 1fr;
    grid-gap: 2rem;
    align-items: center;
    font-variant: small-caps;
  }
  a {
    font-size: 2.5rem;
    text-decoration: none;
    position: relative;
    &:after {
      content: '';
      border-bottom: 2px solid black;
      left: 50%;
      position: absolute;
      top: 110%;
      transition: all 0.2s ease-in-out;
      width: 0;
    }

    &:hover:after {
      left: 0;
      width: 100%;
    }
    &[aria-current='page'] {
      color: var(--red);
    }
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <ul>
        <li>
          <Link to="/">LOGO</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/faqs">FAQs</Link>
        </li>
        <li>
          <Link to="/ccrs">CCRs</Link>
        </li>
        <li>
          <Link to="/boardMembers">Board Members</Link>
        </li>
      </ul>
    </NavStyles>
  );
}
