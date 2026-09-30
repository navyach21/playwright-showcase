# Playwright Test Automation Showcase

A UI + API test automation framework built with [Playwright](https://playwright.dev),
created while applying an existing manual and API testing background
(4+ years, Postman, Selenium/Java) to structured test automation.

Tests run against the public demo site [automationexercise.com](https://automationexercise.com).

## What this demonstrates

- **Page Object Model** — locators and actions separated from test logic (`/pages`)
- **Data-driven testing** — the same test executed across multiple data sets (`/fixtures`)
- **UI test automation** — search functionality, login validation, dynamic result handling
- **API testing** — GET/POST requests against a live API, response schema and status
  code validation, using Playwright's built-in `request` fixture
- **CI/CD** — tests run automatically on every push via GitHub Actions, with the
  HTML report uploaded as a build artifact

## Project structure

```
├── tests/
│   ├── ui/          UI test specs (Page Object Model)
│   └── api/          API test specs
├── pages/            Page Object classes
├── fixtures/          Test data
├── playwright.config.ts
└── .github/workflows/ CI pipeline
```

## Running locally

```bash
npm install
npx playwright install
npm test              # run all tests
npm run test:ui       # UI tests only
npm run test:api      # API tests only
npm run report        # open the last HTML report
```

## Notes

This project is a work in progress as I continue building automation skills
alongside my manual and API testing background. Suggestions and PRs welcome.
