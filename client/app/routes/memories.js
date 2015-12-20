import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
  	console.log(this);
  	console.log(this.store.findAll('memory'));
    return this.store.findAll('memory');
  }
});