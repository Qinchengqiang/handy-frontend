import { call, put, takeEvery } from "redux-saga/effects";
import { SHOW_UPCOMING } from "../constants/bookingsConstants";
//import { getBookingsByUserId } from "../../pages/dashboard/myBookings/mockAPI";
import { getAllBookingsById } from "../../pages/dashboard/myBookings/userAPICalls";

function* getAllBookings(action) {
  try {
    const result = yield call(getAllBookingsById, action.payload.userId);
    /*const payload = {
      userId: [action.payload.userId],
      results: [result]
    };
    console.log(payload);*/
    yield put({ type: "SHOW_UPCOMINGsync", result });
  } catch (e) {
    console.log(e);
  }
}

function* bookingSagas() {
  yield takeEvery("SHOW_UPCOMING", getAllBookings);
}

export default bookingSagas;
