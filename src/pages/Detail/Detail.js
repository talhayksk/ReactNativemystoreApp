import React from 'react';
import { View,Text,Image } from 'react-native';
import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch';
import Styles from './Detail.style';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
const Detail=({route})=>{
    const {id}=route.params;
    const{loading,error,data}=useFetch(`${Config.API_URL}/${id}`);
    if (loading) {
        return <Loading />;
      }
      if (error) {
        return <Error />;
      }
return ( 
    <View style={Styles.container}>
        <Image style={Styles.image} source={{uri:data.image}} />
        <View style={Styles.body_container}>
     <Text style={Styles.title}>{data.title}</Text>
        <Text style={Styles.desc}>{data.description}</Text>
        <Text style={Styles.price}>{data.price}</Text>
        </View>
   
    </View>
)

}
export default Detail;