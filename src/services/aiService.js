import api from "./api";

export const aiService = {
  // 🤖 AI Chatbot (LangChain + RAG Pipeline)
  askChatbot: async (payload) => {
    // payload: { message, course_id, trip_id }
    const response = await api.post("/ai/chat", payload);
    return response.data;
  },

  // 🗣️ Voice Search Feature (Speech-to-Text conversion query)
  voiceSearch: async (textQuery) => {
    const response = await api.post("/ai/voice-search", { text: textQuery });
    return response.data;
  },

  // 🎯 Course Recommendation System (Content-based filtering)
  getRecommendations: async (userId) => {
    const response = await api.get(`/ai/recommendations?user_id=${userId}`);
    return response.data;
  },

  // 📅 Schedule Optimizer
  optimizeSchedule: async (payload) => {
    // payload: { course_id, preferred_start_date, preferred_location }
    const response = await api.post("/ai/schedule-optimizer", payload);
    return response.data;
  },

  // 💰 Course Price Prediction using Linear Regression
  predictPrice: async (courseId) => {
    const response = await api.post("/ai/predict-price", { course_id: courseId });
    return response.data;
  },

  // --- ANALYTICS, REVIEWS & ALERTS ---
  
  // 📊 Platform Statistics
  getPlatformStats: async () => {
    const response = await api.get("/platform/stats");
    return response.data;
  },

  // ⭐ Top Ratings & Reviews
  getFeaturedReviews: async () => {
    const response = await api.get("/reviews/featured");
    return response.data;
  },

  // ✉️ Celery backed Email/SMS Alert System
  createEmailAlert: async (alertData) => {
    // alertData: { filters_json: {...}, frequency: "weekly" }
    const response = await api.post("/alerts", alertData);
    return response.data;
  },

  // 📂 User Alerts Registry
  getMyAlerts: async () => {
    const response = await api.get("/alerts");
    return response.data;
  }
};