import {createSlice} from '@reduxjs/toolkit'
import axiosSetup from "../config/axiosSetup";
import axios from "axios";

const initialState = {
    news: [],
    favoriteNews:[]
}
//006e0a23e1ce46dd8621d080837091d2
export const newSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        fetchAllNews(state,action){
            state.news=action.payload
            return state
        },
        likeNew(state,action) {
            const {news} = state
            const newIndex = news.findIndex(oNew => oNew.url === action.payload)
            state.news[newIndex].favorite = !state.news[newIndex].favorite
        },
        getFavorites(state){
            state.favoriteNews= state.news.filter(oNew=>oNew.favorite)
        }

    },
})



export const {fetchAllNews,likeNew,getFavorites} = newSlice.actions

export default newSlice.reducer