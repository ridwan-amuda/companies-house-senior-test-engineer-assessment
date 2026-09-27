@ui @checkout
Feature: Product checkout

  As a DemoBlaze customer
  I want to complete the checkout process
  So that I can purchase products in my cart

  @smoke
  Scenario: Complete a purchase successfully
    Given the user has added "Samsung galaxy s6" to the cart
    When the user proceeds to checkout
    And the user enters valid purchase information
    And the user places the order
    Then the purchase should be confirmed