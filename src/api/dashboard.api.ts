import { DashboardResponse } from "@/types/dashboard";
import { apiClient } from "./client";

export const dashboardApi = {
  async getDashboard(): Promise<DashboardResponse> {
    const today = new Date();
    const date = [
      today.getFullYear(),
      String(today.getMonth() + 1).padStart(2, "0"),
      String(today.getDate()).padStart(2, "0"),
    ].join("-");

    const { data } = await apiClient.get<DashboardResponse>("/dashboard", {
      params: { date },
    });
    return data;
  },
};
