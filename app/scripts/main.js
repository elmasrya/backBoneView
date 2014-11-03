var server= "http://tiy-atl-fe-server.herokuapp.com/collections/pharoah";
//
// //Student is my model



var Feeling = Backbone.Model.extend({

  defaults: {
    title:'',
    cause: '',
    type: ''
  },
  //set it to the id of the api
  idAttribute: '_id',

  //make sure initialize is spelled correctly
  initialize: function () {
    console.log('I have been created');

  }

  });

  var Feelings = Backbone.Collection.extend({
      model:Feeling,
      url: server
      });
