import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

export default function Page(props) {
  const { children } = props;
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
