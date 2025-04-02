import React, { useRef, useMemo } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { useNavigation } from "@react-navigation/native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const OrderList = () => {
    const navigation = useNavigation();
    const snapPoints = useMemo(() => ['25%', '50%'], []);
    const bottomSheetRef = useRef(null);

    // Function to open BottomSheet when clicking checkout
    const handleCheckoutPress = () => {
        if (bottomSheetRef.current) {
            bottomSheetRef.current.expand(); // Expands the BottomSheet
        }
    };

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <SafeAreaView style={styles.container}>
                    <View style={{ width: '100%', height: '15%', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{
                            width: '90%', height: '40%', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between'
                        }}>
                            <TouchableOpacity onPress={() => navigation.goBack()} 
                                style={{ width: '27%', height: '70%', alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row', backgroundColor: 'white', borderRadius: 20 }}>
                                <Image source={require("../assets/Vector (1).png")} />
                                <Text style={{ fontSize: 16 }}>Go back</Text>
                            </TouchableOpacity>
                            <Text style={{ width: '65%', fontSize: 25, color: 'white', fontWeight: 'bold' }}>My Basket</Text>
                        </View>
                    </View>

                    <View style={{
                        width: '100%',
                        height: '85%',
                        backgroundColor: 'white',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>
                        {/* Order List */}
                        <View style={{
                            height: '80%',
                            width: '90%',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                        }}>
                            {[1, 2, 3, 4].map((item, index) => (
                                <View key={index} style={{
                                    width: '90%',
                                    height: '23%',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                }}>
                                    <View style={{ width: '70%', height: '70%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <View style={{ width: '40%', height: '100%', backgroundColor: '#FFFAEB', borderRadius: 7, alignItems: 'center', justifyContent: 'center' }}>
                                            <Image source={require("../assets/honey.png")} style={{ height: '70%', width: '80%', resizeMode: 'contain' }} />
                                        </View>
                                        <View>
                                            <Text style={{ fontSize: 16, fontWeight: 'bold', height: 'auto' }}>Quinoa fruit salad</Text>
                                            <Text>2 packs</Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', width: '20%', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Image source={require("../assets/Group(7).png")} />
                                        <Text style={{ fontSize: 24, color: '#FFA451', fontWeight: 'bold' }}>2000</Text>
                                    </View>
                                </View>
                            ))}
                        </View>

                        {/* Checkout Section */}
                        <View style={{
                            width: '90%',
                            height: '15%',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexDirection: 'row',
                        }}>
                            <View>
                                <Text style={{ fontSize: 16 }}>Total</Text>
                                <View style={{ flexDirection: 'row', width: '45%', height: '40%', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Image source={require("../assets/Group(7).png")} />
                                    <Text style={{ fontSize: 24, color: '#FFA451', fontWeight: 'bold' }}>2000</Text>
                                </View>
                            </View>
                            <TouchableOpacity onPress={handleCheckoutPress} 
                                style={{ width: '50%', height: '50%', alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFA451', borderRadius: 10 }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>Checkout</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>

                {/* Bottom Sheet */}
                <BottomSheet ref={bottomSheetRef} snapPoints={snapPoints} enablePanDownToClose={true}>
                    <View style={{ padding: 20 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Checkout Details</Text>
                        <Text style={{ fontSize: 16, marginTop: 10 }}>Confirm your order and proceed to payment.</Text>
                    </View>
                </BottomSheet>
            </ScrollView>
        </GestureHandlerRootView>
    );
}

export default OrderList;

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        backgroundColor: '#FFA451'
    },
    container: {
        flex: 1,
        width: '100%'
    },
});
