# DemoBlaze Functional Test Plan

## Purpose

This test plan defines the functional testing and automation approach for the DemoBlaze e-commerce application.

The objective is to provide confidence in the application's critical customer journeys by applying a risk-based testing approach, combining focused functional testing, exploratory testing and targeted automation.

The approach prioritises quality and business risk rather than attempting exhaustive coverage within the assessment timeframe.


## Scope and Test Priorities
Testing will focus primarily on functionality that directly affects a customer's ability to interact with the application and successfully complete a purchase.
The following areas will receive the highest priority:

| Priority | Functional Area | Key Coverage | Rationale |
|---|---|---|---|
| **P0 – Critical** | Purchase journey | Product → Cart → Checkout → Order confirmation | Represents the application's primary end-to-end customer journey |
| **P0 – Critical** | Shopping cart | Add product and verify product details in cart | A failure directly prevents successful purchasing |
| **P1 – High** | Authentication | Successful and unsuccessful login | Validates access and important error handling |
| **P1 – High** | Product catalogue | Category selection, product selection and product details | Customers must be able to discover and select products |
| **P1 – High** | Checkout validation | Required fields and invalid/missing data | Validates that incorrect or incomplete purchase information is handled appropriately |
| **P2 – Medium** | Registration | Valid, duplicate and invalid registration | Important account functionality but lower priority than the core purchasing journey |
| **P2 – Medium** | Navigation | Home, Cart, Contact and other primary navigation | Ensures users can move successfully between key areas |


## Functional Testing Types

### Smoke Testing
A focused smoke test will establish whether the application is sufficiently stable for further testing.
Key checks include:
- Homepage loads successfully.
- Products are displayed.
- Product details can be accessed.
- Login functionality is available.
- Products can be added to the cart.
- Checkout can be initiated.
  
A failure in a critical smoke scenario would be investigated before investing significant effort in lower-priority testing.

### Positive Functional Testing
Positive scenarios will validate that the application behaves correctly when expected user actions and valid data are provided.
Examples include:
- Successful login with valid credentials.
- Browsing products by category.
- Viewing product information.
- Adding a product to the cart.
- Completing a purchase using valid information.
- Receiving confirmation following a successful purchase.

### Negative and Validation Testing
Negative testing will verify how the application responds to invalid input, missing information and unexpected user behaviour.
Examples include:
- Invalid login credentials.
- Empty username/password.
- Missing mandatory checkout information.
- Invalid form data.
- Duplicate registration where applicable.
This is important because successful happy-path scenarios alone do not provide sufficient confidence in application quality.
### Boundary Testing
Where input fields permit free-text or structured input, relevant boundaries will be explored.
Examples include:
- Empty values.
- Very long input values.
- Special characters.
- Unexpected data formats.
- Minimum/maximum values where identifiable.
The purpose is to identify weaknesses in validation and error handling rather than attempting exhaustive combinations.
### End-to-End Testing
End-to-end testing will validate the most important customer journey across multiple areas of the application:
**Browse product → View product → Add to cart → Review cart → Checkout → Place order → Verify confirmation**
This journey receives the highest priority because failure at any stage could prevent the user from completing the application's primary business transaction.
### Regression Testing
Stable, repeatable and business-critical scenarios will form a focused automated regression suite.
Automation will provide repeatable feedback on critical functionality following application changes and reduce the effort required to repeatedly verify the same high-value journeys.
### Exploratory Testing
Time-boxed exploratory testing will complement scripted and automated testing.
Exploration will particularly focus on:
- Unexpected navigation behaviour.
- Validation inconsistencies.
- Cart behaviour.
- Application state.
- Error handling.
- Unusual user interactions.
- Behaviour across related workflows.
This is particularly valuable for this assessment because the specification explicitly states that DemoBlaze may contain intentional inconsistencies and potential bugs.
## Rationale for the Testing Approach
I will use a risk-based testing approach rather than attempting exhaustive coverage.

Testing will be prioritised primarily according to:

**Business impact × likelihood of failure**

The highest priority will be given to functionality that directly affects the customer's ability to browse products, manage their cart and successfully complete a purchase.

The approach combines functional, exploratory and automated testing. Functional testing provides systematic validation of expected behaviour, while exploratory testing helps identify unexpected behaviour and inconsistencies that predefined tests may not expose.

Automation will focus on a small number of high-value scenarios that are business-critical, repeatable and suitable for regression testing. Not every functional scenario will be automated; scenarios that provide greater value through human investigation will remain part of exploratory testing.

This approach provides appropriate confidence while keeping the testing proportionate to risk and the scope of the assessment.



## Automation Approach, Tools and Frameworks

The automated tests will focus on high-value customer journeys and regression scenarios rather than attempting to maximise automation coverage.

The framework will use:

- **Playwright** for browser automation due to its reliable browser interaction, auto-waiting capabilities, assertions and support for modern browsers.
- **JavaScript** as the implementation language because of its straightforward integration with Playwright and Cucumber.
- **Cucumber BDD** to describe scenarios using readable Given/When/Then behaviour, making the intent of the tests understandable to both technical and non-technical stakeholders.
- **Page Object Model (POM)** to separate page interactions and locators from test scenarios, improving maintainability and reuse.
- **GitHub** for source control and version management.
- **GitHub Actions** for CI execution, enabling the automated tests to provide repeatable feedback when changes are introduced.

This combination provides a lightweight, readable and maintainable automation solution appropriate for the scope of the assessment.
