var FeelingsView = Backbone.View.extend({




  tagName: "ul",
  className: "feels",


  initialize: function(options) {
      // console.log('initialized');
      this.render(options.collection);
      // console.log('i am rendered');
      },

  render: function(collection) {

    var self=this;

    //straight up underscore template
    var template = $('#feels').html();
    var rendered = _.template(template);

    //interating over models
    _.each(collection.models, function (c) {
      //each iteration....appending the data
      //to our element that backbone created
      self.$el.append(rendered(c.attributes));
    });

    $('#feelsContainer').html(this.el)
    return this;

  }

});



//
// events: {
//   "click .icon":          "open",
//   "click .button.edit":   "openEditDialog",
//   "click .button.delete": "destroy"
// },
//
