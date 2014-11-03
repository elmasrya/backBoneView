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
