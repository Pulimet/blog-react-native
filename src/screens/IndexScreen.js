import React, {useContext} from 'react';
import {View, Text, StyleSheet, FlatList, Button, TouchableOpacity} from "react-native";
import {Context} from "../context/BlogContext";
import {Feather} from '@expo/vector-icons';


const IndexScreen = ({navigation}) => {

    const {state, addBlogPost, removePost} = useContext(Context);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                    <Feather style={styles.addIcon} name="plus" size={30}/>
                </TouchableOpacity>
            )
        });
    }, [navigation]);

    return (
        <>
            <Button title="Add Post" onPress={addBlogPost}/>
            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.id}
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