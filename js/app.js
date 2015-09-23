var app = app || {};

app.personModel = Backbone.Model.extend({
    defaults: {
        name  : "",
        age   : "0",
        gender: "unknown",
        img   : "images/placeholder.jpg",
        link  : "#"
    },
    initialize: function(){
        this.on("change:name",function(){
            console.log(this.get("name") + " has changed");
        });
    }
});

var person1 = new app.personModel({
    name  : "Person 01",
    age   : "30",
    gender: "male",
    img   : "images/01.png",
    link  : "#"
});

var person2 = new app.personModel({
    name  : "Person 02",
    age   : "20",
    gender: "male",
    img   : "images/02.png",
    link  : "#"
});

var person3 = new app.personModel({
    name  : "Person 03",
    age   : "25",
    gender: "female",
    img   : "images/03.png",
    link  : "#"
});

//change the name
person2.set("name", "Person 000002");

console.log(person1.toJSON());
console.log(person2.toJSON());
console.log(person3.get("img"));