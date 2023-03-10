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

        updataPost: (state,{ payload })=>{
            console.log(payload)
            let post = getPostFromLocalStorage()
            const newData =  post.map((item)=>{
                if(item.id === parseInt(payload.id)){
                    return {...item,title: payload.title, summary : payload.summary }
                }
                return item
            })
            addUserToLocalStorage(newData);
            toast.success('Post Updated Successfully');
        },
        deletePost : (state,{payload})=>{
            let post = getPostFromLocalStorage()
            const newData =  post.filter((item)=>{
                return item.id !==payload
            })
            addUserToLocalStorage(newData);
            toast.success('Post Deleted Successfully');

        }
      },

})

export const {updataPost, createPost, deletePost} = postSlice.actions;
export default postSlice.reducer;