import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'get_blogpost':
            return action.payload
        case 'update_blogpost':
            return state.map((blogPost) => {
                return blogPost.id === action.payload.id ? action.payload : blogPost;
            });
        case 'remove_blogpost':
            return state.filter(blogPost => blogPost.id !== action.payload)
        default:
            return state;
    }
}

const getBlogPosts = dispatch => {
    return async () => {
        const response = await jsonServer.get('/blogposts');
        dispatch({type: 'get_blogpost', payload: response.data});
    };
};

const addBlogPost = () => {
    return async (title, content, onSuccess) => {
        await jsonServer.post('/blogposts', {title, content});
        if (onSuccess) onSuccess();
    };
};

const updatePost = (dispatch) => {
    return async (id, title, content, onSuccess) => {
        await jsonServer.put(`/blogposts/${id}`, {id, title, content});
        dispatch({type: 'update_blogpost', payload: {id, title, content}});
        if (onSuccess) onSuccess();
    };
};

const removePost = (dispatch) => {
    return async (id) => {
        await jsonServer.delete(`/blogposts/${id}`);
        dispatch({type: 'remove_blogpost', payload: id});
    };
};

export const {Context, Provider} = createDataContext(
    blogReducer,
    {getBlogPosts, addBlogPost, removePost, updatePost},
    []
)
