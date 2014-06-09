/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var LoginStatusModel = Backbone.Model.extend({
        url: '',

        initialize: function() {
        },

        defaults: {
            loggedIn: false,
            user: {}
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

    return LoginStatusModel;
});
