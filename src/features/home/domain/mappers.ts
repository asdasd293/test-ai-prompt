import type { HomeData, Feature } from "./models";

// Mapper: API response → Domain model
export const mapApiToHomeData = (data: any): HomeData => {
  return {
    welcomeMessage: data.welcome_message || data.welcomeMessage,
    features: (data.features || []).map((item: any) => mapApiToFeature(item)),
  };
};

export const mapApiToFeature = (data: any): Feature => {
  return {
    id: data.id,
    title: data.title,
    description: data.description || data.desc,
    icon: data.icon || "🎯",
  };
};
