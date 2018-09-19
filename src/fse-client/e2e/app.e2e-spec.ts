import { FseClientPage } from './app.po';

describe('fse-client App', function() {
  let page: FseClientPage;

  beforeEach(() => {
    page = new FseClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
