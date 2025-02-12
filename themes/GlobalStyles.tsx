import { Colors } from './Colors';
import { StyleSheet } from 'react-native'

export const GlobalStyles = StyleSheet.create({

containerVerde:{
    flex:1,
    borderRadius:12,
    backgroundColor:Colors.celadonClaro,

    marginHorizontal:25,
    marginVertical:15,
    padding:30, 
},
input_form_box:{
    backgroundColor:Colors.fondo,
    borderColor:Colors.negro,
    borderWidth:0.5,
    borderRadius:5,

    flexDirection:'row',
    justifyContent:'space-between',

    paddingVertical:0,
    paddingHorizontal:10,
    marginBottom:5
   
},
input_form_text:{
    color: Colors.negro,
    marginVertical:-5,
    fontFamily:"InterBolder"
},
textoCabeceraTab:{
    fontFamily: "Interbold",
    fontSize: 16
}

})
export default GlobalStyles;