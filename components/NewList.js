import React from 'react';
import NewCard from "./NewCard";
import {ScrollView} from "react-native";

function NewList({news}) {
    return (
        <ScrollView>
            {news.map(oNew=>{
                return <NewCard key={oNew.url} {...oNew} />
            })}
        </ScrollView>
    );
}

export default NewList;