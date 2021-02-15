import React, {useContext} from 'react';
import {Text, StyleSheet,} from "react-native";
import {Context} from "../context/BlogContext";

const ShowScreen = ({route}) => {
    const {state} = useContext(Context);
    const {id} = route.params;
    const blogPost = state.find(post => post.id === id)


    return (
        <>
            <Text>{blogPost.title}</Text>
        </>
    );
};

const styles = StyleSheet.create({});

export default ShowScreen