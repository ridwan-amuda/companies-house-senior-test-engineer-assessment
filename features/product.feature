@ui @product
Feature: Product catalogue

  As a DemoBlaze customer
  I want to browse products by category
  So that I can find products I am interested in

  @smoke
  Scenario: Filter products by Phones category
    Given the user is on the DemoBlaze homepage
    When the user selects the "Phones" category
    Then phone products should be displayed