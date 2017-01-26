import { BreweriesProvider } from './breweries';
import { BrowserXhr, Http, RequestOptions, ResponseOptions, XHRBackend, XSRFStrategy } from '@angular/http';

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

});
