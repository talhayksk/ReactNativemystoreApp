import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container:{
        backgroundColor:'white',
        borderColor:'#bdbdbd',
        borderWidth:1,
        margin:5,
        flexDirection:"row",
        borderRadius:10,
    },
image:{
    width:100,
    minHeight:100,
 marginLeft:5,
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10,
 resizeMode:"contain",
},

body_container:{
    flex:1,
    padding:5,
    justifyContent:'space-between',

},
title:{
    fontWeight:"bold",
    fontSize:16,
},
price:{
    textAlign:"right",
    fontSize:16,
    fontStyle:"italic"
},
})