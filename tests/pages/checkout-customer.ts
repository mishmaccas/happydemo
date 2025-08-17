import { Page, Locator } from "@playwright/test";

export class CheckoutCustomerPage {
  readonly page: Page;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly email: Locator;
  readonly telephone: Locator;
  readonly address1: Locator;
  readonly address2: Locator;
  readonly something: Locator;
  readonly city: Locator;
  readonly zone: Locator;
  readonly postcode: Locator;
  readonly continueButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstName = page.locator("#guestFrm_firstname");
    this.lastName = page.locator("#guestFrm_lastname");
    this.email = page.locator("#guestFrm_email");
    this.telephone = page.locator("#guestFrm_telephone");
    this.address1 = page.locator("#guestFrm_address_1");
    this.address2 = page.locator("#guestFrm_address_2");
    // this.something = page.locator("div:nth-child(4) > .input-group > .input-group-addon > .required").first();
    this.city = page.locator("#guestFrm_city");
    this.zone = page.locator("#guestFrm_zone_id");
    this.postcode = page.locator("#guestFrm_postcode");
    this.continueButton = page.getByRole("button", { name: " Continue" });
  }

  async fillFirstName(name: string) {
    await this.firstName.click();
    await this.firstName.fill(name);
  }

  async fillLastName(name: string) {
    await this.lastName.click();
    await this.lastName.fill(name);
  }

  async fillEmail(email: string) {
    await this.email.click();
    await this.email.fill(email);
  }

  async fillTelephone(number: string) {
    await this.telephone.click();
    await this.telephone.fill(number);
  }

  async fillAddress1(address: string) {
    await this.address1.click();
    await this.address1.fill(address);
  }

  async fillAddress2(address: string) {
    await this.address2.click();
    await this.address2.fill(address);
  }

  async fillCity(city: string) {
    // await this.something.click();
    await this.city.click();
    await this.city.fill(city);
  }

  async selectZone(zoneValue: string) {
    await this.zone.selectOption(zoneValue);
  }

  async fillPostcode(postcode: string) {
    await this.postcode.click();
    await this.postcode.fill(postcode);
  }

  async clickContinue() {
    await this.continueButton.click();
  }

  async guestCheckout(data: {
    firstName: string;
    lastName: string;
    email: string;
    telephone: string;
    address1: string;
    address2: string;
    city: string;
    zone: string;
    postcode: string;
  }) {
    await this.fillFirstName(data.firstName);
    await this.fillLastName(data.lastName);
    await this.fillEmail(data.email);
    await this.fillTelephone(data.telephone);
    await this.fillAddress1(data.address1);
    await this.fillAddress2(data.address2);
    await this.fillCity(data.city);
    await this.selectZone(data.zone);
    await this.fillPostcode(data.postcode);
    await this.clickContinue();
  }
}
