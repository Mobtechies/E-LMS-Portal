import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react"

const appId = "7f36128b5a5d464998e11a3fb99ffa2b"
const token = "0067f36128b5a5d464998e11a3fb99ffa2bIABdkx3qxVGhOKUOmxffpRyIy0DuV0WefQ5CekoRYOewQZ8ZS+0AAAAAEAApikcivC1dYQEAAQC+LV1h"

export const config = {mode: "rtc", condec: "vp8", appId: appId, token: token};
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "class";