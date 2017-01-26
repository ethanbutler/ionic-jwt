import { GooglePlaces } from './google-places';
import { BrowserXhr, Http, RequestOptions, ResponseOptions, XHRBackend, XSRFStrategy } from '@angular/http';

//http mocking
const browserXhr = new BrowserXhr();
const res        = new ResponseOptions();
const xsrf       = new XSRFStrategy();
xsrf.configureRequest = () => {return;}
const xhr        = new XHRBackend(browserXhr, res, xsrf);
const options    = new RequestOptions();
const http       = new Http(xhr, options);

let googlePlaces = null;

describe('Google Places Provider', () => {

  beforeEach(() => {
    googlePlaces = new GooglePlaces(http);
  });

  it('should return city from lat/lon object', () => {
    return googlePlaces.getCityFromLatLng({
      lat: 35.9940,
      lon: -78.8986
    }).then(city => {
      expect(typeof city).toBe('string');
    })
  });

  it('should return array of cities from query', () => {
    return googlePlaces.getCitiesFromQuery('durham').then(data => {
      expect(typeof data[0]).toBe('object');
    });
  });

  it('should return cities with a name', () => {
    return googlePlaces.getCitiesFromQuery('durham').then(data => {
      expect(typeof data[0].name).toBe('string')
    });
  });

  it('should return cities with a placeId', () => {
    return googlePlaces.getCitiesFromQuery('durham').then(data => {
      expect(typeof data[0].placeId).toBe('string')
    });
  });

  it('should return latitude and longitude from city', () => {
    let durhamPlaceId = 'ChIJ8WYPEnHkrIkRfvJGionaeuE';
    return googlePlaces.getLatLongFromCity({
      placeId: durhamPlaceId
    }).then(data => {
      expect(typeof data.coords).toBe('object');
      expect(data.coords.lat).toBeTruthy();
      expect(data.coords.lng).toBeTruthy();
    });
  });

});
