import { StyleProp,StyleSheet } from "react-native";
import { colors } from "../../theme/colors";


export const styles:StyleProp<any> = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
      backgroundColor: colors.background,
    },
    listParentView:{
        display:'flex',
        flexDirection:'column',
        backgroundColor:'white',
        shadowColor:"rgba(6, 8, 13, 0.12)",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.34,
       shadowRadius: 6.27,
        elevation: 24,
        width:'45%',
        height:265,
        borderRadius:10,
        marginBottom:30
    },
    imageStyle:{
        width:'100%',height:158,borderTopLeftRadius:10,borderTopRightRadius:10
    },
    textParentView:{
        justifyContent:'flex-start',
        alignItems:'flex-start',display:'flex'
    },
    currencyStyles:{
        fontSize:15,
        paddingLeft:10,
        paddingRight:10,
            lineHeight:20,marginTop:10,marginBottom:10,color:'#6B6651'
    },
    nameText:{
        fontSize:19,
            color:'#2C2302',marginTop:10,
            marginBottom:10,paddingLeft:10,paddingRight:10,
            fontWeight:'bold'
    }
  });
  