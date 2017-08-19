import { getBeers } from '../beerService';

describe('beerService', () => {
  describe('#getBeers', () => {
    it('returns an array', () => {
      const beers = getBeers();
      expect(Array.isArray(beers)).toBe(true);
    });
  });
});
