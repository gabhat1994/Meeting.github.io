import React from "react";
import { useSelector, useDispatch } from "react-redux";

function MeetingSetupPage(props) {
  const meeting = useSelector((state) => state.meetingSetupReducer);
  const { name } = meeting;
  return (
    <>
      <h1>{name}</h1>;
    </>
  );
}

export default MeetingSetupPage;
