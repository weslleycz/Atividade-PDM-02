import { ScrollView } from "native-base";
import React from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Title } from "../../components/Title";

export const Home = () => {
    return (
        <>
            <ScrollView>
                <Header>
                    <Title text="Home" />
                </Header>
            </ScrollView>
            <Footer />
        </>
    );
};
