import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <div className="full-width">
      <ul>
        <li>
          {" "}
          <NavLink to="/" activeStyle={activeStyle} exact>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/meetingsentlist" activeStyle={activeStyle}>
            Meeting Sent List
          </NavLink>
        </li>
      </ul>
    </div>

    /* <header className="header">
        <div className="brand">
          <NavLink to="/" activeStyle={activeStyle} exact>
            Home
          </NavLink>
          {" | "}
          <NavLink to="/meetingsentlist" activeStyle={activeStyle}>
            Meeting Sent List
          </NavLink>
        </div>
      </header> */
  );
};

export default Header;
