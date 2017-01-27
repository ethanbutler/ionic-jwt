import { GuideProvider } from './guide';
import { BrowserXhr, Http, RequestOptions, ResponseOptions, XHRBackend, XSRFStrategy } from '@angular/http';

//http mocking
const browserXhr = new BrowserXhr();
const res        = new ResponseOptions();
const xsrf       = new XSRFStrategy();
xsrf.configureRequest = () => {return;}
const xhr        = new XHRBackend(browserXhr, res, xsrf);
const options    = new RequestOptions();
const http       = new Http(xhr, options);

let guideProvider = null;

describe('Guide Provider', () => {

  beforeEach(() => {
    guideProvider = new GuideProvider(http);
  });

  it('should return a guide', () => {
    return guideProvider.getGuide(1).then(results => {
      expect(results.guide).toBeTruthy();
    });
  });

  it('should return the correct guide', () => {
    return guideProvider.getGuide(1).then(results => {
      expect(parseInt(results.guide.id)).toBe(1);
    });
  });

  it('should have a title', () => {
    return guideProvider.getGuide(1).then(results => {
      expect(typeof results.guide.title).toBe('string');
    });
  });

  it('should have content', () => {
    return guideProvider.getGuide(1).then(results => {
      expect(typeof results.guide.content).toBe('string');
    });
  });

  it('should have an image', () => {
    return guideProvider.getGuide(1).then(results => {
      let imgUrl = results.guide.featureImg;
      expect(typeof imgUrl).toBe('string');
      expect(imgUrl.includes('.jpg') || imgUrl.includes('.png')).toBe(true);
    });
  });

});
