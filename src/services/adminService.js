import api from "./api";

export const adminService = {
  getUsers: () => api.get("/admin/users"),

  getCourses: () => api.get("/admin/courses"),

  getBookings: () => api.get("/admin/bookings"),
};