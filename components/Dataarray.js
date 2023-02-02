import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  ScrollView,
} from "react-native";

const Dataarray = ({ inputdata, inputtext, setInputdata, setInputtext }) => {
  return (
    <ScrollView style={styles.goalscontainer}>
      {inputdata.map((tag, index) => (
        <View style={styles.goals} key={index}>
          <Text style={styles.goalstext}>{tag}</Text>

          <Button
            onPress={() => {
              setInputtext(tag);
              console.log("before", inputdata[index]);
              inputdata[index] = inputtext;
              console.log("after", inputdata);
            }}
            title={tag.length > 0 ? "edit" : "checked"}
          />

          <Button
            key={index}
            style={styles.deletebutton}
            title="X"
            onPress={() => {
              let newinputdata = inputdata.filter((item, index) => {
                console.log("item", item);
                console.log("tag", tag);
                return item !== tag && tag.index !== item, index;
              });

              setInputdata(newinputdata);
            }}
          />
        </View>
      ))}
    </ScrollView>
  );
};

export default Dataarray;
const styles = StyleSheet.create({
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
  goals: {
    flexDirection: "row",
    // flex: 5,
    margin: 4,
    paddingLeft: 10,
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: 10,
    padding: 10,
    borderRadius: 6,
    backgroundColor: "#CFB997",
  },
  goalstext: {
    fontSize: 30,
    color: "white",
    margin: 4,
  },
  checked: {
    fontSize: 30,
    color: "red",
  },
  deletebutton: {
    // flex: 5,
    margin: "10",
    justifyContent: "flex-end",
  },
});
