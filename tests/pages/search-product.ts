import { Page, Locator, expect } from "@playwright/test";

// Other Assertions
//  - products displayed are relevant
//
// Other types of tests
// - test fuzzy logic
// - no results
// - multiple words
// - Parameterized Tests

export class SearchProductPage {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly submit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.getByRole("textbox", { name: "Search Keywords" });
    this.submit = page.getByTitle("Go").locator("i");
  }

  async searchKeyword(keyword) {
    this.searchInput.isVisible;
    await this.searchInput.fill(keyword);
  }

  async submitSearch() {
    // Press Enter
    // await searchBox.press('Enter');
    // OR
    // Click 'Go'
    await this.submit.click();
  }

  async expectResults() {
    // Expect multiple products

    // An Example "Showing x of y results"
    // Also Validate API response also if required
    // THIS example is to check URL
    await expect(this.page).toHaveURL(/.*product\/search.*keyword=spray.*category_id=0/);
  }
}
