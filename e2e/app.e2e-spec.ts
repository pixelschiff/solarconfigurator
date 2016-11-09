import { SolarconfiguratorPage } from './app.po';

describe('solarconfigurator App', function() {
  let page: SolarconfiguratorPage;

  beforeEach(() => {
    page = new SolarconfiguratorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
