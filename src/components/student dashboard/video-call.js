import { useState } from "react";
import { Button } from "@material-ui/core";
import VideoCallComp from "./video-call-component"


function VideoCall() {
    const [inCall, setInCall] = useState(false);

    return (
            
        <div style={{height: "100%"}}>
            <Button variant ="contained" color ="primary" onClick={() => setInCall(true)}> Join Call</Button>
             {inCall ? <VideoCallComp setInCall={setInCall}/> : "Waiting to join call!"}
        </div>
    );
  }

export default VideoCall;