import currencyFormatter from "currency-formatter";
import { Box, HStack, Text } from "native-base";
import React from "react";
import { EntradaIcon } from "../EntradaIcon";
import { SaidaIcon } from "../SaidaIcon";
import { TotalIcon } from "../TotalIcon";
import { styles } from "./styled";

type Props = {
    typing: string;
    value: number;
};

export const Card = ({ typing, value }: Props) => {
    return (
        <>
            <Box
                bg={typing === "total" ? "#FF872C" : "#FFFFFF"}
                style={styles.container}
            >
                <HStack space={3} style={styles.cont}>
                    <Text
                        color={typing === "total" ? "#FFFFFF" : "#363F5F"}
                        fontSize="md"
                    >
                        {typing === "appetizer"
                            ? "Entradas"
                            : typing === "departures"
                            ? "Saídas"
                            : "Total"}
                    </Text>
                    {typing === "appetizer"
                            ?  <EntradaIcon width="40" height="40" />
                            : typing === "departures"
                            ?  <SaidaIcon width="40" height="40" />
                            : <TotalIcon width="40" height="40" />}
                </HStack>
                <Box style={styles.value}>
                    <Text
                        color={typing === "total" ? "#FFFFFF" : "#363F5F"}
                        fontSize="3xl"
                    >
                        {currencyFormatter.format(value / 100, {
                            code: "BRL",
                            locale: "pt-BR",
                        })}
                    </Text>
                    <Text
                        color={typing === "total" ? "#FFFFFF" : "#969CB3"}
                        fontSize="sm"
                    >
                        Última entrada dia 13 de abril
                    </Text>
                </Box>
            </Box>
        </>
    );
};
