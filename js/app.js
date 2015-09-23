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

var groupPerson = new app.personCollection([
    person1, person2, person3
]);

var templatePerson = new app.allPersonView({
    collection: groupPerson
})

$("#listPerson").html(templatePerson.render().el);