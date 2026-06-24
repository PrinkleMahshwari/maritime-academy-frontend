import api from "./api";

export const getShippingServices = async () => {
  const response = await api.get("/shipping-services");
  return response.data;
};

export const getShippingServiceById = async (id) => {
  const response = await api.get(`/shipping-services/${id}`);
  return response.data;
};

export const createShippingBooking = async (data) => {
  const response = await api.post("/shipping-bookings", data);
  return response.data;
};

export const getFleetTracking = async () => {
  const response = await api.get("/fleet-tracking");
  return response.data;
};