import React from "react";

import Svg, { Path, G, Rect } from 'react-native-svg';

const SaveIcon = (props) => {

    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height={props.height ? props.height : 40} width={props.width ? props.width : 40}>
            <G data-name="Layer 2">
                <G data-name="save">
                    <Rect
                        fill={props.color ? props.color : '#a3a3a3'}
                        height={props.height ? props.height : 40} width={props.width ? props.width : 40} opacity="0" />
                    <Path
                        fill={props.color ? props.color : '#a3a3a3'}
                        d="M20.12 8.71l-4.83-4.83A3 3 0 0 0 13.17 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-7.17a3 3 0 0 0-.88-2.12zM10 19v-2h4v2zm9-1a1 1 0 0 1-1 1h-2v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2v5a1 1 0 0 0 1 1h4a1 1 0 0 0 0-2h-3V5h3.17a1.05 1.05 0 0 1 .71.29l4.83 4.83a1 1 0 0 1 .29.71z" />
                </G>
            </G>
        </Svg>
    );
}

export default SaveIcon;