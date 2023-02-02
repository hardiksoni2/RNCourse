import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    FlatList,
    ScrollView,
  } from "react-native";

export const Goalinput = ({inputtext,goalinputhandler,addgoalhandler}) => {
  return (
    <View style={styles.inputcontainer}>
    <TextInput
      style={styles.inputtext}
      placeholder="enter your goal"
      onChangeText={goalinputhandler}
      value={inputtext}
    />
    <Button
      title="add goal"
      style={styles.addgoalbtn}
      onPress={addgoalhandler}
    />
  </View>
  )
}
const styles = StyleSheet.create({
    
    addgoalbtn: {
      backgroundColor: "black",
    },
    inputcontainer: {
      flex: 0,
      justifyContent: "space-between",
      flexDirection: "row",
      backgroundColor: "#BFACE2",
      alignItems: "center",
      marginBottom: 20,
      marginTop: 40,
  
      borderBottomWidth: 3,
    },
    inputtext: {
      borderWidth: 1,
      borderColor: "#cccccc",
      width: "70%",
      color: "black",
      marginRight: 8,
      padding: 20,
      fontSize: "20",
    },
    goalscontainer: {
      flex: 4,
      paddingTop: "50",
      backgroundColor: "#395144",
      paddingHorizontal: 5,
    },
      listofgoalstext: {
      fontSize: 20,
      // textAlign: "center",
      // alignItems: "center",
      borderBottomColor: "red",
      backgroundColor: "#939B62",
      color: "white",
      padding: 5,
      borderRadius: 10,
      fontWeight: "800",
      width: "70%",
    },
  });
  

