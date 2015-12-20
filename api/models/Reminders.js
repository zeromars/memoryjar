/**
* Reminder.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  attributes: {
	user: {
    	model: 'Users'
    },
	memory: { type: 'integer' },
	text: { type: 'string' },
	message: { type: 'string' },
	when: { type: 'datetime' }
  }
};

