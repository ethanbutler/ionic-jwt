import { GuidesProvider } from './guides';
import { BrowserXhr, Http, RequestOptions, ResponseOptions, XHRBackend, XSRFStrategy } from '@angular/http';

//http mocking
const browserXhr = new BrowserXhr();
const res        = new ResponseOptions();
const xsrf       = new XSRFStrategy();
xsrf.configureRequest = () => {return;}
const xhr        = new XHRBackend(browserXhr, res, xsrf);
const options    = new RequestOptions();
const http       = new Http(xhr, options);

let guidesProvider = null;

describe('Guides Provider', () => {

  beforeEach(() => {
    guidesProvider = new GuidesProvider(http);
  });

  it('should return an object with guides property', () => {
    return guidesProvider.getGuides().then(results => {
      expect(results.guides).toBeTruthy();
    })
  });

  it('should return a promise that returns an array of guides', () => {
    return guidesProvider.getGuides().then(results => {
      let guides = results.guides;
      expect(Array.isArray(guides)).toBe(true);
    });
  });

  //implement when more guides are published
  xit('should return the correct number of guides', () => {
    return guidesProvider.getGuides({
      count: 3
    }).then(results => {
      let guides = results.guides
      expect(guides.length).toBe(3);
    });
  });

  it('should get recently published guides', () => {
    const sortByDate = (b, a) => {
      if(a.createdAt < b.createdAt) return -1;
      if(a.createdAt > b.createdAt) return 1;
      return 0;
    };

    return guidesProvider.getGuides().then(results => {
      let unsorted = results.guides.slice();
      let sorted   = results.guides.sort(sortByDate);
      expect(unsorted).toEqual(sorted);
    });
  });

});
