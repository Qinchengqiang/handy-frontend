import { mockUserData } from "./mockData";

const userData = mockUserData;
const errMsg = "Error happened when trying to retrieve data";

export const getBookingsByUserId = userId => {
  //const bookings = userData[userId].bookings;

  const {
    [userId]: { bookings: bookings }
  } = userData;
  return Promise.resolve(bookings);

  /*return new Promise((resolve, reject) => {
    if (bookings) resolve(bookings);
    else reject(errMsg);
  });*/
  //console.log(bookings);
  //return Promise.resolve(bookings);
};

/*export const getBookingByIds = async (userId, bookingId) => {
  const result = await userData[userId].bookings[bookingId];
  if (result) return Promise.resolve(result);
  else return Promise.reject(errMsg);
};*/
