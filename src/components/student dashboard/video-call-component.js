import { useState, useEffect } from 'react'
import { channelName, config, useClient, useMicrophoneAndCameraTracks } from "../../settings.js";
import { Grid } from "@material-ui/core";
import Videos from "./video";
import Controls from "./controls";

export default function VideoCall(props){
    const { setInCall } = props;
    const [users, setUsers] = useState([]);
    const [start, setStart] = useState(false);
    const client = useClient();
    const { ready , tracks} = useMicrophoneAndCameraTracks();


    useEffect(()=>{
        let init = async(name) => {
            client.on("user-published", async (user, mediaType)=>{
                await client.subscribe(user, mediaType);
                if(mediaType === "video"){
                    setUsers((prevUsers) =>{
                        return [...prevUsers, user];
                    });
                }
                if(mediaType === "audio"){
                    user.audioTrack.play();
                }
            });
            client.on("user-unpublished", (user, mediaType)=>{
                if(mediaType=== "audio"){
                    if(user.audioTrack) user.audioTrack.stop();
                }
                if(mediaType === "video"){
                    setUsers((prevUsers) =>{
                        return prevUsers.filter((User) =>User.uid!== user.uid);
                    });
                }
            });
            client.on("user-left", (user) =>{
                setUsers((prevUsers) => {
                    return prevUsers.filter((User) =>User.uid!== user.uid);
 
                });
            });

            try {
                await client.join(config.appId, name, config.token,null)
            }catch (err){
                console.log(err);
            }

            if (tracks) await client.publish([tracks[0], tracks[1]]);
        
            setStart(true);
        };
        if(ready && tracks){
            try {
                init(channelName);
            }catch(err){
                console.log(err);
            }
        }        

    },[channelName, client, ready, tracks]);
    return(<Grid container direction= "column" style ={{height: "100%"}}>
        <Grid item style={{ height: "5%"}}>
            { ready && tracks && (<Controls tracks={ tracks } setStart={start} setInCall={setInCall}></Controls>)}
        </Grid>
        <Grid item style={{ height: "95%"}}>
        { start && tracks && (<Videos tracks={ tracks } users={users}></Videos>)}
        </Grid>

    </Grid>)


}