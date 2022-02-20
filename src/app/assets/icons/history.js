import React from "react";

import Svg, { Path, G, Rect } from 'react-native-svg';

const HistoryIcon = (props) => {

    return (
        <Svg height={props.height ? props.height : 40} width={props.width ? props.width : 40}
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <G fill={props.color ? props.color : '#a3a3a3'} data-name="Layer 2"><G data-name="clock">
                <Rect height={props.rectHeight ? props.rectHeight : 24} width={props.rectWidth ? props.rectWidth : 24} transform="rotate(180 12 12)" opacity="0" fill={props.color ? props.color : '#a3a3a3'} />
                <Path
                    fill={props.color ? props.color : '#a3a3a3'}
                    d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" /><Path d="M16 11h-3V8a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1h4a1 1 0 0 0 0-2z" />
            </G>
            </G>
        </Svg>
    );
}

export default HistoryIcon;