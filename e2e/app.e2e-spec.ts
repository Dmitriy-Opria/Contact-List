import { ContactListPage } from './app.po';

describe('contact-list App', () => {
  let page: ContactListPage;

  beforeEach(() => {
    page = new ContactListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
