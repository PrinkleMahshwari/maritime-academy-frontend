import api from "./api";

export const bookingService = {
  // --- 🚢 TRIPS MANAGEMENT ---
  getTrips: async (params = {}) => {
    // params: location, featured_only, available_only, skip, limit
    const response = await api.get("/trips", { params });
    return response.data;
  },

  getFeaturedTrips: async () => {
    const response = await api.get("/trips/featured");
    return response.data;
  },

  getTripLocations: async () => {
    const response = await api.get("/trips/locations");
    return response.data;
  },

  getTripDetails: async (tripId) => {
    const response = await api.get(`/trips/${tripId}`);
    return response.data;
  },

  bookTrip: async (tripId, data) => {
    const response = await api.post(`/trips/${tripId}/book`, data);
    return response.data;
  },

  // --- 📅 USER BOOKINGS REGISTRY ---
  getMyBookings: async () => {
    const response = await api.get("/bookings/my");
    return response.data;
  },

  getBookingDetails: async (bookingId) => {
    const response = await api.get(`/bookings/${bookingId}`);
    return response.data;
  },

  cancelBooking: async (bookingId) => {
    const response = await api.delete(`/bookings/${bookingId}/cancel`);
    return response.data;
  },

  // --- 💳 STRIPE PAYMENTS ARCHITECTURE ---
  createPaymentIntent: async (paymentData) => {
    // paymentData: { booking_id, amount, currency } etc.
    const response = await api.post("/payments/create-intent", paymentData);
    return response.data;
  },

  verifyPayment: async (paymentIntentId) => {
    const response = await api.get(`/payments/verify/${paymentIntentId}`);
    return response.data;
  },

  getPaymentStatus: async (paymentId) => {
    const response = await api.get(`/payments/${paymentId}/status`);
    return response.data;
  },

  getPaymentHistory: async () => {
    const response = await api.get("/payments/history");
    return response.data;
  },

  // --- 📦 SHIPPING SERVICES INTEGRATION ---
  getShippingServices: async () => {
    const response = await api.get("/shipping");
    return response.data;
  },

  getShippingServiceById: async (serviceId) => {
    const response = await api.get(`/shipping/${serviceId}`);
    return response.data;
  },

  bookShippingService: async (serviceId) => {
    const response = await api.post(`/shipping/${serviceId}/book`);
    return response.data;
  }
};