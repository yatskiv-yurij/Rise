import UserSettings from "../models/UserSetting.js";

const getOrCreateSettings = async (userId) => {
  let settings = await UserSettings.findOne({ userId });

  if (!settings) {
    settings = await UserSettings.create({
      userId,
    });
  }

  return settings;
};

const updateSettings = async (userId, data) => {
  let settings = await UserSettings.findOne({
    userId,
  });

  if (!settings) {
    settings = await UserSettings.create({
      userId,
      ...data,
    });

    return settings;
  }

  if (data.theme !== undefined) {
    settings.theme = data.theme;
  }

  if (data.notifications) {
    Object.assign(settings.notifications, data.notifications);
  }

  if (data.defaultHabitSettings) {
    Object.assign(settings.defaultHabitSettings, data.defaultHabitSettings);
  }

  await settings.save();

  return settings;
};

const settingsService = {
  getOrCreateSettings,
  updateSettings,
};

export default settingsService;
