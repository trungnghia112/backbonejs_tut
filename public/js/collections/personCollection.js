var app = app || {};

app.personCollection = Backbone.Collection.extend({
    model: app.personModel
});