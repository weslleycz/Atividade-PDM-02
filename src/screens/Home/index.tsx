import { ScrollView } from "native-base";
import React from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Title } from "../../components/Title";
import { NavigationProps } from "../../types/navigation";

export const Home = ({ navigation }: NavigationProps) => {
    return (
        <>
            <ScrollView>
                <Header>
                    <Title text="Home" />
                </Header>
            </ScrollView>
            <Footer page="home" navigation={navigation} />
        </>
    );
};
