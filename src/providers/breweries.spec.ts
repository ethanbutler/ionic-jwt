import { BreweriesProvider } from './breweries';
import { BrowserXhr, Http, RequestOptions, ResponseOptions, XHRBackend, XSRFStrategy } from '@angular/http';

import * as Geodist from 'geodist';

//http mocking
const browserXhr = new BrowserXhr();
const res        = new ResponseOptions();
const xsrf       = new XSRFStrategy();
xsrf.configureRequest = () => {return;}
const xhr        = new XHRBackend(browserXhr, res, xsrf);
const options    = new RequestOptions();
const http       = new Http(xhr, options);

let breweriesProvider = null;

describe('Breweries Provider', () => {

  beforeEach(() => {
    breweriesProvider = new BreweriesProvider(http);
  });

  it('should return an object with breweries property', () => {
    return breweriesProvider.getBreweries().then(results => {
      expect(results.breweries).toBeTruthy();
    })
  });

  it('should return a promise that returns an array of breweries', () => {
    return breweriesProvider.getBreweries().then(results => {
      let breweries = results.breweries;
      expect(Array.isArray(breweries)).toBe(true);
    });
  });

  it('should return correct number of objects', () => {
    return breweriesProvider.getBreweries({
      count: 3
    }).then(results => {
      let breweries = results.breweries;
      expect(breweries.length).toBe(3);
    });
  });

  it('should return recently published breweries by default', () => {
    const sortByDate = (b, a) => {
      if(a.createdAt < b.createdAt) return -1;
      if(a.createdAt > b.createdAt) return 1;
      return 0;
    };

    return breweriesProvider.getBreweries().then(results => {
      let unsorted = results.breweries.slice();
      let sorted   = results.breweries.sort(sortByDate);
      expect(unsorted).toEqual(sorted);
    });
  });

  it('should return breweries alphabetically', () => {
    const sortByName = (a, b) => {
      if(a.name < b.name) return -1;
      if(a.name > b.name) return 1;
      return 0;
    };

    return breweriesProvider.getBreweries({
      orderby: 'title',
      order: 'asc'
    }).then(results => {
      let unsorted = results.breweries.slice();
      let sorted   = results.breweries.sort(sortByName);
      expect(unsorted).toEqual(sorted);
    });
  });

  it('should return breweries by nearest', () => {
    const sortByDistance = (a, b) => {
      const dummyCoords = {
        lat: 35.9940,
        long: -78.8986
      };
      const getDistance = (lat, lng) => {
        return Geodist({lat: lat, lng: lng}, dummyCoords, {exact: true}).toFixed(1);
      };
      const aDistance = getDistance(a);
      const bDistance = getDistance(b);
      if(aDistance < bDistance) return -1;
      if(aDistance > bDistance) return 1;
      return 0;
    };

    return breweriesProvider.getBreweries({
      orderby: 'nearest',
      lat: 35.9940,
      lng: -78.8986
    }).then(results => {
      let unsorted = results.breweries.slice();
      let sorted   = results.breweries.sort(sortByDistance);
      expect(unsorted).toEqual(sorted);
    });
  });

});
