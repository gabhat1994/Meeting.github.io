import {
  MEETING_SETUP_REQUEST,
  MEETING_SENT_REQUEST,
} from "../constant/constant";

const meetingSetup = (name, date, time) => async (dispatch) => {
  dispatch({ type: MEETING_SETUP_REQUEST, payload: { name, date, time } });
};

const meetingSent = (data) => async (dispatch) => {
  let formatedData = [];
  formatedData.push(data);
  dispatch({ type: MEETING_SENT_REQUEST, payload: formatedData });
};

export { meetingSetup, meetingSent };
