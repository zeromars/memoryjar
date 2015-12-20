module.exports = {
  getTags: function(next) {
    Tags.find().exec(function(err, tags) {
      if(err) throw err;
      next(tags);
    });
  },
  addTag: function(tagVal, next) {
    Tags.create({value: tagVal}).exec(function(err, tag) {
      if(err) throw err;
      next(tag);
    });
  },
  removeTag: function(tagVal, next) {
    Tags.destroy({value: tagVal}).exec(function(err, tag) {
      if(err) throw err;
      next(tag);
    });
  }
};