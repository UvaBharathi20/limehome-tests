const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  fixturesFolder: 'cypress/fixtures',
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',
  reporter: 'cypress-mochawesome-reporter',
  video: true,
  reporterOptions: {
    reportDir: "cypress/report",
    charts: true,
    reportPageTitle: 'Cypress Inline Reporter',
    embeddedScreenshots: true,
    inlineAssets: true, //Adds the asserts inline
  },
  e2e: {
    setupNodeEvents(on, config) {
      /* 
      If you have any custom Cypress logic you want to implement, put it in this function.
      For more info, see https://docs.cypress.io/guides/tooling/plugins-guide
      and also https://docs.cypress.io/api/plugins/writing-a-plugin
      Alternatively, you can import your old plugins/index.js file by uncommenting line 17
      */
      // return require('cypress/plugins/index.js')(on, config)
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: 'http://juliemr.github.io/protractor-demo/',
  },
})
