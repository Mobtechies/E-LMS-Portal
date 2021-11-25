import Report from "../login/basicForm";
import AdminDashboard from "../adminDashboard/dashboard";
import StudentDashboard from "../studentDashboard/dashboard";
import FacultyDashboard from "../facultyDashboard/dashboard";
import SignUp from "../login/signUp";
import RegisterCourses from "../studentDashboard/registerCourses";
import VideoCall from "../studentDashboard/VideoApp";
import Complaintc from "../adminDashboard/Complaint";
import Stripe from "../../mainFileStripe";
import Register from "../studentDashboard/Register";
import Card from "../studentDashboard/Card";

// routes
export default [
  {
    path: "admin-dashboard",
    component: AdminDashboard,
  },
  {
    path: "student-dashboard",
    component: StudentDashboard,
  },
  {
    path: "faculty-dashboard",
    component: FacultyDashboard,
  },
  {
    path: "signup",
    component: SignUp,
  },
  {
    path: "register-courses",
    component: RegisterCourses,
  },
  {
    path: "register",
    component: Register,
  },
  {
    path: "video-call",
    component: VideoCall,
  },
  {
    path: "report",
    component: Report,
  },
  {
    path: "comp",
    component: Complaintc,
  },
  {
    path: "stripe",
    component: Stripe,
  },
  {
    path: "card",
    component: Card,
  },
];
