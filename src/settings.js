import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react"

const appId = "cfecd231dddf402db3510fb826841ca9"
const token = "006cfecd231dddf402db3510fb826841ca9IAC8O47gxgLfOWXdTEXXaPFx+pJyz2wC9GFJ9yO8+lACaGTNKL8AAAAAEAAMwYE2TyllYQEAAQBPKWVh"

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";