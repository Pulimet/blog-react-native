import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [...state,
                {
                    id: Math.floor(Math.random() * 999999),
                    title: `BlogContext Post #${state.length + 1}`
                }];
        case 'remove_blogpost':
            return state.filter(blogPost => blogPost.id !== action.payload)
        default:
            return state;
    }
}

const addBlogPost = (dispatch) => {
    return () => {
        dispatch({type: 'add_blogpost'});
    };
};

const removePost = (dispatch) => {
    return (id) => {
        dispatch({type: 'remove_blogpost', payload: id});
    };
};

export const {Context, Provider} = createDataContext(
    blogReducer,
    {addBlogPost, removePost},
    []
)
