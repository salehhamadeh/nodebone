/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var AppModel = Backbone.Model.extend({
        url: '',

        initialize: function() {
        },

        defaults: {
            page: "login",
            user: {}
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

    return AppModel;
});
