import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { meetingSent } from "../actions/meetingSetupActions";

function MeetingSetupPage(props) {
  const meeting = useSelector((state) => state.meetingSetupReducer);
  const [show, setShow] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showDate, setShowDate] = useState(true);
  const [selectedDate, setSelectedDate] = useState("");
  const [description, setDescription] = useState("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const { name, date, time } = meeting;
  const dispatch = useDispatch()

  const meeteingHandler = (date) => {
    setSelectedDate(date);
    setShow(true);
  };
  const formHandler = (time) => {
    setSelectedTimeSlot(time);
    setShowForm(true);
  };
 const postBody=(name, selectedDate, selectedTimeSlot, description) =>{
   let data ={
   "name":name,
   "selectedDate":selectedDate,
   "selectedTimeSlot":selectedTimeSlot,
   "description":description


   }
   return  data

 }

  const submitHandler = () => {
    setShowForm(false);
    setShow(false);
    setShowDate(false);
    setSuccess(true);
    
    let data = postBody(name, selectedDate, selectedTimeSlot, description)

    dispatch(meetingSent(data));
  };
  return (
    <>
      <h1 style={{ textAlign: "center" }}>{name}'s Calender</h1>;
      <div>
        {showDate === true
          ? date.map((date) => {
              return (
                <button
                  style={{ paddingRight: "10px" }}
                  onClick={() => meeteingHandler(date.date)}
                  className="btn-primary btn-color btn-bg-color btn-sm col-xs-2 margin-left"
                >
                  {date.date}
                </button>
              );
            })
          : null}
      </div>
      <br />
      <div className="col-sm-12">
        {show === true
          ? time.map((time) => {
              return (
                <button
                  onClick={() => formHandler(time.time)}
                  className="col-sm-3 button"
                >
                  {time.time}
                </button>
              );
            })
          : null}
      </div>
      {showForm === true ? (
        <form onSubmit={submitHandler}>
          <label>
            Meeting {name} at {selectedTimeSlot} on {selectedDate}
          </label>
          <textarea
            name="text"
            class="feedback-input"
            placeholder="Comment"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button type="submit" className="button primary">
            Submit
          </button>
        </form>
      ) : null}
      {success === true ? (
        <div className="text-center" style={{ textAlign: "center" }}>
          Invite Sent SUccessfully
        </div>
      ) : null}
    </>
  );
}

export default MeetingSetupPage;
