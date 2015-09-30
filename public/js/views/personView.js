var app = app || {};

app.personView = Backbone.View.extend({
    tagName   : "li",
    className : "list-group-item",

    template: _.template($("#itemPerson").html()),

    render: function() {
        this.$el.html(this.template(this.model.attributes));
        return this;
    },

    events: {
        'mouseover': 'addBgColor',
        'mouseout' : 'removeBgColor'
    },

    addBgColor: function(){
        this.$el.css("background-color","lightblue");
    },

    removeBgColor: function(){
        this.$el.css("background-color","transparent");
    }
})