import React from 'react';
import { Link, } from 'react-navi';
import PropTypes from 'prop-types';

export default function Nabvar(props) {
  const { items, } = props;

  const renderItems = data => (
    <div>
      {data
        && data.map(item => (
          <Link key={item.title} href={item.href}>
            {item.title}
          </Link>
        ))}
    </div>
  );

  return (
    <nav>
      <ul>{renderItems(items)}</ul>
    </nav>
  );
}

Nabvar.propTypes = {
  items: PropTypes.objectOf(PropTypes.object).isRequired,
};
