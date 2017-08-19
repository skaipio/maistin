import React from 'react';

export default ({ beers }) => (
  <ul>
    { beers.map((beer, i) => <li key={i} >{ beer }</li>) }
  </ul>
);
