import React, {useContext} from 'react';
import {Text, StyleSheet,} from "react-native";
import {Context} from "../context/BlogContext";

const CreateScreen = () => {
    const {state} = useContext(Context);

    return (
        <>
            <Text>Create</Text>
        </>
    );
};

const styles = StyleSheet.create({});

export default CreateScreen