import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    news:[]
}

const newsSlice = createSlice({
    name:"newsSlice",
    initialState,
    reducers:{
        getallnews:(state , action)=>{

            state.news = action.payload
        },
        addNews:(state , action)=>{

            state.news = [...state.news, action.payload]
        },
        newsDelete:(state,action)=>{

            const{id} =  action.payload
            const deleteer = state.news.findIndex(deleter => deleter.id === Number(id))
            state.news.splice(deleteer,1)
            console.log(deleteer);

        },
        newsEdit:(state , action)=>{
            state.news = action.payload
        }

    }
});

export const{getallnews, addNews , newsDelete, newsEdit} = newsSlice.actions;
export default newsSlice.reducer