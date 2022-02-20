import React from "react";

import Svg, { G, Rect, Path } from 'react-native-svg';

const MinusIcon = (props) => {

    return (

        <Svg height={props.height ? props.height : 40} width={props.width ? props.width : 40}
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={props.color ? props.color : '#a3a3a3'}>
            <G data-name="Layer 2" fill={props.color ? props.color : '#a3a3a3'}>
                <G data-name="minus" fill={props.color ? props.color : '#a3a3a3'}>
                    <Rect width="24" height="24" transform="rotate(180 12 12)" opacity="0" fill={props.color ? props.color : '#a3a3a3'} />
                    <Path d="M19 13H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2z" fill={props.color ? props.color : '#a3a3a3'} />
                </G>
            </G>
        </Svg>
    );
}

export default MinusIcon;