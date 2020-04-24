import { call, put, takeEvery, all , select} from "redux-saga/effects";
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

function* saveCart() {
// yield put({type:'add', payload});
yield select(state => {
localStorage.setItem('cart', JSON.stringify(state.cart.addedItems)) })
yield console.log("hello world from saveCart")

}


// function* watchSagas() {
//   // console.log("hello world")
//   yield [takeEvery("SHOW_UPCOMING", getAllBookings),
//         takeEvery("SAVING_CART",saveCart),
// ];
// }
function* cartSaga(){
  yield  takeEvery("SAVING_CART",saveCart)
}

function* bookingSaga(){
  yield takeEvery("SHOW_UPCOMING", getAllBookings)
}

function* watchSagas(){
  yield all ([cartSaga(),
              bookingSaga()])
}

export default watchSagas;
