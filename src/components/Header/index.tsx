import { Box } from "native-base";
import React, { ReactNode } from "react";
import { styles } from "./styles";

type Pros = {
    children: ReactNode;
};

export const Header = ({ children }: Pros) => {
    return (
        <>
            <Box style={styles.container}>{children}</Box>
        </>
    );
};
