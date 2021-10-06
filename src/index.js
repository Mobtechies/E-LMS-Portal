import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import "./video.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import VideoCall from './components/student dashboard/VideoApp';
import '.'



ReactDOM.render(
<BrowserRouter>
  <VideoCall/>
</BrowserRouter>,
  document.getElementById('root')
);

