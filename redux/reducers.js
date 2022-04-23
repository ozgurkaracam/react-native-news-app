import axios from "axios";
import {useDispatch} from "react-redux";
import {fetchAllNews} from "./newSlice";

export function getAllNews(dispatch){
    axios.get('https://newsapi.org/v2/everything?language=tr&q=ukrayna&from=2022-03-22&sortBy=publishedAt&apiKey=006e0a23e1ce46dd8621d080837091d2').then(r => {
        dispatch(fetchAllNews(r.data?.articles.map(article=>({...article,favorite:false}))))
        // console.log(r.data.articles)
    }).catch(err=>console.log(err))
}