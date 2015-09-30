var app = app || {};

app.allPersonView = Backbone.View.extend({
    tagName   : "ul",
    className : "list-group",

    render: function() {
        this.collection.each(this.addPerson, this);
        return this;
    },

    addPerson: function(x){
        var personRender = new app.personView({model:x})
        this.$el.append(personRender.render().el);
    }
});