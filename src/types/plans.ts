export type FeatureData = {
  id: number;
  planId: number;
  description: string;
};

export type PlanData = {
  id: number;
  name: string;
  price: number;
  description: string;
  billingCycle: string;
  features: FeatureData[];
  key: string;
  planCategoryId: number;
};
