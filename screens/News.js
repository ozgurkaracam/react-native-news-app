import React, {useEffect,useState} from 'react';
import {View, Text, ScrollView, ActivityIndicator, Image} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllNews, sayHi} from "../redux/newSlice";
import {getAllNews} from "../redux/reducers";
import NewCard from "../components/NewCard";
import NewList from "../components/NewList";

function News(props) {
    const news = useSelector(state => state.news.news)
    const [loading,setLoading]=useState(true)
    const dispatch = useDispatch()
    useEffect(() => {
        const getAll=async ()=>{
            await getAllNews(dispatch)
            setLoading(false)
        }
        getAll()
    }, []);
    if(loading)
        return (<View style={{flex: 1, backgroundColor:'white', alignItems:'center', justifyContent:'center'}}>
            <Image source={require('../assets/loading.gif')} />
        </View>)
    return (
        <NewList news={news}/>
    );
}

export default News;