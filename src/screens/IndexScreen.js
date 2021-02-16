import React, {useContext, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Button, TouchableOpacity} from "react-native";
import {Context} from "../context/BlogContext";
import {Feather} from '@expo/vector-icons';


const IndexScreen = ({navigation}) => {

    const {state, getBlogPosts, removePost} = useContext(Context);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                    <Feather style={styles.addIcon} name="plus" size={30}/>
                </TouchableOpacity>
            )
        });
    }, [navigation]);

    useEffect(() => {
        getBlogPosts();
        //The unsubscribe function can be returned as the cleanup function in the effect.
        const listener = navigation.addListener('focus', () => {
            getBlogPosts();
        });

        return () => {
            listener.remove();
        };
    }, [navigation]);

    return (
        <>
            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Show', {id: item.id})}>
                            <View style={styles.row}>
                                <Text style={styles.title}>{item.title} - {item.id}</Text>
                                <TouchableOpacity onPress={() => removePost(item.id)}>
                                    <Feather style={styles.deleteIcon} name="trash"/>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderTopWidth: 1,
        borderColor: 'gray',
        paddingHorizontal: 15
    },
    title: {
        fontSize: 18
    },
    deleteIcon: {
        fontSize: 24
    },
    addIcon: {
        fontSize: 32,
        paddingTop: 4,
        paddingHorizontal: 10
    }
});

export default IndexScreen