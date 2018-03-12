import { MyFirstProjectPage } from './app.po';

describe('my-first-project App', () => {
  let page: MyFirstProjectPage;

  beforeEach(() => {
    page = new MyFirstProjectPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
