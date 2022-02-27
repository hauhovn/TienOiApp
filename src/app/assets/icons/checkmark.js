import React from "react";

import Svg, { Path, G, Rect } from 'react-native-svg';

const CheckmarkIcon = (props) => {

    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height={props.height ? props.height : 40} width={props.width ? props.width : 40}>
            <G data-name="Layer 2">
                <G data-name="checkmark" fill={props.color ? props.color : '#a3a3a3'} >
                    <Rect
                        fill={props.color ? props.color : '#a3a3a3'}
                        height={props.height ? props.height : 40} width={props.width ? props.width : 40} opacity="0" />
                    <Path
                        fill={props.color ? props.color : '#a3a3a3'}
                        d="M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39 8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33z" />
                </G>
            </G>
        </Svg>
    );
}

export default CheckmarkIcon;