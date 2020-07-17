import {
  MEETING_SETUP_REQUEST,
  MEETING_SETUP_REQUEST_FAILED,
} from "../constant/constant";

const meetingSetup = (name, date, time) => async (dispatch) => {
  dispatch({ type: MEETING_SETUP_REQUEST, payload: { name, date, time } });
};

export { meetingSetup };
