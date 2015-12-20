module.exports = {
  getReminders: function(next) {
    Reminders.find().exec(function(err, reminders) {
      if(err) throw err;
      next(reminders);
    });
  },
  addReminder: function(reminderVal, next) {
    Reminders.create({value: reminderVal}).exec(function(err, reminder) {
      if(err) throw err;
      next(reminder);
    });
  },
  removeReminder: function(reminderVal, next) {
    Reminders.destroy({value: reminderVal}).exec(function(err, reminder) {
      if(err) throw err;
      next(reminder);
    });
  }
};