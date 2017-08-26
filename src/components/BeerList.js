import React, { Component } from 'react';

export default class BeerList extends Component {
  constructor({ beers }) {
    super();
    this.state = {
      beers: JSON.parse(JSON.stringify(beers)), // deep clone
    };
    this.toggleFavorite = this.toggleFavorite.bind(this);
  }

  toggleFavorite(beerIndex) {
    const beers = JSON.parse(JSON.stringify(this.state.beers));
    beers[beerIndex].favorite = !beers[beerIndex].favorite;
    this.setState({
      beers: beers,
    });
  }

  render() {
    return (
      <ul>
        { this.state.beers.map((beer, index) =>
          <li key={beer.id} onClick={() => this.toggleFavorite(index)}>{ beer.name }{ beer.favorite ? ' <3' : ''}</li>,
        ) }
      </ul>
    );
  }
}
