import React from 'react';
import { shallow } from 'enzyme';
import { ListGroupItem } from 'reactstrap';
import renderer from 'react-test-renderer';
import BeerList from '../BeerList';
import beers from './beers.json';

const keyEquals = (strKey, intKey) => parseInt(strKey, 10) === intKey;

describe('<BeerList />', () => {
  let mockBeers;

  beforeEach(() => {
    mockBeers = JSON.parse(JSON.stringify(beers));
  });

  it('snapshot of beer list matches', () => {
    const tree = renderer.create(<BeerList beers={mockBeers} />);
    expect(tree).toMatchSnapshot();
  });

  it('renders the beers passed to it', () => {
    const wrapper = shallow(<BeerList beers={mockBeers} />);
    beers.forEach((beer) => {
      const beerItem = wrapper.find(ListGroupItem).filterWhere(li => keyEquals(li.key(), beer.id));
      expect(beerItem.length).toBe(1);
    });
  });

  it('displays no heart icon for a beer that is not favorited', () => {
    const wrapper = shallow(<BeerList beers={mockBeers} />);
    beers.filter(beer => !beer.favorite)
      .forEach((beer) => {
        const beerItem = wrapper.find(ListGroupItem)
          .filterWhere(li => keyEquals(li.key(), beer.id)).first();
        expect(beerItem.render().text()).not.toContain('<3');
      });
  });

  it('displays a heart icon for a favorited beer', () => {
    const wrapper = shallow(<BeerList beers={mockBeers} />);
    beers.filter(beer => beer.favorite)
      .forEach((beer) => {
        const beerItem = wrapper.find(ListGroupItem)
          .filterWhere(li => keyEquals(li.key(), beer.id)).first();
        expect(beerItem.render().text()).toContain('<3');
      });
  });

  it('displays a heart icon after clicking on a beer without a heart icon', () => {
    const wrapper = shallow(<BeerList beers={mockBeers} />);
    const beerNotFavorited = 1;
    let beerItem = wrapper.find(ListGroupItem)
      .filterWhere(li => keyEquals(li.key(), beerNotFavorited)).first();
    beerItem.simulate('click');
    beerItem = wrapper.find(ListGroupItem)
      .filterWhere(li => keyEquals(li.key(), beerNotFavorited)).first();
    expect(beerItem.render().text()).toContain('<3');
  });

  it('displays no heart icon after clicking on a beer with a heart icon', () => {
    const wrapper = shallow(<BeerList beers={mockBeers} />);
    const beerFavorited = 2;
    let beerItem = wrapper.find(ListGroupItem)
      .filterWhere(li => keyEquals(li.key(), beerFavorited)).first();
    beerItem.simulate('click');
    beerItem = wrapper.find(ListGroupItem)
      .filterWhere(li => keyEquals(li.key(), beerFavorited)).first();
    expect(beerItem.render().text()).not.toContain('<3');
  });
});
