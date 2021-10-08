import React from 'react';
import {Switch, Route} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Report from './components/login/basicForm';
// import SignInSide from './components/login/signInSide';
import HomeLogin from './components/login/homeLogin';
import AdminLogin from './components/login/adminLogin';
import StudentLogin from './components/login/studentLogin';
import FacultyLogin from './components/login/facultyLogin';
import AdminDashboard from './components/admin dashboard/dashboard';
import StudentDashboard from './components/student dashboard/dashboard';
import FacultyDashboard from './components/faculty dashboard/dashboard';
import SignUp from './components/login/signUp';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router } from 'react-router-dom';
import RegisterCourses from './components/student dashboard/registerCourses';
import VideoCall from './components/student dashboard/VideoApp'
import "./video.css";
import Complaintc from "./components/admin dashboard/Complaint"



// import  DurraDashboard  from './dashboard'; 




const App = () => {
  
  return (<div>
    <Route path = '/video-call' component = {VideoCall}/>
    <Route exact path = '/' component = {Complaintc}/>
  <Switch>
  
  <Route  path = '/report' component = {Report}/>
  {/* <Route exact path = '/' component = {HomeLogin}/> */}
  <Route path = '/adminlogin' component = {AdminLogin}/>
  <Route path = '/faculty-login' component = {FacultyLogin}/>
  <Route path = '/dashboard' component = {AdminDashboard}/>
  <Route path = '/student-dashboard' component = {StudentDashboard}/>
  <Route path = '/register-courses' component = {RegisterCourses}/>

  {/* <Route path = '/student-dashboard' component = {DurraDashboard}/> */}

  {/* <Route path = '/student-dashboard' component = {StudentDashboard}/> */}
  <Route path = '/faculty-dashboard' component = {FacultyDashboard}>
  </Route>
  <AuthProvider>
  <Container className="d-flex align-items-center justify-content-center"
  style= {{ minHeight: "100vh" }}
  >
  <div className="w-100" style={{ maxWidth: '400px'}}> 
  <Route path = '/signup' component = {SignUp}/> 
  </div>
  </Container>
  <Route exact path = '/student-login' component = {StudentLogin}/>

  </AuthProvider>
  </Switch>
  </div>


  ) 
};
export default App; 

