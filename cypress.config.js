const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      // Add Allure plugin
      allureWriter(on, config);

      // Add the Cucumber preprocessor plugin FIRST
      await addCucumberPreprocessorPlugin(on, config);

      // Initialize the bundler with the esbuild plugin for cucumber
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)]
      });

      // Register the file preprocessor to use the bundler
      on("file:preprocessor", bundler);

      return config;
    },
    // Pattern for spec files
    specPattern: "cypress/e2e/features/**/*.feature",

    // Define folder for downloads
    downloadsFolder: 'cypress/downloads',

    // Test configuration options
    video: false,
    chromeWebSecurity: false,
    defaultCommandTimeout: 15000,
    pageLoadTimeout: 120000,
    requestTimeout: 10000,
    watchForFileChanges: false
  },
});