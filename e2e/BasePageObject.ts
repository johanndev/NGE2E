import { chromium, BrowserType, Browser, webkit, firefox, LaunchOptions, Page, BrowserContext } from "playwright";

export abstract class BasePageObject {
  private browser: Browser;
  private context: BrowserContext
  public page: Page;
  constructor(
    public baseUrl: string,
    public browserType: BrowserType<Browser> = chromium,
    public launchOptions: LaunchOptions = { headless: false },
  ) {
  }

  async init() {
    this.browser = await this.browserType.launch(this.launchOptions);
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
  }

  async navigateTo() {
    await this.page.goto(this.baseUrl);
  }

  async close() {
    await this.browser.close();
  }
}
