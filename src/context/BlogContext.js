import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [...state,
                {
                    id: Math.floor(Math.random() * 999999),
                    title: action.payload.title,
                    content: action.payload.content
                }];
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

const addBlogPost = (dispatch) => {
    return (title, content, onSuccess) => {
        dispatch({type: 'add_blogpost', payload: {title, content}});
        if (onSuccess) onSuccess();
    };
};

const updatePost = (dispatch) => {
    return (id, title, content, onSuccess) => {
        dispatch({type: 'update_blogpost', payload: {id, title, content}});
        if (onSuccess) onSuccess();
    };
};

const removePost = (dispatch) => {
    return (id) => {
        dispatch({type: 'remove_blogpost', payload: id});
    };
};

export const {Context, Provider} = createDataContext(
    blogReducer,
    {addBlogPost, removePost, updatePost},
    []
)
