import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import MeetingListSentPage from "./Components/MeetingListSentPage";
import HomePage from "./Components/HomePage";
import PageNotFound from "./Components/PageNotFound";
import MeetingSetupPage from "./Components/MeetingSetupPage";
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" exact={true} component={HomePage} />
        <Route path="/meetingsentlist" component={MeetingListSentPage} />
        <Route path="/meetingSetup" component={MeetingSetupPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
