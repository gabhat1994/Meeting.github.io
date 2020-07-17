import {
  MEETING_SETUP_REQUEST,
  MEETING_SETUP_REQUEST_FAILED,
} from "../constant/constant";

const meetingSetup = (name) => async (dispatch) => {

    dispatch({ type: MEETING_SETUP_REQUEST, payload: name });

};

export { meetingSetup };
