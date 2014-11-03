    var server= "http://tiy-atl-fe-server.herokuapp.com/collections/pharoah";

    //define instances of Feeling here



    //define instances of Feeling here

    
    var all_feelings = new Feelings();



    all_feelings.fetch().done( function() {
      var feelings_view = new FeelingsView({
        collection:all_feelings
      });
    });
