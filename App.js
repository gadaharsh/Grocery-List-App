import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  Platform,
  TouchableOpacity,
  Keyboard,ScrollView
} from "react-native";
import React, { useState, useEffect } from "react";
import Item from "./components/Item";


export default function App() {
  const [item, setItem] = useState();
  const [allItems, setAllItems] = useState([]);

  const addItem = () => {
    Keyboard.dismiss();
    console.log(item);
    setAllItems([...allItems, item]);
    setItem(null);
  };

  const removeItem = (index) => {
    let itemsCopy = [...allItems];
    itemsCopy.splice(index, 1);
    setAllItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      {/* GRocer List */}
      <View style={styles.list}>
        <Text style={styles.title}>Grocery List</Text>
        <ScrollView style={styles.items}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>

          {allItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={()=>removeItem(index)}>
                <Item  text={item} />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeItem}
      >
        <TextInput
          style={styles.input}
          placeholder={"Add a Grocery Item"}
          value={item}
          onChangeText={(text) => setItem(text)}
        />
        <TouchableOpacity onPress={addItem}>
          <View style={styles.addItem}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  list: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 15,
    marginBottom: 120,
  },
  writeItem: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,

    backgroundColor: "white",
    borderRadius: 60,
    borderColor: "#55BCF6",
    borderWidth: 1,
    width: 250,
  },
  addItem: {
    width: 60,
    height: 60,
    backgroundColor: "white",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#55BCF6",
    borderWidth: 1,
  },
  addText: {},
});
