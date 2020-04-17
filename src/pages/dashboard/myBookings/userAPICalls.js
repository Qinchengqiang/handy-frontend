import { BASE_URL, bookingAPIs, ajax } from "./APIs";

export const getAllBookingsById = async (userId) => {
  const url = `${BASE_URL}${bookingAPIs(userId).listUserBookings.url}`;
  const method = bookingAPIs(userId).listUserBookings.method;
  return await ajax(url, method)
    .then((resolve) => resolve)
    .catch((err) => console.error(err));
};
