import { homeApi } from "../../infrastructure/api";
import { mapApiToHomeData } from "../../domain/mappers";
import type { HomeData } from "../../domain/models";

// Use case: Load home data
export const loadHomeData = async (): Promise<HomeData> => {
  try {
    const response = await homeApi.fetchHomeData();
    return mapApiToHomeData(response);
  } catch (error) {
    // For demo purposes, return mock data if API fails
    return {
      welcomeMessage: "Welcome to Enterprise React App",
      features: [
        {
          id: "1",
          title: "Feature-Based Architecture",
          description:
            "Code organized by business features for better scalability",
          icon: "🏗️",
        },
        {
          id: "2",
          title: "Redux Toolkit",
          description: "Centralized state management with Redux Toolkit",
          icon: "🔄",
        },
        {
          id: "3",
          title: "TypeScript",
          description: "Type-safe development with strict TypeScript",
          icon: "📘",
        },
        {
          id: "4",
          title: "SCSS Styling",
          description: "Powerful styling with SCSS and BEM methodology",
          icon: "🎨",
        },
      ],
    };
  }
};
