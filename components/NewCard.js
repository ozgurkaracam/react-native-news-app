import React from 'react';
import {View, Text, Image, TouchableOpacity} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";
import {useDispatch} from "react-redux";
import {likeNew} from "../redux/newSlice";
import moment from "moment";

function NewCard(props) {
    const dispatch = useDispatch()
    const handleLike = () => {
        dispatch(likeNew(props.url))
    }
    return (
        <View style={{
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
            overflow: 'hidden',
            margin:10,
            borderWidth: 0.3,
        }}>
            <View>
                <Image
                    style={{
                        height: 200
                    }}
                    source={{
                        uri: props.urlToImage
                    }}
                ></Image>
            </View>
            <View style={{
                padding: 10,
            }}>
                <View>
                    <Text style={{fontWeight: 'bold'}}>{props.title}</Text>

                </View>
                <View style={{marginTop: 10}}>
                    <Text style={{fontWeight: '200', color: 'gray'}}>
                        {props.content?.length > 150 ? props.content.substr(0, 150) + '...' : props.content.length}
                    </Text>
                </View>
                <View style={{marginTop: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>
                        {moment(props.publishedAt).format('DD MM Y HH:mm:ss')}
                    </Text>
                    <Text>
                        {props.author?.length < 15 ? props.author : 'Anonymous'}
                    </Text>
                </View>
            </View>
            <View style={{
                position: 'absolute',
                right: 10,
                top: 10,
                backgroundColor: 'orange',
                borderRadius: 30,
                padding: 5
            }}>

                <TouchableOpacity onPress={handleLike}>
                    <MaterialIcons name={!props.favorite ? "star-border" : 'star'} size={30} color="white"/>

                </TouchableOpacity>
            </View>
        </View>

    );
}

export default NewCard;