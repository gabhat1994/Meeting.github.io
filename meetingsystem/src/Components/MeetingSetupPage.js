import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function MeetingSetupPage(props) {
  const meeting = useSelector((state) => state.meetingSetupReducer);
  const [show, setShow] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const { name, date, time } = meeting;

  const meeteingHandler = (date) => {
    setSelectedDate(date);
    setShow(true);
  };
  return (
    <>
      <h1 style={{ textAlign: "center" }}>{name}'s Calender</h1>;
      <div>
        {date.map((date) => {
          return (
            <button
              style={{ paddingRight: "10px" }}
              onClick={() => meeteingHandler(date.date)}
              className="btn-primary btn-color btn-bg-color btn-sm col-xs-2 margin-left"
            >
              {date.date}
            </button>
          );
        })}
      </div>
      <br />
      <div className="col-sm-12">
        {show === true
          ? time.map((time) => {
              return (
                <button
                  onClick={() => meeteingHandler(time.time)}
                  className="col-sm-3 button"
                >
                  {time.time}
                </button>
              );
            })
          : null}
      </div>
      
    </>
  );
}

export default MeetingSetupPage;
