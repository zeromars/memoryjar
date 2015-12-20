module.exports = {
  getSettings: function(next) {
    Settings.find().exec(function(err, settings) {
      if(err) throw err;
      next(settings);
    });
  },
  addSetting: function(settingVal, next) {
    Settings.create({value: settingVal}).exec(function(err, setting) {
      if(err) throw err;
      next(setting);
    });
  },
  removeSetting: function(settingVal, next) {
    Settings.destroy({value: settingVal}).exec(function(err, setting) {
      if(err) throw err;
      next(setting);
    });
  }
};