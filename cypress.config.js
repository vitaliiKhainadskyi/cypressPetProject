import { defineConfig } from "cypress";

module.exports = defineConfig({
  projectId: '9fqapc',
  e2e: {
    baseUrl: 'http://localhost:8000/',
    specPattern: "cypress/tests/**/*.spec.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/e2e.ts",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
