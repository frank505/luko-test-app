import {
    StyleSheet,
   StyleProp 
   } from 'react-native';
import { colors } from '../../theme/colors';

export const styles:StyleProp<any> = StyleSheet.create({ 

    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: colors.background,
        paddingTop: 10,
      },
      buttonsContainer: {
        width: "100%",
        marginTop: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "transparent",
      },
      textFields:{
       backgroundColor:'white',
       borderRadius:10,
       color:colors.mainGrey,
       borderWidth:2,
       height:'48px',
       borderColor:colors.borderGrey,
      },
      textArea:{
        backgroundColor:'white',
        borderRadius:10,
        color:colors.mainGrey,
        borderWidth:2,
        height:'128px',
        borderColor:colors.borderGrey
      },
      base64ViewStyle:{
        height:150, width:150,borderRadius:100,borderWidth:0.7,
        borderColor:colors.mainGrey,alignSelf:"center",display:'flex',
        justifyContent:'center',alignItems:'center'
      },
      imageWithBase64String:{
        height:150, width:150,borderRadius:100
      },
      deleteButtonImage:{
        backgroundColor:colors.mainRed,
           width:35,height:35,justifyContent:'center',
           alignItems:'center',borderRadius:100,
           position:'absolute',bottom:0,right:5
      }

})