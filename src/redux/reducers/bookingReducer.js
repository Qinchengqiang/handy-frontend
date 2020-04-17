import {
  SHOW_DETAIL,
  SHOW_UPCOMING,
  ADD_NOTES,
  CANCEL_BOOKING,
  CONTACT_PRO
} from "../constants/bookingsConstants";

//import { getBookingsByUserId } from "../../pages/mybookings/mockAPI";

const initialState = {};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_UPCOMINGsync": {
      return action.result;
      //console.log(action.payload);
      //const { userId, results } = action.payload;
      //const bookings = getBookingsByUserId(userId);
      /*return {
        ...state,
        userId,
        bookings: {
          ...results
        }
      };*/
    }
    case SHOW_DETAIL: {
      const { bookingId } = action.payload;
      return state;
    }
    case ADD_NOTES: {
      const { bookingId, notes } = action.payload;
      return {
        ...state,
        bookings: {
          ...state.bookings,
          [bookingId]: {
            ...state.bookings[bookingId],
            notes: `${state.bookings[bookingId].notes}\n${notes}`
          }
        }
      };
    }
    default:
      return state;
  }
};

export default bookingReducer;
