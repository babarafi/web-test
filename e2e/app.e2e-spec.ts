import { WebTestPage } from './app.po';

describe('web-test App', () => {
  let page: WebTestPage;

  beforeEach(() => {
    page = new WebTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
