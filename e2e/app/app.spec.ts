import { AppPage } from './app.po';
import { chromium, webkit } from "playwright";


describe('Base playwright test', () => {
  let po: AppPage

  beforeEach(async () => {
    po = new AppPage('http://whatsmyuseragent.org/', webkit);
    await po.init()
  })

  afterEach(async () => {
    await po.close();
  })

  it('Should use page object', async () => {
    await po.navigateTo();
  })
  // it('Should work with playwright', async () => {

  //   const browser = await chromium.launch({ headless: false });
  //   const context = await browser.newContext();
  //   const page = await context.newPage();
  //   await page.goto('http://whatsmyuseragent.org/');
  //   await page.screenshot({ path: `example-chromium.png` });
  //   await browser.close();
  // })
})

// describe('workspace-project App', () => {
//   let page: AppPage;

//   beforeEach(() => {
//     page = new AppPage();
//   });

//   it('should display welcome message', () => {
//     page.navigateTo();
//     expect(page.getTitleText()).toEqual('ng-e2e app is running!');
//   });

//   afterEach(async () => {
//     // Assert that there are no errors emitted from the browser
//     const logs = await browser.manage().logs().get(logging.Type.BROWSER);
//     expect(logs).not.toContain(jasmine.objectContaining({
//       level: logging.Level.SEVERE,
//     } as logging.Entry));
//   });
// });
