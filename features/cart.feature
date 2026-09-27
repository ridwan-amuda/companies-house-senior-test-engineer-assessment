@ui @cart
Feature: Shopping cart

  As a DemoBlaze customer
  I want to add products to my cart
  So that I can review them before purchasing

  @smoke
  Scenario: Add a product to the cart
    Given the user is on the DemoBlaze homepage
    When the user selects "Samsung galaxy s6"
    And the user adds the product to the cart
    And the user navigates to the cart
    Then the selected product should be displayed in the cart
    And the cart price should match the selected product price