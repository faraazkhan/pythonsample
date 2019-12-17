// Require.js Configurations

require.config({
  paths: {
    // Core Libraries
    backbone: "../polls/vendor/backbone/backbone",
    bootstrap: "../polls/vendor/bootstrap/bootstrap",
    jpanel: "../polls/vendor/jpanelmenu/jquery.jpanelmenu",
    jquery: "../polls/vendor/jquery/jquery",
    jqueryui: "../polls/vendor/jquery-ui/ui/jquery-ui",
    underscore: "../polls/vendor/lodash/lodash",
    respond: "../polls/vendor/respond/respond.src"
  },
  shim: {
    // Backbone
    backbone: {
      // Depends on underscore/lodash and jQuery
      deps: ["underscore", "jquery"],

      // Exports the global window.Backbone object
      exports: "Backbone"
    }
  }
});
