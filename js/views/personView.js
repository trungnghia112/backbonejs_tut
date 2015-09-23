var app = app || {};

app.personView = Backbone.View.extend({
    tagName   : "li",
    className : "list-group-item",

    template: _.template($("#itemPerson").html()),

    render: function() {
        this.$el.html(this.template(this.model.attributes));
        return this;
    }
})