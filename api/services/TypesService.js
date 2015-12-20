module.exports = {
  getTypes: function(next) {
    Types.find().exec(function(err, types) {
      if(err) throw err;
      next(types);
    });
  },
  addType: function(typeVal, next) {
    Types.create({value: typeVal}).exec(function(err, type) {
      if(err) throw err;
      next(type);
    });
  },
  removeType: function(typeVal, next) {
    Types.destroy({value: typeVal}).exec(function(err, type) {
      if(err) throw err;
      next(type);
    });
  }
};