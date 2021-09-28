import React, { useState } from 'react';
import cssClasses from '../../basicForm.module.css';

const ReportApp = () =>{

  const[name, setName] = useState("");
  const[fullname, setFullname] = useState();
  const inputEvent = (event) =>{
    console.log(event.target.value);
    setName(event.target.value);
  };
  

const onSubmit = () =>{
  setFullname(name);
}

return(
  <div  className={cssClasses.div1}>
    <h1 className={cssClasses.h1}>
      Complaint Registrations {fullname}
    </h1>
    <input className={cssClasses.input1} type = "text" placeholder = "Enter your name" onChange = {inputEvent}  />
    <input className={cssClasses.input1} type = "text" placeholder = "Category" onChange = {inputEvent}  />
    <input className={cssClasses.input1} type = "text" placeholder = "Sub Category" onChange = {inputEvent}  />
    <input className={cssClasses.input1} type = "text" placeholder = "Nature of Complaint" onChange = {inputEvent}  />
    <input className={cssClasses.input1} type = "text" placeholder = "Complaint" onChange = {inputEvent}  />
    <button className={cssClasses.button1} onClick = {onSubmit}>  Register : </button>

  </div>
);
}

export default ReportApp;