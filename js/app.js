var person1 = new app.personModel({
    name  : "Person 01",
    age   : "30",
    gender: "male",
    img   : "images/01.png",
    link  : "1",
    detail: "Person 01 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, at deserunt dolor dolorum earum enim eos id illum numquam provident quae quibusdam, quo recusandae rem repudiandae sapiente sunt ut voluptatem!"
});

var person2 = new app.personModel({
    name  : "Person 02",
    age   : "20",
    gender: "male",
    img   : "images/02.png",
    link  : "2",
    detail: "Person 02 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, at deserunt dolor dolorum earum enim eos id illum numquam provident quae quibusdam, quo recusandae rem repudiandae sapiente sunt ut voluptatem!"
});

var person3 = new app.personModel({
    name  : "Person 03",
    age   : "25",
    gender: "female",
    img   : "images/03.png",
    link  : "3",
    detail: "Person 03 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, at deserunt dolor dolorum earum enim eos id illum numquam provident quae quibusdam, quo recusandae rem repudiandae sapiente sunt ut voluptatem!"
});

var groupPerson = new app.personCollection([
    person1, person2, person3
]);

var templatePerson = new app.allPersonView({
    collection: groupPerson
})

$("#listPerson").html(templatePerson.render().el);

var routerPerson = new app.personRouter();

Backbone.history.start();