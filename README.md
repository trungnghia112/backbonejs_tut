#BackboneJS Tutorial
##Overview
Backbone.js is the key to keeping your javascript code neat and separating your markup from the data powering your web applications.

##Working with the code
You can follow along with this tutorial and hack on the code in the comfort of your own computer. In this way you can get hands-on practice of really writing BackboneJS code.

The tutorial relies on the use of the Git versioning system for source code management. You don't need to know anything about Git to follow the tutorial other than how to install and run a few git commands.

##Prerequisites
###Git
- A good place to learn about setting up git is [here](http://help.github.com/set-up-git-redirect).
- Git [home](http://git-scm.com/) (download, documentation).
###Node.js and Tools
- Get [Node.js](http://nodejs.org/download/).
- Install the tool dependencies (`npm install`).
##Commits / Tutorial Outline
You can check out any point of the tutorial using git checkout step-?
To see the changes which between any two lessons use the git diff command. git diff step-?..step-?
###step-0
- Setting up our files.
###step-1
- Adding properties to the model.
####Creating a model
Add this to `js/app.js`
####Namespace our app
> var app = app || {};
####Creating a simple backbone.js Model
> app.personModel = Backbone.Model.extend({
> 
> });

####Instantiating a Model
> var person1 = new app.personModel();
####Defining Functions in a Model
> app.personModel = Backbone.Model.extend({
&nbsp;&nbsp;&nbsp;&nbsp;defaults: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name  : "",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;age   : "0",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;gender: "unknown",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;img   : "images/placeholder.jpg",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;link  : "#"
&nbsp;&nbsp;&nbsp;&nbsp;}
});
####The initialize function
> app.personModel = Backbone.Model.extend({
&nbsp;&nbsp;&nbsp;&nbsp;defaults: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name  : "",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;age   : "0",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;gender: "unknown",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;img   : "images/placeholder.jpg",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;link  : "#"
&nbsp;&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;&nbsp;&nbsp;initialize: function(){
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log('Person has been intialized');
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.on("change:name",function(){
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log(this.get("name") + " has changed");
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});
&nbsp;&nbsp;&nbsp;&nbsp;}
});

Listening Model attribute changes (name)
>this.on("change:name",function(){
&nbsp;&nbsp;&nbsp;&nbsp;console.log(this.get("name") + " has changed");
});
####More about Backbone Models
Click Console and try:
> person1.get("name");
> person1.set("name", "Person 000001");

see more [here](http://backbonejs.org/#Model).

###step-2
- Creating a collection of models.
####Creating a collection
Add this to `js/collections/personCollection.js`
>var app = app || {};
>app.personCollection = Backbone.Collection.extend({

>});

Moving a model from `app.js` to `js/models/personModel.js`
> app.personModel = Backbone.Model.extend({
&nbsp;&nbsp;&nbsp;&nbsp;defaults: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name  : "",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;age   : "0",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;gender: "unknown",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;img   : "images/placeholder.jpg",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;link  : "#"
&nbsp;&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;&nbsp;&nbsp;initialize: function(){
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log('Person has been intialized');
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.on("change:name",function(){
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log(this.get("name") + " has changed");
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});
&nbsp;&nbsp;&nbsp;&nbsp;}
});

####Specifying the model for a collection
>app.personCollection = Backbone.Collection.extend({
&nbsp;&nbsp;&nbsp;&nbsp;model: app.personModel
});

####Instantiating a collection
Add this to `js/app.js`
>var groupPerson = new app.personCollection([
&nbsp;&nbsp;&nbsp;&nbsp;person1, person2, person3
]);
console.log(groupPerson.toJSON());

####More about Backbone Collection
Click Console and try:
> groupPerson.length;
> groupPerson.remove(person1);
> groupPerson.at(0);
> groupPerson.reset();

see more [here](http://backbonejs.org/#Collection).
