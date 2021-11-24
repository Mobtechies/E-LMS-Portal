import React, { useState, useEffect } from "react";
import { db } from "../../utils/init-firebase";

const Register = () => {
  let [courses, setCourses] = useState([]);

  useEffect(async () => {
    let arr = [];
    // .where("registerNumber", "==", `currentUser.uid`)
    await db
      .collection("studentRegisterCourses")
      .where("registerNumber", "==", "SP18-BSE-120")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.data());
          arr.push({ id: doc.id, data: doc.data() });
        });
      });
    console.log(arr);
    setCourses(arr);
  }, []);

  return (
    <div>
      {courses.map((c) => {
        console.log(c);
        <div key={c.id}>
          <p className="text-red-700">{c.data.student}</p>
          <p>{c.data.course_name}</p>
        </div>;
      })}
    </div>
  );
};

export default Register;
