
const { defineConfig } = require("cypress")
//const cypress = require("cypress")

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 10000,
  e2e: {

    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    watchForFileChanges: true,
   // specPattern: 'cypress/integration/examples/*.js',
    specPattern: ["cypress/e2e/Specs/*.{feature,features}",
    
    
  ],
},
});
