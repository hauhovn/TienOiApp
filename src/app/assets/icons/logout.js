import React from "react";

import Svg, { Path, G, Rect } from 'react-native-svg';

const LogoutIcon = (props) => {

    return (
        <Svg height={props.height ? props.height : 40} width={props.width ? props.width : 40}
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><G data-name="Layer 2">
                <G data-name="log-out" fill={props.color ? props.color : '#a3a3a3'}>
                    <Rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"
                        fill={props.color ? props.color : '#a3a3a3'} />
                    <Path
                        fill={props.color ? props.color : '#a3a3a3'}
                        d="M7 6a1 1 0 0 0 0-2H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h2a1 1 0 0 0 0-2H6V6z" />
                    <Path
                        fill={props.color ? props.color : '#a3a3a3'}
                        d="M20.82 11.42l-2.82-4a1 1 0 0 0-1.39-.24 1 1 0 0 0-.24 1.4L18.09 11H10a1 1 0 0 0 0 2h8l-1.8 2.4a1 1 0 0 0 .2 1.4 1 1 0 0 0 .6.2 1 1 0 0 0 .8-.4l3-4a1 1 0 0 0 .02-1.18z" />
                </G>
            </G>
        </Svg>
    );
}

export default LogoutIcon;