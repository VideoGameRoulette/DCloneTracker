import '../styles/globals.css';
import React from 'react';
import PropTypes from 'prop-types';
import 'components/config/i18n/i18next.config';

const MyApp = ({ Component, pageProps }) => {
  return (
    <div className="absolute w-full h-full flex justify-center items-center">
      <Component {...pageProps} />
    </div>
  );
};

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};

MyApp.defaultProps = {
  Component: null,
  pageProps: null,
};

export default MyApp;
