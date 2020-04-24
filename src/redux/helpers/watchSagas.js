import { call, put, takeEvery } from "redux-saga/effects";
import { SHOW_UPCOMING } from "../constants/bookingsConstants";
import {getAllBookingsById} from '../../pages/dashboard/myBookings/api/userAPICalls'
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

function* saveCart({payload}, {put,select}) {
// yield put({type:'add', payload});
// yield select(state => {
// localStorage.setItem('cart', JSON.stringify(state.cart.addedItems)) })
yield console.log("hello world")

}


function* watchSagas() {
  yield [takeEvery("SHOW_UPCOMING", getAllBookings),
        takeEvery("SAVING_CART",saveCart),
];
}

export default watchSagas;
