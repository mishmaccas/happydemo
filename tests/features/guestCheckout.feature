Feature: Guest Customer searches and purchase a product
  As a customer, I want to search for a product and purchase

  Scenario: Successful search and purchase for guest customer
    Given customer searches for a product
    When they add the first product to cart
    And complete a guest checkout
    Then they should able to complete the order