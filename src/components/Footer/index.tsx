import { Box, HStack } from "native-base";
import React from "react";
import { CadastarIcon } from "../CadastarIcon";
import { ListagemIcon } from "../ListagemIcon";
import { styles } from "./styles";

export const Footer = () => {
    return (
        <>
            <Box style={styles.container}>
                <HStack style={styles.cont}>
                    <ListagemIcon color="#969CB2" height="50" width="110" />
                    <CadastarIcon color="#FF872C" height="50" width="110" />
                    <ListagemIcon color="#969CB2" height="50" width="110" />
                </HStack>
            </Box>
        </>
    );
};
