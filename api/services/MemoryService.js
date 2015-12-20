module.exports = {
  getMemories: function(next) {
    Memory.find().exec(function(err, memories) {
      if(err) throw err;
      next(memories);
    });
  },
  addMemory: function(memoryVal, next) {
    Memory.create({value: memoryVal}).exec(function(err, memory) {
      if(err) throw err;
      next(memory);
    });
  },
  removeMemory: function(memoryVal, next) {
    Memory.destroy({value: memoryVal}).exec(function(err, memory) {
      if(err) throw err;
      next(memory);
    });
  }
};