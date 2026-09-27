# Companies House – Senior Test Engineer Technical Assessment

This repository contains my solution for the Companies House Senior Test Engineer technical assessment using the DemoBlaze web application.

The solution demonstrates a risk-based functional testing approach, exploratory testing, automated regression testing, and continuous integration.

The focus is deliberately on a small number of high-value scenarios rather than exhaustive automation.

---

## Assessment Deliverables

| Deliverable | Location |
|---|---|
| Functional test plan | [TEST_PLAN.md](TEST_PLAN.md) |
| Automated test scenarios and selection rationale | [AUTOMATED_TESTS.md](AUTOMATED_TESTS.md) |
| Issues identified during testing | [ISSUES_FOUND.md](ISSUES_FOUND.md) |
| BDD scenarios | `features/` |
| Automation implementation | `pages/`, `step-definitions/`, `support/` |
| CI workflow | `.github/workflows/tests.yml` |

---

## Test Approach

Testing was prioritised using a risk-based approach, considering:

- Business impact of failure
- Likelihood of failure
- Importance of the customer journey
- Regression value
- Suitability for automation

The highest priority was given to the core purchase journey:

**Product discovery → Cart → Checkout → Order confirmation**

Authentication and catalogue behaviour were also included because they represent important customer-facing functionality.

The overall approach combines:

- Smoke testing
- Positive and negative functional testing
- End-to-end testing
- Exploratory testing
- Targeted regression automation

Detailed planning and prioritisation are documented in [TEST_PLAN.md](TEST_PLAN.md).

---

## Automated Test Coverage

The automated suite intentionally contains five focused scenarios:

| ID | Scenario | Primary Coverage |
|---|---|---|
| TC01 | Successful login with valid credentials | Authentication |
| TC02 | Login rejected with invalid credentials | Negative authentication |
| TC03 | Filter products by Phones category | Product discovery |
| TC04 | Add product to cart and validate product and price | Cart / data consistency |
| TC05 | Complete a purchase successfully | End-to-end purchase journey |

The scenarios were selected based on risk, regression value, repeatability and coverage of critical customer journeys.

Detailed reasoning for each selection is documented in [AUTOMATED_TESTS.md](AUTOMATED_TESTS.md).

---

## Technology Stack

- JavaScript
- Playwright
- Cucumber.js
- Gherkin
- Node.js
- Git / GitHub
- GitHub Actions

Cucumber BDD is used to express customer behaviour in a readable format, while Playwright provides browser automation and web-first assertions.

The framework uses the Page Object Model to separate business-readable test intent from page-specific implementation details.

---

## Framework Architecture

```text
Feature
   ↓
Step Definition
   ↓
POManager
   ↓
Page Object
   ↓
Playwright
   ↓
DemoBlaze
```

### Responsibilities

**Feature files**

Describe application behaviour using Gherkin scenarios.

**Step definitions**

Translate business-readable Gherkin steps into automation actions and assertions.

**Page Objects**

Contain page-specific locators and reusable UI interactions.

**POManager**

Provides centralised access to Page Objects for each scenario.

**Cucumber World**

Maintains scenario-specific state where information needs to be shared between steps.

**Hooks**

Manage browser setup, isolated browser contexts, teardown and failure evidence.

---

## Project Structure

```text
.
├── .github/
│   └── workflows/
│       └── tests.yml
│
├── features/
│   ├── login.feature
│   ├── product.feature
│   ├── cart.feature
│   └── checkout.feature
│
├── pages/
│   ├── HomePage.js
│   ├── LoginPage.js
│   ├── ProductPage.js
│   ├── CartPage.js
│   ├── CheckoutPage.js
│   └── POManager.js
│
├── step-definitions/
│   ├── loginSteps.js
│   ├── productSteps.js
│   ├── cartSteps.js
│   └── checkoutSteps.js
│
├── support/
│   ├── hooks.js
│   └── world.js
│
├── utils/
│   └── testData.js
│
├── .env.example
├── .gitignore
├── AUTOMATED_TESTS.md
├── ISSUES_FOUND.md
├── TEST_PLAN.md
├── cucumber.js
├── package.json
├── package-lock.json
└── README.md
```

