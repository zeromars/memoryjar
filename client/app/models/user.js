import DS from 'ember-data';

export default DS.Model.extend({
	firstname : DS.attr('string'),
	lastname : DS.attr('string'),
	email : DS.attr('string'),
	lastlogin: DS.attr('date'),
	memories: DS.attr(),
	reminders: DS.attr(),
	settings: DS.attr(),
	tags: DS.attr(),
	createdAt: DS.attr('date'),
	updatedAt: DS.attr('date')
});