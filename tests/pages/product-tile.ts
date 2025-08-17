import { Page, Locator } from "@playwright/test";

export class ProductTilePage {
  readonly page: Page;
  readonly addToCart: Locator;

  // Other locator
  // - Use Accessibility name - but its a special character, should be a proper accessibility name
  // - Such as text content, or alt text of an image inside a linke
  // - await page.getByRole('link', { name: '' }).first().click();
  // Get by title

  constructor(page: Page) {
    this.page = page;
    this.addToCart = page.getByTitle("Add to Cart");
  }

  async addFirstProductToCart() {
    await this.addToCart.first().click();
  }
}
