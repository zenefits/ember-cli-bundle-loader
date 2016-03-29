/*jshint node:true*/
var EmberAppWithPackages = require('./lib/broccoli/ember-app-with-packages');

module.exports = function (defaults) {
  var emberAppWithPackages = new EmberAppWithPackages(defaults, {
    basePath: 'tests/dummy/',
    sharedBuildConfig: {
      // This configuration applies to the app config as well as all the packages
    },
    appBuildConfig: {
      // This configuration applies to the app only and is different than the configuration used by packages
    },
    packagesBuildConfig: {
      // This configuration applies to the app only and is different than the configuration used by the app
    }
  });

  // Use `emberAppWithPackages.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return emberAppWithPackages.toTree();
};
