import { Page, Locator } from "@playwright/test";

export class NavigationBarPage {
  readonly page: Page;
  readonly openCart: Locator;

  constructor(page: Page) {
    this.page = page;
    this.openCart = page.locator("ul#main_menu_top li[data-id=menu_cart]");
  }

  async openShoppingCart() {
    await this.openCart.click();
  }
}
