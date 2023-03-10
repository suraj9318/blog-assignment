import { createSlice} from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { addUserToLocalStorage , getPostFromLocalStorage } from '../../utils/localstorage';
const initialState = {
    post : getPostFromLocalStorage() || [],
    loading : false,
    error : false
}

const postSlice = createSlice({
    name : "post",
    initialState,
    reducers: {
        createPost: (state,{ payload }) => {
            state.loading = false;
            state.post = [...state.post,payload];
            addUserToLocalStorage(state.post);
            toast.success('Post Created Successfully');
        },
      },

})

export const { createPost, ...state} = postSlice.actions;
export default postSlice.reducer;