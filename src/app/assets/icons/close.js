import React from "react";

import Svg, { Path, G, Rect } from 'react-native-svg';

const CloseIcon = (props) => {

    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height={props.height ? props.height : 40} width={props.width ? props.width : 40}>
            <G data-name="Layer 2">
                <G data-name="close">
                    <Rect
                        fill={props.color ? props.color : '#a3a3a3'}
                        height={props.height ? props.height : 40} width={props.width ? props.width : 40}
                        transform="rotate(180 12 12)" opacity="0" />
                    <Path
                        fill={props.color ? props.color : '#a3a3a3'}
                        d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z" />
                </G>
            </G>
        </Svg>
    );
}

export default CloseIcon;