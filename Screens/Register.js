import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
const Register = () => {
  const navigation = useNavigation();
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flex: 1 }}
      extraHeight={100} // Extra space at bottom
      enableOnAndroid={true}
      keyboardShouldPersistTaps="handled"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.wrapper1}>
            <View
              style={{ flexDirection: "row", width: "80%", height: "auto" }}
            >
              <Image
                source={require("../assets/SecondImg1.png")}
                style={styles.image}
              />
              <Image source={require("../assets/preview1.png")} />
            </View>
            <Image
              source={require("../assets/Ellipse 1.png")}
              style={{ marginTop: "5%" }}
            />
          </View>
          <View style={styles.wrapper2_}>
            <Text
              style={{
                fontSize: 24,
                color: "black",
                width: "80%",
                fontWeight: "bold",
              }}
            >
              What is your firstname?
            </Text>
            <TextInput
              style={styles.firstinput}
              placeholder="Tony"
              placeholderTextColor="#888"
            />
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate("Home")}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: "white",
                  fontWeight: "bold",
                  padding: 10,
                }}
              >
                Let's Continue
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1, // Allows scrolling properly
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    width: "100%",
    minHeight: 400,
    alignItems: "center",
    justifyContent: "center",
    // justifyContent: 'space-around',
    // backgroundColor: "blue",
  },
  wrapper1: {
    width: "100%",
    height: "60%",
    backgroundColor: "#FFA451",
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper2: {
    width: "80%",
    height: "30%",
    // backgroundColor: 'blue',
  },
  wrapper2_: {
    width: "100%",
    height: "40%",
    justifyContent: "space-around",
    // backgroundColor: 'red',
    alignItems: "center",
  },
  btn: {
    width: "80%",
    height: "20%",
    backgroundColor: "#FFA451",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  firstinput: {
    width: "80%",
    height: "20%",
    color: "#333",
    backgroundColor: "#F3F4F9",
    borderColor: "transparent",
    borderRadius: 10,
    borderWidth: 0,
    fontSize: 20,
    outlineWidth: 0,
    paddingLeft: "4%",
  },
  image: {
    width: "90%",
    resizeMode: "contain",
  },
});
