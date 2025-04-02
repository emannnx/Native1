import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from "@react-navigation/native";



const HomePage = () => {
      const navigation = useNavigation();

      const items = [
        { id: 1, backgroundColor: '#FFFAEB' },
        { id: 2, backgroundColor: '#FEF0F0' },
        { id: 3, backgroundColor: '#F1EFF6' },
        { id: 4, backgroundColor: '#E3F2FD' }, // Additional items
        // { id: 5, backgroundColor: '#F9EBEA' },
      ];
      
  
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <SafeAreaView style={styles.container}>
        {/* header  */}
        <View style={styles.header}>
          <TouchableOpacity  onPress={() => navigation.openDrawer()}><Image source={require("../assets/Group.png")}   /></TouchableOpacity>
           <Image source={require("../assets/Group 25.png")} style={{height: '80%', width: '25%'}}  />
       </View>
       <Text style={{width: '70%', height: 'auto', fontSize: 27}}>
  Hello Tony, 
  <Text style={{fontWeight:'bold'}}> What fruit salad combo do you want today?</Text>
</Text>

       
       {/* body */}
    <View style={{width: '100%',height: '10%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',}}>
        <View style={{height:'90%', width: '85%',backgroundColor: '#F3F4F9', borderRadius: 12, borderWidth: 0, flexDirection: 'row',alignItems:'center',justifyContent: 'space-around'}}>
            <Image source={require("../assets/search_.png")}  style={{width:'13%',height: '40%',resizeMode: 'contain'}}/>
           <TextInput
                     style={styles.firstinput}
                     placeholder="Search for fruit salad combos"
                     placeholderTextColor="#888" />
        </View>
        <Image source={require("../assets/Group 6.png")} style={{resizeMode:'contain'}}/>
    </View>
      {/* body 2 */}
      <Text style={{width:'80%', height: "auto", fontSize: 30, fontWeight: 'bold'}}>Recommended Combo</Text>
      {/* body 3 */}
      <View style={{width: '100%', height: '30%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}} >
       <TouchableOpacity style={{width: '47%', height: '90%', justifyContent: 'space-around',alignItems: 'center', borderColor: 'lightgray', borderWidth: 1,backgroundColor: 'white',shadowColor: '#D3D3D3',shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 6,elevation: 4,borderRadius:12}} onPress={() => navigation.navigate("Order")
}>
       
          <View style={{width:'90%',height:'50%',flexDirection:'row',}}>
                          <Image source={require("../assets/honey.png")}  style={{height:'100%',width:'80%', resizeMode:'contain'}}/>
                          <Image source={require("../assets/Vector.png")} />
          </View>
          <View style={{width:'90%',height:'40%', justifyContent:'space-around'}}>
              <Text style={{fontSize:20,fontWeight:'bold'}}>Honey lime combo</Text>
              <View style={{width:'100%', justifyContent:'space-between',alignItems:'center', flexDirection:'row'}}>
                <View style={{flexDirection:'row',width:'40%', height:'100%',alignItems:'center',justifyContent:'space-between'}}><Image source={require("../assets/Group(7).png")} style={{}} />  <Text style={{fontSize:20, color:'#F08626'}}>2,000</Text></View>
                <Image source={require("../assets/Group 10.png")} />
              </View>
            
        </View>
       </TouchableOpacity>

       <TouchableOpacity style={{width: '47%', height: '90%', justifyContent: 'space-around',alignItems: 'center', borderColor: 'lightgray', borderWidth: 1,backgroundColor: 'white',shadowColor: '#D3D3D3',shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 6,elevation: 4,borderRadius:12}} onPress={() => navigation.navigate("Order")
}>
       
       <View style={{width:'90%',height:'50%',flexDirection:'row',}}>
                       <Image source={require("../assets/honey.png")}  style={{height:'100%',width:'80%', resizeMode:'contain'}}/>
                       <Image source={require("../assets/Vector.png")} />
       </View>
       <View style={{width:'90%',height:'40%', justifyContent:'space-around'}}>
           <Text style={{fontSize:20,fontWeight:'bold'}}>Honey lime combo</Text>
           <View style={{width:'100%', justifyContent:'space-between',alignItems:'center', flexDirection:'row'}}>
             <View style={{flexDirection:'row',width:'40%', height:'100%',alignItems:'center',justifyContent:'space-between'}}><Image source={require("../assets/Group(7).png")} style={{}} />  <Text style={{fontSize:20, color:'#F08626'}}>2,000</Text></View>
             <Image source={require("../assets/Group 10.png")} />
           </View>
         
     </View>
    </TouchableOpacity>
      </View>
       {/* body 4 */}
      <View style={{width:'100%',height:'8%',alignItems:'center', 
        justifyContent:'space-between', flexDirection:'row'}}>
        <Text style={{fontSize:24,fontWeight: '600', color:'black'}}>Hottest</Text>
        <Text style={{fontSize:20,fontWeight: '600', color:'#938DB5'}}>Popular</Text>
        <Text style={{fontSize:20,fontWeight: '600', color:'#938DB5'}}>New combo</Text>
        <Text style={{fontSize:20,fontWeight: '600', color:'#938DB5'}}>Top</Text>


        

      </View>
      
      


{/* <ScrollView 
  horizontal={true}
  showsHorizontalScrollIndicator={false} 
  contentContainerStyle={{ flexDirection: 'row', gap: 12, paddingHorizontal: 12 }}
>
  {items.map((item) => (
    <TouchableOpacity 
      key={item.id}
      onPress={() => navigation.navigate("Order")}
      style={{
        width: "47%", 
        height: '90%', 
        justifyContent: 'space-around',
        alignItems: 'center', 
        borderColor: 'lightgray', 
        borderWidth: 1,
        backgroundColor: item.backgroundColor, 
        shadowColor: '#D3D3D3',
        shadowOffset: { width: 0, height: 4 }, 
        shadowOpacity: 0.2, 
        shadowRadius: 6, 
        elevation: 4, 
        borderRadius: 12
      }}
    >
      <View style={{ width: '90%', height: '50%', flexDirection: 'row' }}>
        <Image 
          source={require("../assets/honey.png")}  
          style={{ height: '100%', width: '80%', resizeMode: 'contain' }} 
        />
        <Image source={require("../assets/Vector.png")} />
      </View>
      <View style={{ width: '90%', height: '40%', justifyContent: 'space-around' }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Honey Lime Combo</Text>
        <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
          <View style={{ flexDirection: 'row', width: '40%', height: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
            <Image source={require("../assets/Group(7).png")} />
            <Text style={{ fontSize: 14, color: '#F08626' }}>2,000</Text>
          </View>
          <Image source={require("../assets/Group 10.png")} />
        </View>
      </View>
    </TouchableOpacity>
  ))}
</ScrollView> */}

<ScrollView 
          horizontal={true}
          showsHorizontalScrollIndicator={false} 
          contentContainerStyle={styles.horizontalScroll}
        >
          {items.map((item) => (
            <TouchableOpacity 
              key={item.id}
              onPress={() => navigation.navigate("Order")}
              style={[styles.comboCard, { backgroundColor: item.backgroundColor }]}
            >
              <View style={styles.comboImageContainer}>
                <Image 
                  source={require("../assets/honey.png")}  
                  style={styles.comboImage}
                />
                <Image source={require("../assets/Vector.png")} />
              </View>
              <View style={styles.comboDetails}>
                <Text style={styles.comboTitle}>Honey Lime Combo</Text>
                <View style={styles.priceContainer}>
                  <View style={styles.priceBox}>
                    <Image source={require("../assets/Group(7).png")} />
                    <Text style={styles.priceText}>2,000</Text>
                  </View>
                  <Image source={require("../assets/Group 10.png")} />
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>







      
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    backgroundColor: 'white',
    // flexDirection: 'column-reverse',
  },
  container: {
    height: "90%",
    backgroundColor: 'red',
    width: '90%'
  },
  header:{
    // backgroundColor: 'blue',
    height: 70,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row'

  },
  firstinput: {
    width: "80%",
    height: '70%',
    color: "#333",
    backgroundColor: "#F3F4F9",
    borderColor: "#F3F4F9",
    borderWidth: 0,
    outlineWidth: 0,
    outlineColor: "#F3F4F9",
    alignContent: "center",
    fontSize: 15,
  },
  // horizontalScroll: {
  //   width: '100%',
  //   height: '100%',
  //   flexDirection: 'row',
  //   alignItems: 'center', 
  //   justifyContent: 'space-between',
  //   gap: 10,
  // }


  horizontalScroll: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    // backgroundColor: 'green',
    // paddingHorizontal: 12,

  },
  comboCard: {
    width: 170,
    height: '85%',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderColor: 'lightgray',
    borderWidth: 1,
    shadowColor: '#D3D3D3',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
    borderRadius: 12,
  },
  comboImageContainer: {
    width: '90%',
    height: '50%',
    flexDirection: 'row',
  },
  comboImage: {
    height: '100%',
    width: '80%',
    resizeMode: 'contain',
  },
  comboDetails: {
    width: '90%',
    height: '40%',
    justifyContent: 'space-around',
  },
  comboTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '45%',
    // backgroundColor:'green',
    alignItems: 'center',
  },
  priceText: {
    fontSize: 20,
    color: '#F08626',
  },

});
