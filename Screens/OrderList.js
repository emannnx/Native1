import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView,TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const OrderList = () => {
    const navigation = useNavigation();
    const [checkout, setCheckout] = useState(false);

    const handleCheckoutPress = () => {
        setCheckout(true);
    };

    const handleCancelPress = () => {
        setCheckout(false);
    };

    const [CardPayment, SetCardPayment] = useState(false);

    const handleCardPaymentPress = () => {
        SetCardPayment(true);
    };

    const handleCancelCardpayment = () => {
        SetCardPayment(false);
    };

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <View style={styles.headerContent}>
                            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                                <Image source={require("../assets/Vector (1).png")} />
                                <Text style={styles.backText}>Go back</Text>
                            </TouchableOpacity>
                            <Text style={styles.headerTitle}>My Basket</Text>
                        </View>
                    </View>

                    <View style={styles.basketContainer}>
                        <View style={styles.orderList}>
                            {[1, 2, 3, 4].map((item, index) => (
                                <View key={index} style={styles.orderItem}>
                                    <View style={styles.itemDetails}>
                                        <View style={styles.itemImageContainer}>
                                            <Image source={require("../assets/honey.png")} style={styles.itemImage} />
                                        </View>
                                        <View>
                                            <Text style={styles.itemTitle}>Quinoa fruit salad</Text>
                                            <Text>2 packs</Text>
                                        </View>
                                    </View>
                                    <View style={styles.priceContainer}>
                                        <Image source={require("../assets/Group(7).png")} />
                                        <Text style={styles.priceText}>2000</Text>
                                    </View>
                                </View>
                            ))}
                        </View>

                        <View style={styles.checkoutSection}>
                            <View style={{width:'20%'}}>
                                <Text style={{fontSize: 20,}}>Total</Text>
                                <View style={styles.totalContainer}>
                                    <Image source={require("../assets/Group(7).png")} />
                                    <Text style={styles.priceText}>2000</Text>
                                </View>
                            </View>
                            <TouchableOpacity onPress={handleCheckoutPress} style={styles.checkoutButton}>
                                <Text style={styles.checkoutText}>Checkout</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {checkout && (
                    <View style={styles.checkoutWapper}>
                        <View style={styles.checkoutDetails}>
                        <TouchableOpacity onPress={handleCancelPress} style={styles.cancelButton}>
                            <Text style={styles.cancelText}>X</Text>
                        </TouchableOpacity>
                        <View style={styles.bottomChectoutside}>
                            <View style={{width: '80%',height: '25%',justifyContent: 'space-between'}}>
                               <Text
                                            style={{
                                              fontSize: 20,
                                              color: "black",
                                              width: "80%",
                                              fontWeight: "400",
                                            }}
                                          >
                                           Delivery address
                                          </Text>
                                          <TextInput
                                            style={styles.firstinput}
                                            placeholder="10th avenue, Lekki, Lagos State"
                                            placeholderTextColor="#888"
                                          />
                            </View>

                            <View style={{width: '80%',height: '25%',justifyContent: 'space-between'}}>
                               <Text
                                            style={{
                                              fontSize: 20,
                                              color: "black",
                                              width: "80%",
                                              fontWeight: "400",
                                            }}
                                          >
                                           Number we can call
                                          </Text>
                                          <TextInput
                                            style={styles.firstinput}
                                            placeholder="09090605708"
                                            placeholderTextColor="#888"
                                          />
                            </View>

                            <View style={{width: '80%',height: '25%',flexDirection: 'row', alignItems: "center", justifyContent: 'space-between'}}>
                                        <TouchableOpacity
                                         style={styles.btn}
                                         onPress={() => navigation.push("OrderComplete")}
                                         >
                                          <Text
                                         style={{
                                         fontSize: 17,
                                         color: "#FFA451",
                                         fontWeight: "400",
                                         padding: 10,
                                         }}>
                                        Pay on delivery
                                         </Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                         style={styles.btn}
                                         onPress={handleCardPaymentPress}
                                         >
                                          <Text
                                         style={{
                                         fontSize: 17,
                                         color: "#FFA451",
                                         fontWeight: "400",
                                         padding: 10,
                                         }}>
                                        Pay with card
                                         </Text>
                                        </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                    </View>
                )}

                {/* pay with card  */}
                {CardPayment && (
                    <View style={styles.checkoutWapper}>
                        <View style={styles.CardPayment}>
                        <TouchableOpacity onPress={handleCancelCardpayment} style={styles.cancelButton1}>
                            <Text style={styles.cancelText}>X</Text>
                        </TouchableOpacity>
                        <View style={styles.bottomChectoutside1}>
                            <View style={{width: '80%',height: '20%',justifyContent: 'space-between',marginTop: '6%'}}>
                               <Text
                                            style={{
                                              fontSize: 20,
                                              color: "black",
                                              width: "80%",
                                              fontWeight: "400",
                                            }}
                                          >
                                           Card Holders Name 
                                          </Text>
                                          <TextInput
                                            style={styles.firstinput}
                                            placeholder="Adolphus Chris"
                                            placeholderTextColor="#888"
                                          />
                            </View>

                            <View style={{width: '80%',height: '20%',justifyContent: 'space-between'}}>
                               <Text
                                            style={{
                                              fontSize: 20,
                                              color: "black",
                                              width: "80%",
                                              fontWeight: "400",
                                            }}
                                          >
                                           Card Number
                                          </Text>
                                          <TextInput
                                            style={styles.firstinput}
                                            placeholder="1234 5678 9012 1314"
                                            placeholderTextColor="#888"
                                          />
                            </View>

                            <View style={{width: '80%',height: '20%',flexDirection: 'row', alignItems: "center", justifyContent: 'space-between', }}>
                                      <View style={{height:'100%', width:'40%', justifyContent: 'space-between'}}>
                                      <Text
                                            style={{
                                              fontSize: 20,
                                              color: "black",
                                              width: "80%",
                                              fontWeight: "400",
                                            }}
                                          >
                                           Date
                                          </Text>
                                          <TextInput
                                            style={styles.firstinput}
                                            placeholder="10/30"
                                            placeholderTextColor="#888"
                                          />
                                      </View>
                                      <View style={{height:'100%', width:'40%', justifyContent: 'space-between'}}>
                                      <Text
                                            style={{
                                              fontSize: 20,
                                              color: "black",
                                              width: "80%",
                                              fontWeight: "400",
                                            }}
                                          >
                                           CCV
                                          </Text>
                                          <TextInput
                                            style={styles.firstinput}
                                            placeholder="123"
                                            placeholderTextColor="#888"
                                          />
                                      </View>
                            </View>
                            <View style={{width: '100%',height: '20%',flexDirection: 'row', alignItems: "center", justifyContent: 'center',borderTopRightRadius: 15,borderTopLeftRadius: 15, backgroundColor:'#FFA451'}}>
                                        <TouchableOpacity
                                         style={styles.btn1}
                                         onPress={() => navigation.push("OrderComplete")}
                                         >
                                          <Text
                                         style={{
                                         fontSize: 17,
                                         color: "#FFA451",
                                         fontWeight: "bold",
                                         padding: 10,
                                         }}>
                                       Complete Order
                                         </Text>
                                        </TouchableOpacity>

                            </View>

                        </View>
                    </View>
                    </View>
                )}
            </ScrollView>
        </GestureHandlerRootView>
    );
};

