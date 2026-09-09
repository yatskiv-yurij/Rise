import dashboardService from "../services/dashboard.service.js";

const getDashboard = async (req, res) => {
  try {
    const dashboard = await dashboardService.getDashboard(
      req.user.userId,
      req.validated.query.date,
    );

    res.status(200).json({
      sucess: true,
      data: dashboard,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to get dashboard",
    });
  }
};

const dashboardController = { getDashboard };
export default dashboardController;
