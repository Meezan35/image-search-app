import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';



const initialState = {
    images : [],
    status :'idle',
    error : 'null',
    imageName:''
}

export const fetchImages = createAsyncThunk('images/fetchImages',async (data)=>{
    const response = await axios.get(`https://api.unsplash.com/search/photos/?query=${data}&client_id=_cpF-5AtKkom8sqtGcR9VyFlPqoFa4Hef5GGivAHYD8`)
    return response.data;
})

const imageSlice = createSlice({
    name : 'images',
    initialState,
    reducers:{
        onTypeChange:(state,{payload})=>{
            
            return{
                ...state,
                imageName:payload
            }
        }
    },
    extraReducers(builder){
        builder
            .addCase(fetchImages.pending,(state,_action)=>{
                state.status='loading';
            })
            .addCase(fetchImages.fulfilled,(state,action)=>{
                state.status='succeeded';  
                
                state.images = action.payload.results;
            })
            .addCase(fetchImages.rejected,(state,action)=>{
                state.status='failed'
                state.error = action.error.message
            })
    }
})

export const selectAllImages = (state)=>state.images.images;
export const getImagesStatus = (state)=>state.images.status;
export const getImagesError = (state)=>state.images.error;


export default imageSlice.reducer;
export const {onTypeChange}=imageSlice.actions
