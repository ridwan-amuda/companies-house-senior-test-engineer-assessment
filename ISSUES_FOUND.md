# Issues Found

The following issues and observations were identified during exploratory testing of the DemoBlaze application.

## DB-01 - Empty cart can be purchased with malformed card details

**Severity:** High  
**Reproducibility:** Observed during exploratory testing

### Steps to Reproduce

1. Add `Samsung galaxy s6` to the cart.
2. Navigate to the cart and delete the product.
3. Confirm that the product row and cart total disappear.
4. Click **Place Order** while the cart is empty.
5. Enter:
   - Name: `Assessment Test`
   - Credit card: `not-a-card`
6. Leave Country, City, Month and Year empty.
7. Click **Purchase**.

### Observed Behaviour

The purchase was accepted and a success confirmation was displayed:

`Thank you for your purchase!`

The receipt showed:

- Amount: `0 USD`
- Card Number: `not-a-card`
- Name: `Assessment Test`

A receipt ID was also generated.

The application therefore allowed a zero-value order to be completed using clearly malformed card information.

### Expected Behaviour

An empty cart should not permit an order to be placed.

Checkout should also reject clearly malformed payment information and provide appropriate validation feedback rather than displaying a successful purchase confirmation.

Exact payment-field validation rules should be confirmed with the product owner because the demo application does not process real payments.

### Impact

Invalid orders can appear successful, reducing confidence in both the customer journey and generated order information.

Validation may need to be enforced at both client and server level.

---

## DB-02 - Receipt displays incorrect calendar month

**Severity:** Medium  
**Reproducibility:** Observed during exploratory testing

### Steps to Reproduce

1. Complete a purchase.
2. Observe the Date displayed in the successful purchase confirmation.

### Observed Behaviour

On **25 September 2026**, the generated receipt displayed:

`Date: 25/8/2026`

The day and year were correct, but the displayed month represented August rather than September.

The checkout Month field was left blank during this observation, indicating that the receipt date was generated independently by the application.

### Expected Behaviour

The generated receipt should display the correct transaction date according to the application's agreed date format and timezone.

For the observed transaction, this would be expected to represent September rather than August.

### Additional Observation

The one-month difference is consistent with a possible zero-based month formatting issue; however, the root cause cannot be confirmed from UI testing alone and would require investigation of the implementation.

### Impact

Incorrect transaction dates could confuse users and reduce confidence in purchase confirmation and order records.

The behaviour should also be retested around month and year boundaries following a fix.


## DB-03 - Inconsistent storage capacity displayed for iPhone 6 product

**Severity:** Medium  
**Type:** Product Information / Data Consistency  
**Reproducibility:** Consistently reproducible

### Steps to Reproduce

1. Navigate to the DemoBlaze homepage.
2. Select the **Iphone 6 32gb** product.
3. Observe the product title.
4. Compare the storage capacity stated in the title with the product description.

### Observed Behaviour

The product title displays:

`Iphone 6 32gb`

However, the product description states:

`It has 16GB of internal storage`

The same product page therefore presents two different storage capacities: **32GB** in the product title and **16GB** in the description.

### Expected Behaviour

The product title and description should display consistent storage capacity information.

The correct capacity should be confirmed with the product owner or authoritative product data source before determining whether the title or description should be updated.

### Impact

Inconsistent product specifications could mislead customers about the product they are purchasing and reduce confidence in the accuracy of product information.

---

## DB-04 - Signup accepts weak and insufficiently validated user input

**Severity:** Medium  
**Type:** Validation / Data Quality Observation

### Test Coverage

Exploratory testing was performed against the Signup functionality using:

- Empty username and password
- Empty username
- Empty password
- Duplicate username
- Very short username
- Very short password
- Very long username
- Very long password
- Whitespace-only username
- Username containing leading/trailing whitespace
- Username containing special characters
- Password containing special characters
- Numeric-only username

### Observed Behaviour

The application correctly rejected empty mandatory fields with:

`Please fill out Username and Password.`

Duplicate usernames were also rejected with:

`This user already exist.`

However, further exploratory testing identified limited input validation.

The application accepted registration using:

- A very short password
- Very long password values
- Usernames containing leading/trailing whitespace
- Usernames containing special characters
- Numeric-only usernames

A whitespace-only username returned:

`This user already exist.`

This indicates that a whitespace-only username may already exist in the shared environment, although this could not be confirmed as having been created during this test session.

### Expected Behaviour

Signup should apply clearly defined validation rules to username and password fields.

At minimum, whitespace-only values should be treated as empty input rather than valid account data.

Username and password length, character and password-strength requirements should be agreed with the product owner and communicated to users before additional behaviour is classified as defective.

### Impact

Insufficient input validation can result in poor-quality account data and potentially allow accounts to be created using unintended credential formats.

### Assessment Note

Not every observed behaviour has been classified as an individual defect because the application does not provide explicit requirements for username format or password complexity.

The findings have therefore been consolidated as a validation observation pending confirmation of the intended business rules.

---

## Testing Note

Testing was performed against a shared public test environment. Findings were based on reproducible or directly observed application behaviour.

Where expected business rules were not defined, assumptions have been identified rather than treating every unexpected behaviour as a confirmed defect.
