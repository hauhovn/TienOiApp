import React from "react";

import Svg, { Path, G, Rect } from 'react-native-svg';

const ArrowRightIcon = (props) => {

    return (
        <Svg
            style={{ ...props?.style }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            height={props.height ? props.height : 40}
            width={props.width ? props.width : 40}>
            <G data-name="Layer 2" fill={props.color ? props.color : '#a3a3a3'}>
                <G data-name="arrow-ios-forward" fill={props.color ? props.color : '#a3a3a3'}>
                    <Rect height={props.height ? props.height : 40} width={props.width ? props.width : 40} transform="rotate(-90 12 12)" opacity="0" fill={props.color ? props.color : '#a3a3a3'} />
                    <Path
                        fill={props.color ? props.color : '#a3a3a3'}
                        d="M10 19a1 1 0 0 1-.64-.23 1 1 0 0 1-.13-1.41L13.71 12 9.39 6.63a1 1 0 0 1 .15-1.41 1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z" />
                </G>
            </G>
        </Svg>
    );
}

export default ArrowRightIcon;