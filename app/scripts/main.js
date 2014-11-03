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
    var feel = this.get('title');
    console.log(feel + ' feeling has been created');

  }

  });

  var Feelings = Backbone.Collection.extend({
      model:Feeling,
      url: server
      });

      var all_feelings = new Feelings();

      var feeling1 = new Feeling({

          title:'Agitated',
          cause: 'Wont Work',
          type: 'low'
        });

      var feeling2 = new Feeling({

          title:'Happy',
          cause: 'Works',
          type: 'high'
        });

      var feeling3 = new Feeling({

        title:'Inquisitive',
        cause: 'Learning Something New',
        type: 'high'
      });
