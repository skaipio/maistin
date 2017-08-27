import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

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
      <ListGroup>
        { this.state.beers.map((beer, index) =>
          <ListGroupItem key={beer.id} onClick={() => this.toggleFavorite(index)}>{ beer.name }{ beer.favorite ? ' <3' : ''}</ListGroupItem>,
        ) }
      </ListGroup>
    );
  }
}
