var IndexRoute = Ember.Route.extend({
  model: function() {
    //var posts = [];
    //return this.store.find('post');
    // return new Ember.RSVP.Promise(function(resolve, reject) {
    //   $.getJSON('https://intuitivepixel.iriscouch.com:6984/components-dev/_design/all/_view/all?callback=?', function(data) {

    //     var result = data.rows.map(function(doc) {
    //       console.log('Doc id: %@'.fmt(doc));
    //       return App.Component.create(doc.value);
    //     });

    //     resolve(result);

    //   }).fail(reject);
    // });
  },
  afterModel: function() {
    // var components = [];
    // return new Ember.RSVP.Promise(function(resolve, reject) {
    //   $.getJSON('http://ember-components.com/api/v1/get_posts?callback=?', function(data) {

    //     var result = data.posts.map(function(doc) {
    //       console.log(doc);
    //       //return App.Component.create(doc.value);
    //     });

    //     // data.rows.forEach(function(doc){
    //     //   var c = App.Component.create(doc.value);
    //     //   console.log('Doc id: %@'.fmt(doc.id));
    //     //   components.pushObject(c);
    //     // });

    //     resolve(result);

    //   }).fail(reject);
    // });
  }
});

export default IndexRoute;
