import * as actions from '../constants/actionTypes'

export default (
  state = {
    asideVisible: true,
  },
  { type, payload }: any
) => {
  switch (type) {
    case actions.SET_ASIDE_VISIBLE:
      return {
        ...state,
        asideVisible: payload,
      }
    default:
      return state
  }
}
