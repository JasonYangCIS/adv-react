import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'radnika_next';
  src: url('/static/radnikanext-medium-webfont.woff2')
  format('woff2');
  font-weight: normal;
  font-style: normal;
}

 html {
  --red: var(--primary);
  --primary: #9fb8ad;
  --grey: #3A3A3A;
  --gray: var(--grey);
  --lightGrey: #E1E1E1;
  --lightGray: var(--lightGrey);
  --black: #383E56;
  --offWhite: #EDEDED;
  --maxWidth: 1000px;
  --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
  box-sizing: border-box;
  --primaryFontFamily: 'radnika_next', ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
 }

 *, *::before, *::after{
  box-sizing: inherit;
 }

 body {
   font-family: var(--primaryFontFamily);
   padding: 0;
   margin: 0;
   font-size: 1.5rem;
   line-height: 2;
 }

 a{
   text-decoration: none;
   color: var(--black);
   &:hover {
     text-decoration: underline;
     color: var(--primary);
   }
 }

 button {
   font-family: var(--primaryFontFamily);
 }
`;

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
`;

export default function Page(props) {
  const { children } = props;
  return (
    <div>
      <GlobalStyles />
      <Header />
      <InnerStyles>{children}</InnerStyles>
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
