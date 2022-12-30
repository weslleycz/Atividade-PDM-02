import { Box, HStack, Text, VStack } from "native-base";
import React, { useState } from "react";
import { TextInput, TouchableOpacity } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { BtnInput } from "../BtnInput";
import { EntradaIcon } from "../EntradaIcon";
import { SaidaIcon } from "../SaidaIcon";
import { styles } from "./styles";

export const Form = () => {
    const [category, setCategory] = useState("income");
    return (
        <>
            <VStack style={styles.const} space={4} alignItems="center">
                <TextInput placeholder="Nome" style={styles.input} />
                <TextInput
                    placeholder="Preço"
                    keyboardType="numeric"
                    style={styles.input}
                />
                <Box>
                    <HStack
                        space={3}
                        alignItems="center"
                        justifyContent={"center"}
                    >
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => setCategory("income")}
                        >
                            <Box
                                bg={
                                    category === "income"
                                        ? "#89f1a2"
                                        : "transparent"
                                }
                                style={styles.btnCategory}
                            >
                                <HStack
                                    space={3}
                                    alignItems="center"
                                    justifyContent={"center"}
                                >
                                    <EntradaIcon height="40" width="40" />
                                    <Text
                                        color={
                                            category === "income"
                                                ? "#ffffff"
                                                : "#363F5F"
                                        }
                                        fontSize="lg"
                                    >
                                        Entrada
                                    </Text>
                                </HStack>
                            </Box>
                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => setCategory("outcome")}
                        >
                            <Box
                                bg={
                                    category === "outcome"
                                        ? "#f57f92"
                                        : "transparent"
                                }
                                style={styles.btnCategory}
                            >
                                <HStack
                                    space={3}
                                    alignItems="center"
                                    justifyContent={"center"}
                                >
                                    <SaidaIcon height="40" width="40" />
                                    <Text
                                        color={
                                            category === "outcome"
                                                ? "#ffffff"
                                                : "#363F5F"
                                        }
                                        fontSize="lg"
                                    >
                                        Saída
                                    </Text>
                                </HStack>
                            </Box>
                        </TouchableOpacity>
                    </HStack>
                    <Box style={styles.picke}>
                        <RNPickerSelect
                            onValueChange={(value) => console.log(value)}
                            items={[
                                { label: "Moradia", value: "Moradia" },
                                {
                                    label: "Supermercado",
                                    value: "Supermercado",
                                },
                                {
                                    label: "TV / Internet / Telefone",
                                    value: "TV / Internet / Telefone",
                                },
                                {
                                    label: "Transporte",
                                    value: "Transporte",
                                },
                                {
                                    label: "Lazer",
                                    value: "Lazer",
                                },
                                {
                                    label: "Saúde",
                                    value: "Saúde",
                                },
                                {
                                    label: "Outros",
                                    value: "Outros",
                                },
                            ]}
                        />
                    </Box>
                </Box>
                <BtnInput onPress={() => console.log(1245)} />
            </VStack>
        </>
    );
};
