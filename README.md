![CI/CD](https://github.com/sharminmanjur/cypress-ecommerce-automation/actions/workflows/buildspec.yml/badge.svg)

# Automation Exercise - Cypress Test Suite

A comprehensive Cypress-based test automation framework with Cucumber BDD testing, API testing, and detailed reporting capabilities.

## Related Repositories

- **E-commerce Automation:** [cypress-ecommerce-automation](https://github.com/sharminmanjur/cypress-ecommerce-automation)

## Prerequisites
- Node.js (v22 recommended)
- npm (v10 or higher)

## Installation

```bash
# 1. Clone the repository
git clone https://github.com/sharminmanjur/cypress-ecommerce-automation
cd cypress-ecommerce-automation

# 2. Install project dependencies
npm install
```

# Running Tests

## Basic Test Execution

### Run all tests (Electron - default)
```bash
npm run cy:run
```

### Run tests with Chrome
```bash
# Headless mode (background)
npm run cy:run:chrome

# Headed mode (visible browser window)
npm run cy:run:chrome:headed
```

### Run tests with Firefox
```bash
# Headless mode (background) - requires Firefox to be installed
npm run cy:run:firefox

# Headed mode (visible browser window)
npm run cy:run:firefox:headed
```

## Running Tests with Dynamic Credentials

Credentials are passed via environment variables. All credential configuration is managed through GitHub Actions settings.

### Available credential environment variables
- `USER_NAME` - User full name
- `USER_EMAIL` - User email address
- `USER_PASSWORD` - User password
- `FIRST_NAME` - First name
- `LAST_NAME` - Last name
- `ADDRESS1` - Primary address
- `ADDRESS2` - Secondary address
- `COUNTRY` - Country
- `STATE` - State/Province
- `CITY` - City
- `ZIPCODE` - Postal code
- `MOBILE_NUMBER` - Phone number

## Run tests in parallel
```bash
# Parallel with Electron (default)
npm run cy:parallel

# Parallel with Chrome (2 workers)
npm run cy:parallel:chrome

# Parallel with Firefox (2 workers) - requires Firefox to be installed
npm run cy:parallel:firefox
```

## Run tests with Allure report generation
```bash
npm run cy:run:allure
```

## Open Cypress UI (interactive mode)
```bash
npm run cy:open
```

## Verify Cypress installation
```bash
npm run cy:verify
```

## Check Cypress version
```bash
npm run cy:version
```

## Get system information
```bash
npm run cy:info
```

# Test Reports

## Generated Test Reports

After running tests, the following reports are automatically generated:

### 1. HTML Test Report
- **Location:** `test-report.html`
- **Description:** Custom comprehensive test report with interactive features
- **Features:** Expandable test scenarios, color-coded results, execution time tracking

### 2. Cucumber Report
- **Location:** `cucumber-report.html`
- **Description:** Detailed Cucumber HTML report
- **Features:** Step-by-step execution details, feature summaries

### 3. JSON Logs
- **Location:** `jsonlogs/log.json` and `jsonlogs/messages.ndjson`
- **Description:** Machine-readable test results
- **Use Cases:** Integration with CI/CD tools, custom reporting

### 4. Allure Results
- **Location:** `allure-results/` directory
- **Description:** Allure test metrics and analytics
- **Note:** Requires Java installation to generate visual dashboards

## CI/CD Integration

The project is configured with GitHub Actions for continuous integration and testing. All environment variables are configured in the GitHub Actions settings.

To view the configured environment variables, navigate to your GitHub repository:
1. Go to **Settings** → **Secrets and variables** → **Actions**
2. You will see all the environment variables used for testing

### Automatic Workflow Triggers

The GitHub Actions workflow (`.github/workflows/buildspec.yml`) runs automatically under the following conditions:

- **Push Events:** When code is pushed to the `main` branch
- **Pull Requests:** When a pull request is created or updated targeting the `main` branch

### Manual Workflow Trigger

You can also manually trigger the workflow:
1. Go to your GitHub repository → **Actions** tab
2. Select the **Cypress Tests** workflow
3. Click **Run workflow** button

### Workflow Actions

When triggered, the workflow:
- Executes all Cypress tests with the configured environment variables
- Generates test reports and artifacts
- Uploads test artifacts (videos, screenshots, reports) for review
- Can be monitored in real-time in the Actions tab

# Project Structure

```
cypress-test/
├── cypress/
│   ├── e2e/
│   │   ├── features/              # Gherkin feature files (BDD)
│   │   │   ├── API.feature        # API testing scenarios
│   │   │   ├── purchaseflow.feature # E2E purchase flow
│   │   │   └── signup.feature     # User registration tests
│   │   └── step_definitions/      # Step implementation files
│   ├── downloads/                 # Downloaded files during tests
│   ├── fixtures/                  # Test data files
│   ├── support/                   # Global hooks and commands
│   └── plugins/                   # Cypress plugins
│
├── .github/
│   └── workflows/
│       └── builspec.yml           # GitHub Actions CI/CD workflow
│
├── jsonlogs/                      # Generated JSON test logs
├── runner-results/                # Test runner output
├── allure-results/                # Generated Allure results (gitignored)
│
├── .gitignore                     # Git ignore rules
├── cypress.config.js              # Cypress configuration
├── package.json                   # Project dependencies
├── package-lock.json              # Locked dependency versions
└── README.md                      # This file
```

# Test Scenarios

## 1. API Testing (API.feature)
- **Scenario:** Create a User Account API
- **Purpose:** Validates API endpoint for user account creation
- **Status:** ✅ Passing

## 2. E2E Purchase Flow (purchaseflow.feature)
- **Scenario:** Place order with product selection and checkout
- **Purpose:** Tests complete purchase workflow from product selection to order completion
- **Status:** ✅ Passing

## 3. User Registration (signup.feature)
- **Scenario:** Create a User Account
- **Purpose:** Validates user signup and account creation process
- **Status:** ✅ Passing

# Configuration Files

## cypress.config.js
Main Cypress configuration file including:
- Cucumber preprocessor setup
- Allure plugin integration
- Browser security and timeout settings
- Download folder configuration

## .cypress-cucumber-preprocessorrc.json
Cucumber preprocessor configuration:
- JSON report output (`jsonlogs/log.json`)
- Message format output (`jsonlogs/messages.ndjson`)
- HTML report generation
- Step definition paths

## .gitignore
Excludes the following from version control:
- `node_modules/` - Dependencies
- `cypress/screenshots/` and `cypress/downloads/` - Test artifacts
- `jsonlogs/` - Test logs
- `runner-results/` - Runner output
- `allure-results/` - Allure reports
- `*.html` - Generated HTML reports (test-report.html, cucumber-report.html)

# Notes

- Feature files use Gherkin syntax (Given, When, Then) for BDD testing
- Step definitions are centralized in `cypress/e2e/step_definitions/stepDefinitions.js`
- All generated reports and logs are automatically added to `.gitignore` to keep repository clean
- Test reports include execution time, pass/fail status, and detailed step information
