import React from "react";
import Svg, { Path } from "react-native-svg";

type Pros = {
    width: string;
    height: string;
};

export const PowerIcon = ({ height, width }: Pros) => {
    return (
        <>
            <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
                <Path
                    d="M18.36 6.64001C19.6184 7.8988 20.4753 9.50246 20.8223 11.2482C21.1693 12.994 20.9909 14.8034 20.3096 16.4478C19.6284 18.0921 18.4748 19.4976 16.9948 20.4864C15.5148 21.4752 13.7749 22.0029 11.995 22.0029C10.2151 22.0029 8.47515 21.4752 6.99517 20.4864C5.51519 19.4976 4.36164 18.0921 3.68036 16.4478C2.99909 14.8034 2.82069 12.994 3.16772 11.2482C3.51475 9.50246 4.37162 7.8988 5.63 6.64001"
                    stroke="#FF872C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <Path
                    d="M12 2V12"
                    stroke="#FF872C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </Svg>
        </>
    );
};
