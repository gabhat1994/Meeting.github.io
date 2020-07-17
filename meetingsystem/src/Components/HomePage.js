import React, { useState, useEffect } from "react";
import axios from "axios";
import {  useDispatch } from "react-redux";
import { meetingSetup } from "../actions/meetingSetupActions";

function HomePage(props) {
  const [users, setUsers] = useState([]);
  const [date, setDate] = useState([]);
  const [time, setTime] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("./data.json");
      setUsers(data.users);
      setDate(data.dateData);
      setTime(data.timeData);
    };

    fetchData();
  }, []);

  const meeteingHandler = (name) => {
    if (name !== null || name !== "") {
      dispatch(meetingSetup(name, date, time));
      props.history.push("/meetingSetup");
    }
  };

  return (
    <div
      className="col-sm-6"
      style={{ marginLeft: "186px", marginTop: "30px" }}
    >
      <table className="table">
        <thead>
          <tr>
            <th>User List</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.name}</td>

                <td>
                  <button
                    onClick={() => meeteingHandler(user.name)}
                    className="btn btn-outline-danger"
                  >
                    Meet
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default HomePage;
