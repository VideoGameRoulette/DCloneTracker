import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles';

export const Spacer = () => {
  return <div className="w-full h-8" />;
};

export const SectionTitle = ({ title, align }) => {
  return (
    <h1
      className={`${styles.lgText} ${styles.textColorHeader} text-shadow-md font-bold uppercase ${align} font-righteous`}
    >
      {title}
    </h1>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string,
  align: PropTypes.string,
};

SectionTitle.defaultProps = {
  title: '',
  align: 'text-left',
};

export const SectionDesc = ({ title, align }) => {
  return (
    <h2
      className={`${styles.mdText} text-yellow-300 text-shadow-md font-bold uppercase ${align} font-righteous`}
    >
      {title}
    </h2>
  );
};

SectionDesc.propTypes = {
  title: PropTypes.string,
  align: PropTypes.string,
};

SectionDesc.defaultProps = {
  title: '',
  align: 'text-left',
};

export const SectionPara = ({ title, align }) => {
  return (
    <p
      className={`${styles.smText} text-yellow-500 text-shadow-sm font-bold uppercase ${align} font-righteous`}
    >
      {title}
    </p>
  );
};

SectionPara.propTypes = {
  title: PropTypes.string,
  align: PropTypes.string,
};

SectionPara.defaultProps = {
  title: '',
  align: 'text-left',
};
