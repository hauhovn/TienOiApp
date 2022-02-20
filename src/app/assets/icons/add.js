import React from "react";

import Svg, { Path, G, Rect } from 'react-native-svg';

const AddIcon = (props) => {

    return (
        <Svg height={props.height ? props.height : 40} width={props.width ? props.width : 40}
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <G data-name="Layer 2" fill={props.color ? props.color : '#a3a3a3'}>
                <G data-name="plus-square" fill={props.color ? props.color : '#a3a3a3'}>
                    <Rect width="24" height="24" opacity="0" fill={props.color ? props.color : '#a3a3a3'} />
                    <Path fill={props.color ? props.color : '#a3a3a3'}
                        d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm1 15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1z" />
                    <Path d="M15 11h-2V9a1 1 0 0 0-2 0v2H9a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2z" />
                </G>
            </G>
        </Svg>
    );
}

export default AddIcon;