import { View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { useNavigation } from "@react-navigation/native";
import HomePage from './HomePage';

// Get screen dimensions
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const Order = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.goBackContainer}>
            <TouchableOpacity onPress={() => navigation.goBack(HomePage)} style={styles.goBackButton}>
              <Image source={require("../assets/Vector (1).png")} style={styles.icon} />
              <Text style={styles.goBackText}>Go back</Text>
            </TouchableOpacity>
          </View>
          <Image source={require("../assets/honey.png")} style={styles.productImage} />
        </View>

        {/* Product Details */}
        <View style={styles.productDetails}>
          <Text style={styles.productTitle}>Quinoa Fruit Salad</Text>
          <View style={styles.quantityPriceContainer}>
            <View style={styles.quantityContainer}>
              <Image source={require("../assets/Group 30.png")} style={styles.smallIcon} />
              <Text style={styles.quantityText}>1</Text>
              <Image source={require("../assets/Group 10.png")} style={styles.smallIcon} />
            </View>
            <View style={styles.priceContainer}>
              <Image source={require("../assets/Group(7).png")} style={styles.priceIcon} />
              <Text style={styles.priceText}>2000</Text>
            </View>
          </View>

          <Text style={styles.sectionHeader}>One Pack Contains:</Text>
          <Text style={styles.description}>Red Quinoa, Lime, Honey, Blueberries, Strawberries, Mango, Fresh mint.</Text>
          <Text style={styles.description}>
            If you are looking for a new fruit salad to eat today, quinoa is the perfect brunch for you.
          </Text>

          {/* Actions */}
          <View style={styles.footer}>
            <Image source={require('../assets/Group 27.png')} style={styles.footerImage} />
            <TouchableOpacity onPress={() => navigation.navigate("OrderList")} style={styles.checkoutButton}>
              <Text style={styles.checkoutText}>Go back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Order;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFA451',
  },
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
  },
  header: {
    width: '100%',
    height: screenHeight * 0.4, // 40% of screen height
    backgroundColor: '#FFA451',
    justifyContent: 'center',
    alignItems: 'center',
  },
  goBackContainer: {
    width: '90%',
    height: '10%',
    justifyContent: 'center',
  },
  goBackButton: {
    width: screenWidth * 0.3,
    height: screenHeight * 0.05,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'space-around',
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  goBackText: {
    fontSize: 16,
  },
  productImage: {
    width: '50%',
    height: '50%',
    resizeMode: 'contain',
  },
  productDetails: {
    width: '100%',
    height: screenHeight * 0.6,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    paddingVertical: 10,
  },
  productTitle: {
    width: '90%',
    fontSize: 24,
    fontWeight: 'bold',
  },
  quantityPriceContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantityContainer: {
    flexDirection: 'row',
    width: '30%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  smallIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  quantityText: {
    fontSize: 20,
  },
  priceContainer: {
    flexDirection: 'row',
    width: '20%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  priceText: {
    fontSize: 24,
    color: '#FFA451',
  },
  sectionHeader: {
    width: '90%',
    fontSize: 20,
    fontWeight: '600',
    borderBottomWidth: 2,
    borderBottomColor: '#FFA451',
  },
  description: {
    width: '90%',
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  checkoutButton: {
    width: '50%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFA451',
    borderRadius: 10,
  },
  checkoutText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});
