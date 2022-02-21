import React from "react";

import Svg, { Path, G, Rect } from 'react-native-svg';

const TagIcon = (props) => {

    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height={props.height ? props.height : 40} width={props.width ? props.width : 40}>
            <G data-name="Layer 2">
                <G data-name="hash">
                    <Rect
                        fill={props.color ? props.color : '#a3a3a3'}
                        height={props.height ? props.height : 40} width={props.width ? props.width : 40} transform="rotate(180 12 12)" opacity="0" />
                    <Path
                        fill={props.color ? props.color : '#a3a3a3'}
                        d="M20 14h-4.3l.73-4H20a1 1 0 0 0 0-2h-3.21l.69-3.81A1 1 0 0 0 16.64 3a1 1 0 0 0-1.22.82L14.67 8h-3.88l.69-3.81A1 1 0 0 0 10.64 3a1 1 0 0 0-1.22.82L8.67 8H4a1 1 0 0 0 0 2h4.3l-.73 4H4a1 1 0 0 0 0 2h3.21l-.69 3.81A1 1 0 0 0 7.36 21a1 1 0 0 0 1.22-.82L9.33 16h3.88l-.69 3.81a1 1 0 0 0 .84 1.19 1 1 0 0 0 1.22-.82l.75-4.18H20a1 1 0 0 0 0-2zM9.7 14l.73-4h3.87l-.73 4z" />
                </G>
            </G>
        </Svg>
    );
}

export default TagIcon;