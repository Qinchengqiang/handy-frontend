import { BASE_URL, bookingAPIs, ajax } from "./APIs";

/* function reqErrHandler (err){
  let errCode = err.response.status;
  let response;
  switch (errCode){
    case 500:
    response = "Error when "
  }
} */

export const getAllBookingsById = async (userId) => {
  const url = `${BASE_URL}${bookingAPIs(userId).listUserBookings.url}`;
  const method = bookingAPIs(userId).listUserBookings.method;
  return await ajax(url, method)
    .then((resolve) => resolve.data)
    .catch((err) => err.response.status);
};
