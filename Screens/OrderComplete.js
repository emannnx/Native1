import { View, Text, StyleSheet,TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";

const OrderComplete = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.containerInner}>
         <View style={{width: '100%', height: '65%',alignItems:'center', justifyContent:'space-around'}}>
          <Image source={require('../assets/Group 48.png')} style={{width:'73%',height:'50%',resizeMode:'contain'}} />
          <View style={{width:'100%',alignItems:'center',justifyContent:'space-between',height:'auto',gap:'3%'}}>
               <Text style={{fontSize: 28, fontWeight:'600'}}>
               Congratulations!!!
               </Text>
               <Text style={{fontSize: 20, fontWeight:'400', textAlign:'center'}}>
               Your order have been taken and is being attended to
               </Text>
          </View>
         </View>
         <View style={{width: '100%', height: '25%', alignItems: 'center',justifyContent: 'space-between'}}>

         <TouchableOpacity
                     style={styles.btn1}
                     onPress={() => navigation.navigate("Home")}
                     >
                      <Text
                     style={{
                     fontSize: 17,
                     color: "white",
                     fontWeight: "400",
                     padding: 10,
                     }}>
                    Track order
                     </Text>
                    </TouchableOpacity>
                                          
             

                                        <TouchableOpacity
                                         style={styles.btn}
                                         onPress={() => navigation.push("Home")}
                                         >
                                          <Text
                                         style={{
                                         fontSize: 17,
                                         color: "#FFA451",
                                         fontWeight: "400",
                                         padding: 10,
                                         }}>
                                        Continue shopping
                                         </Text>
                                        </TouchableOpacity>                                                     
         </View>
      </View>
    </View>
  )
}

export default OrderComplete;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center"
  },
  containerInner: {
    width: "70%",
    height: "60%",
    // backgroundColor: "blue",
    justifyContent: "space-between",
  },
  btn1: {
    width: "65%",
    height: "40%",
    backgroundColor: "#FFA451",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  btn: {
    width: "85%",
    height: "40%",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: '#FFA451',
    borderWidth: 1,
  },
});