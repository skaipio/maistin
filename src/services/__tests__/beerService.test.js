import { getBeers } from '../beerService';

describe('beerService', () => {
  describe('#getBeers', () => {
    it('returns an array', () => {
      const beers = getBeers();
      expect(Array.isArray(beers)).toBe(true);
    });
  });

  describe('#getBeers', () => {
    it('returns an array of objects with fields id, name and favorite', () => {
      const beers = getBeers();
      beers.forEach(beer => {
        expect(beer).toHaveProperty('id');
        expect(beer).toHaveProperty('name');
        expect(beer).toHaveProperty('favorite');        
      })     
    });
  });
});
