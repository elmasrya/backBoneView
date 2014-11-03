var server= "http://tiy-atl-fe-server.herokuapp.com/collections/pharoah"

var Feelings = Backbone.Collection.extend({
    model:Feeling,
    url: server
    });