---

## Prerequisites

- Node.js 22 or later
- npm
- Git

---

## Installation

Clone the repository:

```bash
git clone <https://github.com/ridwan-amuda/companies-house-senior-test-engineer-assessment.git>
cd companies-house-senior-test-engineer-assessment
```

Install dependencies:

```bash
npm install
```

Install the Playwright Chromium browser:

```bash
npx playwright install chromium
```

---

## Test Configuration

Authentication credentials are not stored in source control.

Create a local `.env` file based on `.env.example`:

```text
DEMOBLAZE_USERNAME=your_test_username
DEMOBLAZE_PASSWORD=your_test_password
```

The `.env` file is excluded from Git through `.gitignore`.

The framework accesses these values using environment variables:

```javascript
process.env.DEMOBLAZE_USERNAME
process.env.DEMOBLAZE_PASSWORD
```

For CI execution, the equivalent values are supplied securely using GitHub Actions repository secrets.

---

## Running the Tests

Run the complete automated suite:

```bash
npm test
```

Run specific areas using Cucumber tags:

```bash
npx cucumber-js --tags "@login"
```

```bash
npx cucumber-js --tags "@product"
```

```bash
npx cucumber-js --tags "@cart"
```

```bash
npx cucumber-js --tags "@checkout"
```

At the time of submission, the automated suite contains:

```text
5 scenarios
30 steps
```

---

## Test Reporting

Cucumber generates an HTML execution report:

`reports/cucumber-report.html`

The `reports/` directory is excluded from source control because reports are
generated execution artefacts.

In CI, the generated Cucumber report is uploaded as a GitHub Actions artefact
after test execution.
---

## Continuous Integration

The automated test suite is integrated with GitHub Actions.

The workflow runs automatically on:

- Pushes to `main`
- Pull requests targeting `main`

The pipeline performs the following:

1. Checks out the repository
2. Configures Node.js
3. Installs dependencies using `npm ci`
4. Installs Playwright Chromium and required system dependencies
5. Executes the Cucumber automated test suite
6. Uploads the generated Cucumber report as a workflow artefact

Authentication credentials are supplied using GitHub Actions repository secrets and are not committed to source control.

---

## Exploratory Testing

Automation was not used as a substitute for exploratory testing.

Exploratory testing was used particularly for validation behaviour, unusual input combinations, data consistency and areas where detailed requirements were not provided.

Examples of findings include:

- Purchase possible with an empty cart and malformed payment data
- Incorrect month displayed in the purchase receipt
- Inconsistent product storage information
- Signup validation inconsistencies

Full reproduction steps, expected behaviour, observed behaviour, severity and impact are documented in [ISSUES_FOUND.md](ISSUES_FOUND.md).

---

## Assumptions and Limitations

DemoBlaze is a shared public test environment, therefore application data and behaviour may change independently of this test suite.

Where detailed business rules were not provided, the tests avoid inventing requirements. Observable customer behaviour is validated where reasonable, while ambiguous behaviour is documented for clarification.

The automated suite is deliberately focused rather than exhaustive.

For example, the category test verifies that selecting the Phones category displays a known phone product. It does not claim to prove that every returned product is correctly classified.

---

## Further Improvements

Given additional time and production requirements, I would consider:

- Cross-browser coverage across Chromium, Firefox and WebKit
- Accessibility testing
- API-level testing where suitable APIs are available
- Parallel execution as the regression suite grows
- Environment-specific configuration
- Additional negative and boundary testing based on agreed business rules
- Test data creation and cleanup strategies for greater isolation

---

## Summary

The solution demonstrates a balanced testing approach combining test planning, exploratory testing, risk-based automation and continuous integration.

The automation is intentionally focused on high-value regression scenarios, while exploratory testing is used to investigate behaviours that benefit from human judgement or where requirements are ambiguous.