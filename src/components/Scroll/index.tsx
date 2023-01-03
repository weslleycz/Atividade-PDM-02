import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useContext, useEffect } from "react";
import { ScrollView } from "react-native";
import { ContexRecords } from "../../../App";
import { Card } from "../Card";
import { styles } from "./styles";

export const Scroll = () => {
    const appContext = useContext(ContexRecords);
    return (
        <>
            <ScrollView
                style={styles.container}
                horizontal
                disableIntervalMomentum={true}
                showsHorizontalScrollIndicator={false}
            >
                <Card typing="appetizer" />
                <Card typing="departures" />
                <Card typing="total" />
            </ScrollView>
        </>
    );
};
