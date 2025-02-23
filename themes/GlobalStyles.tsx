import { Colors } from './Colors';
import { StyleSheet } from 'react-native'

export const GlobalStyles = StyleSheet.create({

containerVerde:{
    flex:1,
    borderRadius:50,
    backgroundColor:Colors.celadonClaro,

    marginHorizontal:150,
    marginVertical:100,
    paddingVertical:80, 
    paddingHorizontal:80,
    flexDirection:'row',
    justifyContent:'space-between',

    
},
input_form_box:{
    backgroundColor:Colors.fondo,
    borderColor:Colors.negro,
    borderWidth:1,
    borderRadius:15,

    flexDirection:'row',
    justifyContent:'space-between',

    paddingVertical:0,
    paddingHorizontal:20,
    marginBottom:5
   
},
input_form_text:{
    color: Colors.negro,
    marginVertical:8,
    fontFamily:"InterBolder",
    fontSize:24
},
textoCabeceraTab:{
    fontFamily: "InterExtraBolder",
    fontSize: 19,
    color: Colors.fondo, 
    marginTop: 10
},
textoCabecera:{
    fontFamily: "InterExtraBolder",
    fontSize: 19,
    color: Colors.fondo
},
textoConfiguracion:{
    fontFamily:"InterBolder",
    fontSize:20,
    marginStart:10
},
containerBotonLuz:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginStart:75
},
botonLuz:{
    padding: 15,
    borderRadius: 100,
    flexDirection: "row",
    alignItems: "center",
    borderColor:"black",
    borderWidth:1,
}

})
export default GlobalStyles;