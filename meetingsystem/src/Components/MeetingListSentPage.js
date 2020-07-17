import React from "react";
import ShortID from "shortid";
import { useSelector, useDispatch } from "react-redux";
function MeetingListSentPage(props) {
  const meetingDetailsState = useSelector((state) => state.meetingSentReducer);
  const { meetingDeatils } = meetingDetailsState;
  return (
    <div className="jumbotron">
      <div
        className="col-sm-6"
        style={{ marginLeft: "186px", marginTop: "30px" }}
      >
        <table className="table">
          <thead>
            <tr>
              <th>Time Slot</th>
              <th>Meetings</th>
            </tr>
          </thead>
          <tbody>
            {meetingDeatils.map((data) => {
              return (
                <tr key={ShortID.generate()}>
                  <td>{data.selectedTimeSlot}</td>
                  <td>
                    {data.name}
                    <br />
                    {data.description}
                    <br />
                    {data.selectedDate}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MeetingListSentPage;
