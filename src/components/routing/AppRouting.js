import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Report from "../login/basicForm";
import HomeLogin from "../login/home/login";
import AdminLogin from "../login/adminLogin";
import StudentLogin from "../login/studentLogin";
import FacultyLogin from "../login/facultyLogin";
import AdminDashboard from "../adminDashboard/dashboard";
import StudentDashboard from "../studentDashboard/dashboard";
import FacultyDashboard from "../facultyDashboard/dashboard";
import SignUp from "../login/signUp";

import RegisterCourses from "../studentDashboard/registerCourses";
import VideoCall from "../studentDashboard/VideoApp";
import "../../video.css";
import Complaintc from "../adminDashboard/Complaint";
import Stripe from "../../mainFileStripe";
import Register from "../studentDashboard/Register";
import Card from "../studentDashboard/Card";

export default function AppRouting() {
  return (
    <Router>
      <Route path="/video-call" component={VideoCall} />
      <Route path="/stripe" component={Stripe} />
      <Route exact path="/comp" component={Complaintc} />
      <Switch>
        <Route path="/report" component={Report} />
        <Route exact path="/" component={HomeLogin} />
        <Route path="/adminlogin" component={AdminLogin} />
        <Route path="/faculty-login" component={FacultyLogin} />
        <Route path="/dashboard" component={AdminDashboard} />
        <Route path="/student-dashboard" component={StudentDashboard} />
        <Route path="/register-courses" component={RegisterCourses} />
        <Route path="/register" component={Register} />
        <Route path="/card" component={Card} />
        <Route path="/faculty-dashboard" component={FacultyDashboard}></Route>
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Route path="/signup" component={SignUp} />
        </div>
        <Route exact path="/student-login" component={StudentLogin} />
      </Switch>
    </Router>
  );
}
