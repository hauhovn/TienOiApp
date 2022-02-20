import React from "react";

import Svg, { Path, G, Rect } from 'react-native-svg';

const JarIcon = (props) => {

    return (
        // <Svg height={props.height ? props.height : 40} width={props.width ? props.width : 40}
        //     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        //     <G data-name="Layer 2" fill={props.color ? props.color : '#a3a3a3'}>
        //         <G data-name="home" fill={props.color ? props.color : '#a3a3a3'}>
        //             <Rect width="24" height="24" opacity="0" />
        //             <Path
        //                 fill={props.color ? props.color : '#a3a3a3'}
        //                 d="M20.42 10.18L12.71 2.3a1 1 0 0 0-1.42 0l-7.71 7.89A2 2 0 0 0 3 11.62V20a2 2 0 0 0 1.89 2h14.22A2 2 0 0 0 21 20v-8.38a2.07 2.07 0 0 0-.58-1.44zM10 20v-6h4v6zm9 0h-3v-7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H5v-8.42l7-7.15 7 7.19z" />
        //         </G>
        //     </G></Svg>
        <Svg height={props.height ? props.height : 40} width={props.width ? props.width : 40}
            version="1.0" xmlns="http://www.w3.org/2000/svg" fill={props.color ? props.color : '#a3a3a3'}
            width="64.000000pt" height="64.000000pt" viewBox="0 0 64.000000 64.000000"
            preserveAspectRatio="xMidYMid meet">

            <G fill={props.color ? props.color : '#a3a3a3'} transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
                stroke="none">
                <Path fill={props.color ? props.color : '#a3a3a3'}
                    d="M349 616 c6 -8 26 -12 46 -10 34 2 35 2 35 -36 0 -21 5 -42 10 -45
17 -10 12 72 -6 89 -20 21 -102 23 -85 2z"/>
                <Path fill={props.color ? props.color : '#a3a3a3'}
                    d="M140 156 c0 -143 3 -146 146 -146 67 0 103 4 99 10 -3 5 -37 10 -76
10 -39 0 -69 4 -69 10 0 6 25 10 56 10 34 0 53 4 49 10 -3 6 -33 10 -66 10
-33 0 -59 4 -59 10 0 6 21 10 46 10 27 0 43 4 39 10 -3 5 -19 10 -36 10 -16 0
-29 5 -29 10 0 6 7 10 16 10 13 0 14 3 4 15 -16 19 -26 12 -46 -32 -14 -28
-15 -39 -6 -54 16 -25 15 -29 -6 -29 -35 0 -42 21 -42 121 0 55 -4 101 -10
104 -6 4 -10 -32 -10 -99z"/>
            </G>
        </Svg>

    );
}

export default JarIcon;