import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from "@react-navigation/native";
const StartUp = () => {
    const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <SafeAreaView style={styles.container}>
       <View style={styles.wrapper}>
        <View style={styles.wrapper1}>
        <View style={{ flexDirection: "row",width:'80%', height:'auto' }}>
            <Image source={require("../assets/bas.png")} style={styles.image} />
            <Image source={require("../assets/preview1.png")} />
          </View>
          <Image source={require("../assets/Ellipse 1.png")} style={{marginTop: '5%'}} />
        </View>
         <View style={styles.wrapper2_}>
         <View style={styles.wrapper2}>
          <Text style={{fontSize:20, color:'black', fontWeight:'bold'}}>Get The Frehest Fruit Salad Combo</Text>
          <Text style={{color:'#5D577E'}}>We deliver the best and freshest fruit salad in town. Order for a combo today!!!</Text>
        </View>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Register")}>
            <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold', padding: 10 }}>Let's Continue</Text>
  
        </TouchableOpacity>
         </View>
       </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default StartUp;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1, // Allows scrolling properly
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    width: '100%',
    height: '120vh',
    alignItems: 'center',
    justifyContent: 'center',
    // justifyContent: 'space-around',
    // backgroundColor: 'blue',
    margin: 0,
  },
  wrapper1: {
    width: '100%',
    height: '60%',
    backgroundColor: '#FFA451',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper2:{
    width: '80%',
    height: '30%',
    // backgroundColor: 'blue',
  },
  wrapper2_ :{
    width: '100%',
    height: '40%',
    justifyContent: 'space-around',
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  btn:{
    width: '80%',
    height: '20%',
    backgroundColor: '#FFA451',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  image:{
    width: '90%',
    resizeMode: 'contain'
  }
});

