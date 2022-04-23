import React, {useEffect, useState} from 'react';
import {View,Text} from "react-native";
import NewList from "../components/NewList";
import {useDispatch, useSelector} from "react-redux";
import {getFavorites} from "../redux/newSlice";

function Favorites(props) {
    const news=useSelector(state=>state.news.news)

    console.log()
    return (
        <NewList news={news.filter(oNew=>oNew.favorite)} />
    );
}

export default Favorites;