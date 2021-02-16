import React, {useContext} from 'react';
import {StyleSheet} from "react-native";
import {Context} from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({route, navigation}) => {
    const {state, updatePost} = useContext(Context);
    const {id} = route.params;
    const blogPost = state.find(post => post.id === id)
    return (
        <BlogPostForm
            initialValues={{title: blogPost.title, content: blogPost.content}}
            onSubmit={(title, content) => {
                updatePost(blogPost.id,  title, content, () => navigation.pop())
            }}
        />
    );
};

const styles = StyleSheet.create({});

export default EditScreen