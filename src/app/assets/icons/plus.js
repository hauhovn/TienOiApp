import React from "react";

import Svg, { G, Rect, Path } from 'react-native-svg';

const PlusIcon = (props) => {

    return (
        <Svg height={props.height ? props.height : 40} width={props.width ? props.width : 40}
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={props.color ? props.color : '#a3a3a3'}>
            <G data-name="Layer 2" fill={props.color ? props.color : '#a3a3a3'}>
                <G data-name="plus" fill={props.color ? props.color : '#a3a3a3'}>
                    <Rect width="24" height="24" transform="rotate(180 12 12)" opacity="0" fill={props.color ? props.color : '#a3a3a3'} />
                    <Path d="M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2z" fill={props.color ? props.color : '#a3a3a3'} />
                </G>
            </G>
        </Svg>
    );
}

export default PlusIcon;