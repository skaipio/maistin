import React from 'react';
import { shallow } from 'enzyme';
import BeerList from '../BeerList';

const beers = ['Lovely Lager', 'Sound Stout', 'Pounding Porter', 'Awesome Ale'];

describe('<BeerList />', () => {
  it('renders the beers passed to it', () => {
    const wrapper = shallow(<BeerList beers={beers} />);
    beers.forEach(beer =>
      expect(wrapper.html()).toContain(beer),
    );
  });
});