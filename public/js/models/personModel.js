var app = app || {};

app.personModel = Backbone.Model.extend({
    defaults: {
        name  : "",
        age   : "0",
        gender: "unknown",
        img   : "images/placeholder.jpg",
        link  : "",
        detail: ""
    },
    initialize: function(){
        this.on("change:name",function(){
            console.log(this.get("name") + " has changed");
        });
    },
    urlRoot: "/persons"
});

// create : post   /persons
// read   : get    /persons:id
// update : put    /persons:id
// destroy: delete /persons:id