import React from "react";

import Svg, { G, Rect, Circle } from 'react-native-svg';

const MenuIcon = (props) => {

    return (

        <Svg height={props.height ? props.height : 40} width={props.width ? props.width : 40}
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <G data-name="Layer 2">
                <G data-name="menu-2" fill={props.color ? props.color : '#a3a3a3'}>
                    <Rect width="24" height="24" transform="rotate(180 12 12)" opacity="0" fill={props.color ? props.color : '#a3a3a3'} />
                    <Circle cx="4" cy="12" r="1" /><rect x="7" y="11" width="14" height="2" rx=".94" ry=".94" fill={props.color ? props.color : '#a3a3a3'} />
                    <Rect x="3" y="16" width="18" height="2" rx=".94" ry=".94" fill={props.color ? props.color : '#a3a3a3'} />
                    <Rect x="3" y="6" width="18" height="2" rx=".94" ry=".94" fill={props.color ? props.color : '#a3a3a3'} />
                </G>
            </G>
        </Svg>
    );
}

export default MenuIcon;