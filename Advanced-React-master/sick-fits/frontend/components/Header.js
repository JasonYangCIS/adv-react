import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';

const LogoStyles = styled.h1`
  background: var(--primary);
  font-size: 4rem;
  margin-left: 2rem;
  z-index: 2;
  transform: skew(-7deg);
  text-align: center;

  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
    &:hover {
      color: var(--secondary);
    }
  }
`;

const HeaderStyles = styled.header`
  .bar {
    border-bottom: 10px solid var(--black, black);
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
  }

  .sub-bar {
    display: grid;
    border-bottom: 1px solid var(--black, black);
    grid-template-columns: 1fr auto;
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <div className='bar'>
        <LogoStyles>
          <Link href='/'>Plant Daddy</Link>
        </LogoStyles>
        <Nav />
      </div>
      <div className='sub-bar' />
    </HeaderStyles>
  );
}
