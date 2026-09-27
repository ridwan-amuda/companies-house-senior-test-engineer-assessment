# Automated Test Scenarios

## Overview

The automated tests focus on high-value customer journeys and areas that provide
strong regression value.

The scenarios were selected using a risk-based approach, considering:

- Business impact if the functionality fails
- Frequency of use
- Suitability for repeatable automation
- Coverage of critical customer journeys
- Value provided within the limited assessment scope

The intention is not to automate every possible scenario, but to demonstrate
focused automation across authentication, product discovery, cart management,
and checkout.

---

## TC01 - Successful Login

### Scenario
Verify that a registered user can successfully log in with valid credentials.

### Why automate this scenario?

Authentication is a key entry point into the application and is likely to be
executed repeatedly during regression testing.

Automating this scenario provides fast feedback that the core login journey
continues to function after application changes.

### Risk covered

A failure could prevent registered customers from accessing authenticated
functionality.

---

## TC02 - Invalid Login Is Rejected

### Scenario
Verify that a user is not authenticated when invalid credentials are provided.

### Why automate this scenario?

This complements the positive login scenario by covering an important negative
authentication path.

The test verifies the observable business behaviour that invalid credentials
must not result in an authenticated session without making assumptions about
the exact validation message.

### Risk covered

Incorrect authentication behaviour could allow unauthorised access or provide
a misleading login experience.

---

## TC03 - Product Category Filtering

### Scenario
Verify that selecting the Phones category displays a known phone product.

### Why automate this scenario?

Product discovery is a core part of the customer journey. Category navigation
is also suitable for repeatable regression testing because customers depend on
it to locate products.

The automated check focuses on customer-visible behaviour rather than asserting
a fixed number of products, reducing unnecessary test brittleness.

### Risk covered

Incorrect category behaviour could prevent customers from discovering relevant
products.

---

## TC04 - Add Product to Cart

### Scenario
Verify that a selected product can be added to the cart and that the product
name and price remain consistent.

### Why automate this scenario?

The shopping cart is part of the critical purchase journey and provides high
regression value.

Rather than hard-coding a product price, the test captures the price displayed
on the product page and compares it with the cart. This validates consistency
between stages of the customer journey while avoiding unnecessary dependency
on static catalogue data.

### Risk covered

Incorrect product or pricing information in the cart could result in customers
purchasing the wrong item or seeing inconsistent pricing.

---

## TC05 - Complete Purchase

### Scenario
Verify that a customer can add a product to the cart, provide valid checkout
information, place the order, and receive purchase confirmation.

### Why automate this scenario?

This represents the application's critical end-to-end purchase journey.

Automating it provides confidence that the main components of the customer
journey continue to work together, from product selection through to order
confirmation.

### Risk covered

A failure in this journey could prevent customers from completing purchases,
making it one of the highest-impact functional risks in the application.

---

# Automation Scope

The automated suite intentionally contains five focused scenarios rather than
attempting exhaustive automation.

Other behaviours, particularly validation rules, unusual input combinations,
and unexpected application behaviour, were explored manually where exploratory
testing provided greater value.

Issues identified during this testing are documented separately in
`ISSUES_FOUND.md`.
