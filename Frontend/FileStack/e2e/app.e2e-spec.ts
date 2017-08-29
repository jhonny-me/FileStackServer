import { FileStackPage } from './app.po';

describe('file-stack App', () => {
  let page: FileStackPage;

  beforeEach(() => {
    page = new FileStackPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
