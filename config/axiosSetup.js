import axios from "axios";
import {create} from "react-native/jest/renderer";

export default axios.create({
    baseURL:'https://newsapi.org/v2/',
    params:{
        'apiKey':'006e0a23e1ce46dd8621d080837091d2'
    }
})