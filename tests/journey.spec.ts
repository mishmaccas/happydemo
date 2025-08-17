import { test, expect } from "@playwright/test";
import { SearchProductPage } from "./pages/search-product.ts";
import { CheckoutCustomerPage } from "./pages/checkout-customer.ts";

test("test", async ({ page }) => {
  await page.goto("https://automationteststore.com/");

  // Page objects
  const searchProducts = new SearchProductPage(page);
  const checkoutCustomer = new CheckoutCustomerPage(page);

  // Search for keyword
  // Assert search results loads
  // Assert products displayed are relevant
  //
  // test fuzzy logic
  // no results
  // multiple words
  // Parameterized Tests

  // page.getByRole("textbox", { name: "Search Keywords" }).isVisible;
  // const searchInput = page.getByRole("textbox", { name: "Search Keywords" });
  // await searchInput.fill("spray");
  searchProducts.searchKeyword("spray");

  // Press Enter
  // await searchBox.press('Enter');
  // OR
  // Click 'Go'
  await page.getByTitle("Go").locator("i").click();

  // Expect multiple products
  // "Showing 36 of 2420 results"
  await expect(page).toHaveURL(/.*product\/search.*keyword=spray.*category_id=0/);

  // Add to Cart
  // Assert product is successfully added to the cart
  // Via Success message & cart icon count

  // Use Accessibility name - special character
  // await page.getByRole('link', { name: '' }).first().click();

  // Get by title
  await page.getByTitle("Add to Cart").first().click();

  // Go to Cart
  // Open cart page and assert that product exists
  await page.locator("ul#main_menu_top li[data-id=menu_cart]").click();

  // Checkout
  await page.locator("#cart_checkout1").click();
  await page.getByText("Guest Checkout").click();
  await page.getByRole("button", { name: " Continue" }).click();

  // Customer details
  await checkoutCustomer.guestCheckout({
    firstName: "test",
    lastName: "test",
    email: "test@example.com",
    telephone: "0435333444",
    address1: "12 Smith Street",
    address2: "",
    city: "Richmond",
    zone: "3547",
    postcode: "TW2FFA",
  });

  // Confirm Order
  await page.getByRole("button", { name: " Confirm Order" }).click();
  await page.getByRole("link", { name: "invoice page" }).click();
});
