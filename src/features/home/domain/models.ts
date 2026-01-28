// Domain models for Home feature

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface HomeData {
  welcomeMessage: string;
  features: Feature[];
}
