module.exports = {
  getMemories: function(next) {
    Memories.find().exec(function(err, memories) {
      if(err) throw err;
      next(memories);
    });
  },
  addMemory: function(memoryVal, next) {
    Memories.create({value: memoryVal}).exec(function(err, memory) {
      if(err) throw err;
      next(memory);
    });
  },
  removeMemory: function(memoryVal, next) {
    Memories.destroy({value: memoryVal}).exec(function(err, memory) {
      if(err) throw err;
      next(memory);
    });
  }
};