/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'views/loginView',
    'models/LoginStatus'
], function ($, _, Backbone, loginView, LoginStatus) {
    'use strict';

    var AppViewView = Backbone.View.extend({
        el: '#appview',

        //template: template,

        tagName: 'div',

        events: {},

        initialize: function () {
            this.loginView = new loginView({ model: new LoginStatus()});
            this.loginView.model.bind('change:loggedIn', this.loginChanged, this);
            //TODO: Research Event Aggregator design pattern for AppView
            //TODO: Do not send password on login successful
            //TODO: Define User model: FirstName, LastName, Email, PasswordHash
            this.render();
        },

        render: function () {
            if (this.model.get('page') == "login") {
                this.$el.html(this.loginView.render().el);
            } else if (this.model.get('page') == "dashboard") {
                this.$el.html("Welcome, " + this.model.get('user').firstName + " " + this.model.get('user').lastName);
            } else {
                this.$el.html("404 Not Found (in-app)");
            }

            return this;
        },

        loginChanged: function() {
            if (this.loginView.model.get('loggedIn')) {
                this.model.set({ user: this.loginView.model.get('user') });
                this.model.set({ page: "dashboard" });
            } else {
                this.model.set({ user: {} });
                this.model.set({ page: "login" });
            }

            this.render();
        }
    });

    return AppViewView;
});