export default OrderList;

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFA451",
        position: "relative"
    },
    container: {
        flex: 1,
        width: "100%"
    },
    header: {
        width: "100%",
        height: "15%",
        alignItems: "center",
        justifyContent: "center"
    },
    headerContent: {
        width: "90%",
        height: "40%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    backButton: {
        width: "27%",
        height: "70%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "white",
        borderRadius: 20
    },
    backText: {
        fontSize: 16
    },
    headerTitle: {
        width: "65%",
        fontSize: 25,
        color: "white",
        fontWeight: "bold"
    },
    basketContainer: {
        width: "100%",
        height: "85%",
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "space-between"
    },
    orderList: {
        height: "80%",
        width: "90%",
        alignItems: "center",
        justifyContent: "space-around"
    },
    orderItem: {
        width: "90%",
        height: "23%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        // backgroundColor: 'red',
        borderBottomColor: 'lightgray'
        ,borderBottomWidth: 1, 
        paddingBottom: '4%'
    },
    itemDetails: {
        width: "70%",
        height: "70%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    itemImageContainer: {
        width: "40%",
        height: "100%",
        backgroundColor: "#FFFAEB",
        borderRadius: 7,
        alignItems: "center",
        justifyContent: "center"
    },
    itemImage: {
        height: "70%",
        width: "80%",
        resizeMode: "contain"
    },
    itemTitle: {
        fontSize: 16,
        fontWeight: "bold"
    },
    priceContainer: {
        flexDirection: "row",
        width: "20%",
        justifyContent: "space-between",
        alignItems: "center"
    },
    priceText: {
        fontSize: 24,
        color: "#FFA451",
        fontWeight: "bold"
    },
    checkoutDetails: {
        width: "100%",
        height: '60%',
        // backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
        // flexDirection: 'column-reverse'
        justifyContent: 'space-between'
    },

    CardPayment: {
        width: "100%",
        height: '80%',
        // backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
        // flexDirection: 'column-reverse'
        justifyContent: 'space-between'
    },
    checkoutWapper:{
        position: "absolute",
        backgroundColor: 'rgba(0,0,0,0.8)',
        flex: 1,
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        flexDirection: 'column-reverse',
    },
    bottomChectoutside:{
        height: '85%',
        width: '100%',
        backgroundColor: 'white',
        borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
        // marginTop: '37%',
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: "space-around"
    },
    bottomChectoutside1:{
        height: '85%',
        width: '100%',
        backgroundColor: 'white',
        borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
        // marginTop: '37%',
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: "space-between"
    },
    cancelButton: {
        // top: 10,
        alignItems: "center",
        backgroundColor: "white",
        width: '15%',
        height: '10%',
        borderRadius: 30,
        justifyContent: 'center'
    },

    cancelButton1: {
        // top: 10,
        alignItems: "center",
        backgroundColor: "white",
        width: '16%',
        height: '9%',
        borderRadius: 50,
        justifyContent: 'center'
    },
    cancelText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "black"
    },
    checkoutSection:{
        width: "85%",
        // backgroundColor: 'red',
        flexDirection: 'row',
        height: '12%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    totalContainer:{
        flexDirection: 'row',
        // backgroundColor: 'green',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between'
    },
    checkoutButton: {
        width: "50%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFA451",
        borderRadius: 10,
      },
      firstinput: {
        width: "100%",
        height: "60%",
        color: "#333",
        backgroundColor: "#F3F4F9",
        borderColor: "transparent",
        borderRadius: 10,
        borderWidth: 0,
        fontSize: 20,
        outlineWidth: 0,
        paddingLeft: "4%",
      },
        btn: {
        width: "40%",
        height: "50%",
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        borderColor: '#FFA451',
        borderWidth: 1,
      },
      btn1: {
        width: "40%",
        height: "50%",
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        borderColor: '#FFA451',
        borderWidth: 1,
      },
});
