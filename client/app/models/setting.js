import DS from 'ember-data';

export default DS.Model.extend({
	user : DS.attr('number'),
	text : DS.attr('string'),
	active : DS.attr('string'),
	createdAt: DS.attr('date'),
	updatedAt: DS.attr('date')
});