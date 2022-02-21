import React from "react";

import Svg, { Path, G, Rect } from 'react-native-svg';

const PaperPlaneIcon = (props) => {

    return (

        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height={props.height ? props.height : 40} width={props.width ? props.width : 40}>
            <G data-name="Layer 2" fill={props.color ? props.color : '#a3a3a3'}>
                <G data-name="paper-plane" fill={props.color ? props.color : '#a3a3a3'}>
                    <Rect
                        fill={props.color ? props.color : '#a3a3a3'}
                        height={props.height ? props.height : 40} width={props.width ? props.width : 40} opacity="0" />
                    <Path
                        fill={props.color ? props.color : '#a3a3a3'}
                        d="M21 4a1.31 1.31 0 0 0-.06-.27v-.09a1 1 0 0 0-.2-.3 1 1 0 0 0-.29-.19h-.09a.86.86 0 0 0-.31-.15H20a1 1 0 0 0-.3 0l-18 6a1 1 0 0 0 0 1.9l8.53 2.84 2.84 8.53a1 1 0 0 0 1.9 0l6-18A1 1 0 0 0 21 4zm-4.7 2.29l-5.57 5.57L5.16 10zM14 18.84l-1.86-5.57 5.57-5.57z" />
                </G></G></Svg>
    );
}

export default PaperPlaneIcon;