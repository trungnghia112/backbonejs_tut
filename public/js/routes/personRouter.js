var app = app || {};

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