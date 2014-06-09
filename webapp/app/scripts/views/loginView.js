/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/loginView.ejs'
], function ($, _, Backbone, template) {
    'use strict';

    var LoginViewView = Backbone.View.extend({
        template: template,

        tagName: 'form',

        id: '',

        className: 'form-signin',

        attributes: {
            role: "form",
            method: "post",
            action: "http://localhost:4722/api/login"
        },

        events: {
            'submit': 'login'
        },

        url: "http://localhost:4722/api/login",

        initialize: function () {
        },

        render: function () {
            this.$el.html(this.template);

            return this;
        },

        login: function(e) {
            e.preventDefault();
            var thisView = this;

            $.ajax({
               type: "POST",
               url: this.url,
               data: this.$el.serialize(), // serializes the form's elements.
               success: function(data)
               {
                   thisView.model.set({user: data});
                   thisView.model.set({loggedIn: true});
               }
            });
        }
    });

    return LoginViewView;
});
