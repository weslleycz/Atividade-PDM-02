import { ScrollView } from "native-base";
import React from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Title } from "../../components/Title";

export const Register = () => {
    return (
        <>
            <ScrollView>
                <Header>
                    <Title text="Cadastro" />
                </Header>
            </ScrollView>
            <Footer />
        </>
    );
};
