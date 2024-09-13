import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';


const Room = () => {
    const { id } = useParams()

    let myMeeting = async (element) => {

        // generate Kit Token
        const appID = 2144292958;
        const serverSecret = "cd0504ec01faaa64717bc4b2b82aad4c";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            id,
            Date.now().toString(),
            "Sarang Lohe"
        );

        // Create instance object from Kit Token.
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        // start the call
        zp.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: 'Personal link',
                    url: `${window.location.origin}/${id}`,
                },
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
            showScreenSharingButton: true
        });
    };

    return (
        <>
            <div
                className="myCallContainer"
                ref={myMeeting}
                style={{ width: '100vw', height: '100vh' }}
            ></div>
        </>
    )


}

export default Room
