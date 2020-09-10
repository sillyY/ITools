import { put, takeEvery } from 'redux-saga/effects'
import * as actions from '../constants/actionTypes'

export function* toggleAsideVisible({ payload }: any) {
  yield put({
    type: actions.SET_ASIDE_VISIBLE,
    payload
  })
}

export default function* watchCommon() {
  yield takeEvery(actions.TOGGLE_ASIDE_VISIBLE, toggleAsideVisible)
}
