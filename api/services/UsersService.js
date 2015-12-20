module.exports = {
  getUsers: function(next) {
    Users.find().exec(function(err, users) {
      if(err) throw err;
      next(users);
    });
  },
  addUser: function(userVal, next) {
    Users.create({value: userVal}).exec(function(err, user) {
      if(err) throw err;
      next(user);
    });
  },
  removeUser: function(userVal, next) {
    Users.destroy({value: userVal}).exec(function(err, user) {
      if(err) throw err;
      next(user);
    });
  }
};