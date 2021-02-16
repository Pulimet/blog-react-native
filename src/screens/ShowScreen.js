import React, {useContext} from 'react';
import {Text, StyleSheet, TouchableOpacity,} from "react-native";
import {Context} from "../context/BlogContext";
import {EvilIcons} from '@expo/vector-icons';

const ShowScreen = ({route, navigation}) => {
    const {state} = useContext(Context);
    const {id} = route.params;
    const blogPost = state.find(post => post.id === id)

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Edit', {id: blogPost.id})}>
                    <EvilIcons style={styles.addIcon} name="pencil" size={30}/>
                </TouchableOpacity>
            )
        });
    }, [navigation]);

    return (
        <>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </>
    );
};

const styles = StyleSheet.create({
    addIcon: {
        fontSize: 36,
        paddingTop: 4,
        paddingHorizontal: 10
    }
});

export default ShowScreen