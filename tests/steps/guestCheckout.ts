import { Given, When, Then } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "playwright";
import { SearchProductPage } from "../pages/search-product";

let browser: Browser;
let page: Page;

Given("customer searches for a product", { timeout: 20_000 }, async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  await page.goto("https://automationteststore.com/");
  const searchProducts = new SearchProductPage(page);
  await searchProducts.searchKeyword("spray");
  await searchProducts.submitSearch();
  await searchProducts.expectResults();
});

When("they add the first product to cart", async () => {});

When("complete a guest checkout", async () => {});

Then("they should able to complete the order", async () => {});
