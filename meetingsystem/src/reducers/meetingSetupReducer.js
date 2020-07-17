import {
  MEETING_SETUP_REQUEST,
  MEETING_SENT_REQUEST,
} from "../constant/constant";

function meetingSetupReducer(state = {}, action) {
  switch (action.type) {
    case MEETING_SETUP_REQUEST:
      return {
        ...state,
        name: action.payload.name,
        date: action.payload.date,
        time: action.payload.time,
      };

    default:
      return state;
  }
}

function meetingSentReducer(state = {}, action) {
  switch (action.type) {
    case MEETING_SENT_REQUEST:
      return {
        ...state,
        meetingDeatils: action.payload,
      };

    default:
      return state;
  }
}

export { meetingSetupReducer, meetingSentReducer };
