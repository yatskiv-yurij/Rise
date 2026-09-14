import getStatistics from "../services/statistics.service.js";

const getStats = async (req, res) => {
  try {
    const { from, to } = req.query;

    if (from > to) {
      return res.status(400).json({
        success: false,
        message: "From date cannot be later than to date",
      });
    }

    const statistics = await getStatistics(req.user.userId, from, to);

    res.status(200).json({
      success: true,
      data: statistics,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to get statistics",
    });
  }
};

const statisticsController = { getStats };

export default statisticsController;
