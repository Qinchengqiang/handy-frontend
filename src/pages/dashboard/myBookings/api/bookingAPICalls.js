import { BASE_URL, bookingAPIs, ajax } from "./APIs";

export const placeABooking = (payload) => {
  const url = `${BASE_URL}${bookingAPIs().createBooking.url}`;
  console.log(url);
  const method = `${bookingAPIs().createBooking.method}`;
  payload = JSON.stringify(payload);
  console.log(payload);
  return ajax(url, method, payload);
};
