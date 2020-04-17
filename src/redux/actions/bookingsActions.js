import {
  SHOW_DETAIL,
  SHOW_UPCOMING,
  ADD_NOTES,
  CANCEL_BOOKING,
  CONTACT_PRO
} from "../constants/bookingsConstants";

export const showUpcoming = userId => ({
  type: SHOW_UPCOMING,
  payload: {
    userId
  }
});

export const showDetail = (userId, bookingId) => ({
  type: SHOW_DETAIL,
  payload: {
    userId,
    bookingId
  }
});

export const addNotes = (bookingId, notes) => ({
  type: ADD_NOTES,
  payload: {
    bookingId,
    notes
  }
});

export const cancelBooking = bookingId => ({
  type: CANCEL_BOOKING,
  payload: {
    bookingId
  }
});

export const contactPro = proId => ({
  type: CONTACT_PRO,
  payload: {
    proId
  }
});
