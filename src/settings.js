import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react"

const appId = "f2a785b52a274a64a3fea681ee4a447f"
const token = "006f2a785b52a274a64a3fea681ee4a447fIAB2GWv/XkaqnNsvSA9QbETpLZDjACF/ljjkuVvya0REDWTNKL8AAAAAEADSvifOb/xeYQEAAQBu/F5h"

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";