import { Box, HStack } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";
import { CadastarIcon } from "../CadastarIcon";
import { ListagemIcon } from "../ListagemIcon";
import { ResumoIcon } from "../ResumoIcon";
import { styles } from "./styles";

type Props = {
    navigation: any;
    page: string;
};

export const Footer = ({ navigation, page }: Props) => {
    return (
        <>
            <Box style={styles.container}>
                <HStack style={styles.cont}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Home")}
                        activeOpacity={0.8}
                    >
                        <ListagemIcon
                            color={page === "home" ? "#FF872C" : "#969CB2"}
                            height="50"
                            width="110"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Register")}
                        activeOpacity={0.8}
                    >
                        <CadastarIcon
                            color={page === "register" ? "#FF872C" : "#969CB2"}
                            height="50"
                            width="110"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Resume")}
                        activeOpacity={0.8}
                    >
                        <ResumoIcon
                            color={page === "resume" ? "#FF872C" : "#969CB2"}
                            height="50"
                            width="110"
                        />
                    </TouchableOpacity>
                </HStack>
            </Box>
        </>
    );
};
