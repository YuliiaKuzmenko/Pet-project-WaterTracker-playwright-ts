# Water Tracker Automation Testing

This project utilizes **Playwright** with **TypeScript** to automate end-to-end testing for the Water Tracker Frontend:  
[https://nadiiapavliuchenko.github.io/WaterTrackerFrontend/](https://nadiiapavliuchenko.github.io/WaterTrackerFrontend/)
API:[https://tracker-of-water-oqqk.onrender.com/api/api-docs/#/](https://tracker-of-water-oqqk.onrender.com/api/api-docs/#/)

The primary goal is to ensure seamless user interactions and validate core functionalities such as tracking daily water intake, updating hydration goals, and navigating through the application.

---

## 🛠️ Prerequisites

Before running the tests, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16.x or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [Visual Studio Code](https://code.visualstudio.com/) (for the best development experience)

---

## 📦 Installation

1. Clone this repository:
   - git clone https://github.com/YuliiaKuzmenko/Pet-project-WaterTracker-playwright-ts.git
   - cd WaterTracker/

2. Install the required dependencies:
    - npm install

3. Open the project in Visual Studio Code:
    - code .

## 🔧 Configuration
Test configurations can be adjusted in the `playwright.config.ts` file. This includes settings for:

- **Browsers**: Chromium, Firefox, WebKit
- **Base URL**
- **Timeout durations**
- **Test retries**

For TypeScript support and integration with Visual Studio Code, make sure your `tsconfig.json` includes the following settings for proper syntax highlighting and code completion:

{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist"
  },
  "include": [
    "tests/**/*.ts",
    "playwright.config.ts"
  ]
}

To enhance your development experience with syntax highlighting and IntelliSense, install the following Visual Studio Code extensions:

- [Playwright Test Runner](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)
- [Prettier – Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## 🧪 Running Tests

Execute the tests using the following command from the Visual Studio Code integrated terminal:
 - npx playwright test (Runs the end-to-end tests).

- npx playwright test --ui (Starts the interactive UI mode).

- npx playwright test --project=chromium (Runs the tests only on Desktop Chrome).

- npx playwright test example (Runs the tests in a specific file).

- npx playwright test --debug (Runs the tests in debug mode).

- npx playwright codegen (Auto generate tests with Codegen).

## 📁 Project Structure

- `tests/` – Contains all test scripts.
- `playwright.config.ts` – Configuration file for Playwright settings.
- `package.json` – Project metadata and scripts.
- `tsconfig.json` – TypeScript configuration file for Visual Studio Code syntax highlighting.

## 🧑‍💻 Contributing

Contributions are welcome! Please follow these steps:
1. **Fork** the repository.
2. **Create a new branch**:
   - git checkout -b feature/your-feature
3. **Commit your changes**:
   - git commit -am 'Add new feature'
4. **Push to the branch**:
   - git push origin feature/your-feature
5. **Create a new Pull Request**
