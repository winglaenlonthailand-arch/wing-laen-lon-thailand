import { RunnerRecommendation } from "@/types/runnerRecommendation";


export const runnerRecommendations: RunnerRecommendation[] = [

  {
    id: 1,

    runnerLevel: "Beginner",

    preferredCategories: [
      "Shoes",
      "Health",
      "Nutrition",
    ],

    recommendedProducts: [
      1,
      2,
    ],

    createdAt:
      "2026-07-24",
  },


  {
    id: 2,

    runnerLevel: "Marathon",

    preferredCategories: [
      "Shoes",
      "Equipment",
      "Nutrition",
    ],

    recommendedProducts: [
      1,
      3,
    ],

    createdAt:
      "2026-07-24",
  },

];
