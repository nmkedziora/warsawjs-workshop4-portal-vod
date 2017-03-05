import { WarsawjsWorkshop4PortalVodPage } from './app.po';

describe('warsawjs-workshop4-portal-vod App', () => {
  let page: WarsawjsWorkshop4PortalVodPage;

  beforeEach(() => {
    page = new WarsawjsWorkshop4PortalVodPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
