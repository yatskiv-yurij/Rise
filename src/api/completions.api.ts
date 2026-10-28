import {
  CompletionPayload,
  CompletionResponse,
  CompletionsByDateResponse,
} from "@/types/completion";
import { apiClient } from "./client";

export const completionsApi = {
  async completeHabit(payload: CompletionPayload): Promise<CompletionResponse> {
    const { data } = await apiClient.post<CompletionResponse>(
      "/completions/",
      payload,
    );
    return data;
  },

  async uncompleteHabit(
    payload: CompletionPayload,
  ): Promise<CompletionResponse> {
    const { data } = await apiClient.delete<CompletionResponse>(
      "/completions/",
      { data: payload },
    );

    return data;
  },

  async getCompletionByDate(date: string): Promise<CompletionsByDateResponse> {
    const { data } = await apiClient.get<CompletionsByDateResponse>(
      "/completions/",
      { params: { date } },
    );

    return data;
  },
};
