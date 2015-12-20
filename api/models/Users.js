/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {	
  attributes: {
    firstname : { type: 'string' },
    lastname : { type: 'string' },
    email : { type: 'string' },
    lastlogin : { type: 'datetime' },
	memories: {
		collection: 'Memories',
		via: 'user'
	},
	reminders: {
		collection: 'Reminders',
		via: 'user'
	},
	settings: {
		collection: 'Settings',
		via: 'user'
	},
	tags: {
		collection: 'Tags',
		via: 'user'
	}
  }
};

