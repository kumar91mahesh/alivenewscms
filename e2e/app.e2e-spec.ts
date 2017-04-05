import { AlivenewscmsPage } from './app.po';

describe('alivenewscms App', () => {
  let page: AlivenewscmsPage;

  beforeEach(() => {
    page = new AlivenewscmsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
