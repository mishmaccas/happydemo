import { test, expect } from '@playwright/test';
import { SearchProductPage } from './pages/search-product.ts'

test('test', async ({ page }) => {
  await page.goto('https://automationteststore.com/');
  const searchProducts = new SearchProductPage(page);

  // Search for keyword
  page.getByRole('textbox', { name: 'Search Keywords' }).isVisible;
  const searchInput = page.getByRole('textbox', { name: 'Search Keywords' });
  await searchInput.fill('skin');
  
  // Press Enter 
  // await searchBox.press('Enter');
  // OR 
  // Click 'Go'
  await page.getByTitle('Go').locator('i').click();

  // Expect multiple products
  // 
  
  // Add to Cart
  // await page.getByRole('link', { name: '' }).first().click();
  await page.getByTitle('Add to Cart').first().click();

  // Go to Cart
  await page.locator('ul#main_menu_top li[data-id=menu_cart]').click();
   
  // Checkout
  await page.locator('#cart_checkout1').click();
  await page.getByText('Guest Checkout').click();
  await page.getByRole('button', { name: ' Continue' }).click();
  await page.locator('#guestFrm_firstname').click();
  await page.locator('#guestFrm_firstname').fill('testt');
  await page.locator('#guestFrm_lastname').click();
  await page.locator('#guestFrm_lastname').fill('test');
  await page.locator('#guestFrm_email').click();
  await page.locator('#guestFrm_email').fill('test@example.com');
  await page.locator('#guestFrm_telephone').click();
  await page.locator('#guestFrm_telephone').fill('0435333444');
  await page.locator('#guestFrm_address_1').click();
  await page.locator('#guestFrm_address_1').fill('12 Smith Street');
  await page.locator('#guestFrm_address_2').click();
  await page.locator('#guestFrm_address_2').fill('');
  await page.locator('div:nth-child(4) > .input-group > .input-group-addon > .required').first().click();
  await page.locator('#guestFrm_city').click();
  await page.locator('#guestFrm_city').fill('Richmond');
  await page.locator('#guestFrm_zone_id').selectOption('3547');
  await page.locator('#guestFrm_postcode').click();
  await page.locator('#guestFrm_postcode').fill('TW2FFA');
  await page.getByRole('button', { name: ' Continue' }).click();

  // Confirm Order
  await page.getByRole('button', { name: ' Confirm Order' }).click();
  await page.getByRole('link', { name: 'invoice page' }).click();
});