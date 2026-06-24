import api from "./api";

export const dashboardService = {
  getMyCourses: () => api.get("/courses/my-courses"),

  getCertificates: () => api.get("/certificates"),

  getProgress: () => api.get("/progress"),
};