import React from "react";

import Svg, { Path, G, Rect } from 'react-native-svg';

const EditIcon = (props) => {

    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height={props.height ? props.height : 40} width={props.width ? props.width : 40}>
            <G data-name="Layer 2">
                <G data-name="edit-2">
                    <Rect height={props.height ? props.height : 40} width={props.width ? props.width : 40} opacity="0" />
                    <Path
                        fill={props.color ? props.color : '#a3a3a3'}
                        d="M19 20H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2z" />
                    <Path
                        fill={props.color ? props.color : '#a3a3a3'}
                        d="M5 18h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71L16.66 2.6A2 2 0 0 0 14 2.53l-9 9a2 2 0 0 0-.57 1.21L4 16.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 18zM15.27 4L18 6.73l-2 1.95L13.32 6zm-8.9 8.91L12 7.32l2.7 2.7-5.6 5.6-3 .28z" />
                </G>
            </G>
        </Svg>
    );
}

export default EditIcon;