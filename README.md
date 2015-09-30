# BackboneJS Tutorial

## Overview

Backbone.js is the key to keeping your javascript code neat and separating your markup from the data powering your web applications.

## Working with the code

You can follow along with this tutorial and hack on the code in the comfort of your own computer. In this way you can get hands-on practice of really writing BackboneJS code.

The tutorial relies on the use of the Git versioning system for source code management. You don't need to know anything about Git to follow the tutorial other than how to install and run a few git commands.

## Prerequisites

### Git

- A good place to learn about setting up git is [here](http://help.github.com/set-up-git-redirect).
- Git [home](http://git-scm.com/) (download, documentation).

### NodeJS and Tools

- Get [Node.js](http://nodejs.org/download/).
- Install the tool dependencies (`npm install`).

## Commits / Tutorial Outline

You can check out any point of the tutorial using git checkout step-?

To see the changes which between any two lessons use the git diff command. git diff step-?..step-?

### step-0

- Setting up our files.

### step-1

- Adding properties to the model.

#### Creating a model

Add this to `js/app.js`

#### Namespace our app

```javascript
var app = app || {};
```

#### Creating a simple Backbone Model

```javascript
app.personModel = Backbone.Model.extend({

});
```


#### Instantiating a Model

```javascript
var person1 = new app.personModel();
```

#### Defining Functions in a Model

```javascript
app.personModel = Backbone.Model.extend({
    defaults: {
        name  : "",
        age   : "0",
        gender: "unknown",
        img   : "images/placeholder.jpg",
        link  : "#"
    }
});
```

#### The initialize function

```javascript
app.personModel = Backbone.Model.extend({
    defaults: {
        name  : "",
        age   : "0",
        gender: "unknown",
        img   : "images/placeholder.jpg",
        link  : "#"
    },
    initialize: function(){
    	console.log('personModel has been intialized');
        this.on("change:name",function(){
            console.log(this.get("name") + " has changed");
        });
    }
});
```

#### Listening Model attribute changes (name)

```javascript
initialize: function(){
  this.on("change:name",function(){
  	console.log(this.get("name") + " has changed");
  });
}
```

#### How to specify the model attributes

```javascript
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
```

#### More about Backbone Models

Click console and try:

```javascript
person1.get("name"); 
person1.set("name", "Person 000001");
```
see more [here](http://backbonejs.org/#Model).

### step-2

- Creating a collection of models.

#### Creating a collection

Add this to `js/collections/personCollection.js`

```javascript
var app = app || {};

app.personCollection = Backbone.Collection.extend({

});
```

Moving a model from `js/app.js` to `js/models/personModel.js`

```javascript
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
```

#### Specifying the model for a collection

```javascript
app.personCollection = Backbone.Collection.extend({
	model: app.personModel
});
```

#### Instantiating a Collection

Add this to `js/app.js`

```javascript
var groupPerson = new app.personCollection([
    person1, person2, person3
]);

console.log(groupPerson.toJSON());
```

#### More about Backbone Collections
Click console and try:

```javascript
groupPerson.length;
groupPerson.remove(person1);
groupPerson.at(0);
groupPerson.reset();
```

see more [here](http://backbonejs.org/#Collection).

### step-3

- Creating a Script Template

#### The template is defined in the HTML file itself as:

Add this to `index.html`

```javascript
<script id="itemPerson" type="text/template">
    <div class="media">
        <div class="media-left media-middle">
            <a href="<%= link %>"><img class="media-object" width="100" src="<%= img %>" alt="<%= name %>"></a>
        </div>
        <div class="media-body">
            <h4 class="media-heading"><%= name %></h4>
            <ul>
                <li>Age: <%= age %></li>
                <li>Gender: <%= gender %></li>
            </ul>
        </div>
    </div>
</script>
```

### step-4

- Creating a collection view and loading model data

#### Creating a single view

Add this to `js/views/personView.js`

```javascript
var app = app || {};

app.personView = Backbone.View.extend({

});
```

#### Creating a view that will create its own DOM element

```javascript
app.personView = Backbone.View.extend({
    tagName   : "li",
    className : "list-group-item",
});
```

When we create this view, we can see that the view is associated with a li which was created using our specified tagName and className values.

#### Using templates


```javascript
app.personView = Backbone.View.extend({
    tagName   : "li",
    className : "list-group-item",

    template: _.template($("#itemPerson").html()),

    render: function() {
        this.$el.html(this.template(this.model.attributes));
        return this;
    }
});
```

see more [here](http://backbonejs.org/#View-template).

#### Creating a collection view

Add this to `js/views/allPersonView.js`

```javascript
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
```

see more [here](http://backbonejs.org/#FAQ-this).


#### Loading model data on a webpage

Add this to `index.html`

```html
<div class="container">
    <h1>List of persons</h1>
    <div id="listPerson"></div>
</div>
```

Add this to `js/app.js`

```javascript
var templatePerson = new app.allPersonView({
    collection: groupPerson
})

$("#listPerson").html(templatePerson.render().el);
```

### step-5

- Understanding Backbone events

#### Listening to DOM events

Add this below the render method in `js/views/personView.js`

```javascript
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
```

### step-6

- Understanding how route links work

#### Creating Backbone Routes

Add this to `js/routes/personRouter.js`

```javascript
var app = app || {};

app.personRouter = Backbone.Router.extend({

});
```

Modify template link `href="<%= link %>"` to `href="#<%= link %>"`

Modify `link` in our person1 model `link  : "#"` to `link  : "1"`, ...

Add `detail` attributes in our person model `detail: "Lorem ipsum dolor sit amet..."`

#### Invoking and requesting Routes

> - Invoking Route: Application wants to navigate to a specific route.
> - Route Request: User Enters the fully qualified URL (this will work seamlessly)

Parameters can be defined as "route/:param"

```javascript
app.personRouter = Backbone.Router.extend({
    routes: {
        ""       : "noShow",
        "index"  : "noShow",
        ":id"    : "showPerson"
    },

    noShow: function(){
        $("#listPerson").show();
        $("h1").html("List of persons");
        $("#detailPerson").remove()
    },

    showPerson: function(id){
        var detailPerson = groupPerson.toJSON();
        $(".container").append('<div id="detailPerson"></div>');
        $("#listPerson,#detailPerson").hide();
        $("h1").html("<a href='#index'>Back</a>");

        if(id > 0 && id <= detailPerson.length){
            $.each( detailPerson, function( key, value ) {
                if(id == value.link.replace("#", "")){
                    $("#detailPerson").html(value.detail).fadeIn();
                }
            });
        }else {
            $("#detailPerson").html('404 Error Page Not Found').fadeIn();
        }
    }
});
```

#### Backbone History and Instantiating Routes

Add this inside to the bottom of `js/app.js`

```javascript
var routerPerson = new app.personRouter();

Backbone.history.start();
```

----------


## Application Directory Layout 
<pre>
backbonejs_tut/  
├── images/
│   ├── 01.png
│   ├── 02.png
│   ├── 03.png
│   ├── 04.png
│   ├── 05.png
│   ├── 06.png
│   ├── 07.png
│   ├── 08.png
│   ├── 09.png
│   ├── 10.png
│   └── placeholder.jpg
├── js/
│   ├── collections
│   │   └── personCollection.js
│   ├── models
│   │   └── personModel.js
│   ├── routes
│   │   └── personRouter.js
│   └── views
│   │   ├── allPersonView.js
│   │   └── personView.js
│   └── app.js
└── index.html
</pre>

## Contact

- [https://twitter.com/trungnghia112](https://twitter.com/trungnghia112)
- [https://github.com/trungnghia112](https://github.com/trungnghia112)