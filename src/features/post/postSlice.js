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
                debugger
                if(item.id === parseInt(payload.id)){
                    return {...item,title: payload.title, summary : payload.summary }
                }
                return item
            })
            addUserToLocalStorage(newData);
            toast.success('Post Updated Successfully');
        }           
      },

})

export const {updataPost, createPost} = postSlice.actions;
export default postSlice.reducer;