import type { RootState } from "@app/store";

// Selectors
export const selectHomeData = (state: RootState) => state.home.data;
export const selectHomeLoading = (state: RootState) => state.home.loading;
export const selectHomeError = (state: RootState) => state.home.error;
export const selectFeatures = (state: RootState) =>
  state.home.data?.features || [];
export const selectWelcomeMessage = (state: RootState) =>
  state.home.data?.welcomeMessage || "";
