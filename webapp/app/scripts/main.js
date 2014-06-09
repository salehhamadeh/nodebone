/*global require*/
'use strict';

require.config({
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        bootstrap: '../bower_components/sass-bootstrap/dist/js/bootstrap',
        text: "../bower_components/requirejs-text/text"
    }
});

require([
    'backbone',
    'views/AppView',
    'models/App'
], function (Backbone, AppView, AppModel) {
    Backbone.history.start();

    //TODO: Initialize AppModel from cookie
    
    //Initialize the application view
    new AppView({ model: new AppModel() });
});
