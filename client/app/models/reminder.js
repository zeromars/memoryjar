import DS from 'ember-data';

export default DS.Model.extend({
	user: DS.attr('number'),
	memory: DS.attr('number'),
	text: DS.attr('string'),
	message: DS.attr('string'),
	when: DS.attr('date'),
	createdAt: DS.attr('date'),
	updatedAt: DS.attr('date')
});