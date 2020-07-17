import {
  MEETING_SETUP_REQUEST,
  MEETING_SETUP_REQUEST_FAILED,
} from "../constant/constant";

function meetingSetupReducer(state = {}, action) {
  switch (action.type) {
    case MEETING_SETUP_REQUEST:
      return { ...state, name: action.payload };

    default:
      return state;
  }
}

export { meetingSetupReducer };