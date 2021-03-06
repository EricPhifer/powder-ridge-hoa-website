import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import bg from '../assets/images/bg.png';

const NavStyles = styled.nav`
  margin-bottom: 3rem;
  ul {
    margin: 0;
    padding: 0;
    text-align: center;
    list-style: none;
    display: grid;
    grid-template-columns: auto 1fr 1fr 1fr 1fr;
    gap: 2rem;
    align-items: center;
    font-variant: small-caps;
  }
  .logo {
    width: 9rem;
    height: 7rem;
    background-image: url(${bg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }
  a {
    font-size: 2rem;
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

  @media (max-width: 900px) {
    .logo {
      width: 7rem;
      height: 5rem;
    }
    ul {
      gap: 0.5rem;
    }
    a {
      font-size: 1.75rem;
    }
  }
  @media (max-width: 400px) {
    .logo {
      width: 7rem;
      height: 5rem;
    }
    ul {
      gap: 0;
      line-height: 0.9;
    }
    a {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 374px) and (min-width: 320px) {
    ul {
      gap: 0;
      line-height: 0.7;
    }
    a {
      font-size: 1.2rem;
    }
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <ul>
        <li>
          <Link to="/">
            <div className="logo" />
          </Link>
        </li>
        <li>
          <Link to="/faqs">FAQs</Link>
        </li>
        <li>
          <Link to="/ccrs">CCRs</Link>
        </li>
        <li>
          <Link to="/boardmembers">Board Members</Link>
        </li>
        <li>
          <Link to="/minutes">Board Minutes</Link>
        </li>
      </ul>
    </NavStyles>
  );
}
