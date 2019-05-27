import React from 'react';
import PropTypes from 'prop-types';
import NavLinks from '../molecules/NavLinks';

export default function Nabvar(props) {
  const { items, } = props;

  return <NavLinks items={items} />;
}

Nabvar.propTypes = {
  items: PropTypes.objectOf(PropTypes.object).isRequired,
};
