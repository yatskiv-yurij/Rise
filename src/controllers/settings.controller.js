import settingsService from "../services/settings.service.js";

const getSettings = async (req, res) => {
  try {
    const settings = await settingsService.getOrCreateSettings(req.user.userId);
    res.status(200).json({
      success: true,
      data: {
        settings,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to get settings",
    });
  }
};

const updateSettings = async (req, res) => {
  try {
    const settings = await settingsService.updateSettings(
      req.user.userId,
      req.body,
    );

    res.status(200).json({
      success: true,
      data: {
        settings,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update settings",
    });
  }
};

const settingsController = {
  getSettings,
  updateSettings,
};

export default settingsController;
