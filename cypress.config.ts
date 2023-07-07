import { defineConfig } from "cypress";
import * as fs from "fs";

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  projectId: '9fqapc',
  env: {
    apiUrl: 'http://localhost:5002/'
  },
  e2e: {
    retries: {
      runMode: 3,
      openMode: 3,
    },
    trashAssetsBeforeRuns: true,
    specPattern: "cypress/tests/**/*.spec.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/e2e.ts",
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

      const appUrls = {
        localhost: 'http://localhost:5003/',
        qa: 'http://localhost:5003/',
        api: 'http://localhost:5002/',
        dev: 'http://localhost:9000/'
      }
      const appUrl = config.env.type || appUrls.localhost;

      config.baseUrl = appUrls[appUrl];

      on('after:spec', (spec, results) => {
          if (results && results.video && results.stats.failures === 0) {
            fs.unlinkSync(results.video)
          }
      })

      on('before:browser:launch', (browser, launchOptions) => {
        // `args` is an array of all the arguments that will
        // be passed to browsers when it launches
        console.log(launchOptions.args) // print all current args

        if (browser.family === 'chromium' && browser.name !== 'electron') {
          // auto open devtools
          launchOptions.args.push('--auto-open-devtools-for-tabs')
        }

        if (browser.family === 'firefox') {
          // auto open devtools
          launchOptions.args.push('-devtools')
        }

        if (browser.name === 'electron') {
          // auto open devtools
          launchOptions.preferences.devTools = true
        }

        // whatever you return here becomes the launchOptions
        return launchOptions
      })
      return config;
    },
  },
});
