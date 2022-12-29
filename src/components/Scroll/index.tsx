import React from "react";
import { ScrollView } from "react-native";
import { Card } from "../Card";
import { styles } from "./styles";

export const Scroll = () => {
    return (
        <>
            <ScrollView
                style={styles.container}
                horizontal
                disableIntervalMomentum={true}
                showsHorizontalScrollIndicator={false}
            >
                <Card value={1740000} typing="appetizer" />
                <Card value={125900} typing="departures" />
                <Card value={1614100} typing="total" />
            </ScrollView>
        </>
    );
};
