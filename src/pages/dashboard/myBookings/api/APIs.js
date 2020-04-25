import axios from "axios";

export const BASE_URL = "http://localhost:4000";

export const userAPIs = (userId) => ({
  createUser: {
    url: "/api/user",
    method: "POST",
  },
  getUserInfo: {
    url: `/api/user/${userId}`,
    method: "GET",
  },
});

export const proAPIs = (proId) => ({
  createPro: {
    url: "/api/pro",
    method: "POST",
  },
  getProInfo: {
    url: `/api/pro/${proId}`,
    method: "GET",
  },
  findPros: {
    url: "/api/pro/avail",
    method: "POST",
  },
  updateAvail: {
    url: `/api/pro/${proId}/avail`,
    method: "PUT",
  },
});
export const bookingAPIs = (id) => ({
  createBooking: {
    url: "/api/booking",
    method: "POST",
  },
  updateBooking: {
    url: "/api/booking",
    method: "PUT",
  },
  listProBookings: {
    url: `/api/bookings/pro/${id}`,
    method: "GET",
  },
  listUserBookings: {
    url: `/api/bookings/user/${id}`,
    method: "GET",
  },
});

export const ajax = (url, method, payload) => {
  let result;
  switch (method) {
    case "GET":
      result = axios.get(url);
      break;
    case "POST":
      result = axios.post(url, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      break;
    case "PUT":
      result = axios.put(url, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    // no default
  }
  return result;
};
