import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
  	console.log(this);
  	console.log(this.store.findAll('tag'));
    return this.store.findAll('tag');
  }
});