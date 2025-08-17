import { test } from "@playwright/test";
import { SearchProductPage } from "./pages/search-product";
import { CheckoutCustomerPage } from "./pages/checkout-customer";
import { ProductTilePage } from "./pages/product-tile";
import { NavigationBarPage } from "./pages/navigation-bar";

test("test", async ({ page }) => {
  await page.goto("https://automationteststore.com/");

  // Page objects
  const searchProducts = new SearchProductPage(page);
  const checkoutCustomer = new CheckoutCustomerPage(page);
  const productTile = new ProductTilePage(page);
  const navBar = new NavigationBarPage(page);

  // Search for keyword
  // Assert search results page loads
  await searchProducts.searchKeyword("spray");
  await searchProducts.submitSearch;
  await searchProducts.expectResults;

  // Add to Cart
  // Assert product is successfully added to the cart
  // Other checks
  // - Success message & cart icon count

  await productTile.addFirstProductToCart();

  // Go to Cart
  // Open cart page and assert that product exists
  await navBar.openShoppingCart();

  // Checkout
  await checkoutCustomer.selectGuestCheckout();

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
  // TO DO move this to an order confirmation page object
  //
  await page.getByRole("button", { name: " Confirm Order" }).click();
  await page.getByRole("link", { name: "invoice page" }).click();
});
