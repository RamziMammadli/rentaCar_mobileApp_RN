import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity
} from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import data from "../../data/data.json";

const Home = ({navigation, route}: any) => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const extractCarsFromItem = (item) => {
      if (item.cars && Array.isArray(item.cars)) {
        setCars((prevCars) => [...prevCars, ...item.cars]);
      }
    };

    data.forEach((item) => {
      extractCarsFromItem(item);
    });
  }, []);

  const goToDetail = (item: any) => {
    navigation.navigate('Detail', { item: item });
  }
  
  

  const box = ({ item }: any) => {
    return (
      <View style={styles.box}>
        <TouchableOpacity style={styles.boxTop} onPress={() => goToDetail(item)}>
          <View style={styles.imgBox}>
            <Image
              style={{ width: "auto", height: 150 }}
              source={{ uri: item.image }}
            />
          </View>
          <View style={{ flexDirection: "row", gap: 5, width: "100%" }}>
            <Text style={{ fontWeight: "500" }}>{item.brand}</Text>
            <Text>{item.model}</Text>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              gap: 5,
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <FontAwesome name="users" size={16} color="gray" />
            <Text>5 yer</Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            height: 70,
            backgroundColor: "#eee",
            paddingHorizontal: 10,
          }}
        >
          <View style={{ gap: 2 }}>
            <View style={{ flexDirection: "row", gap: 5 }}>
              <FontAwesome name="check" size={22} color="green" />
              <Text>Sürətli sənədləşmə</Text>
            </View>
            <View style={{ flexDirection: "row", gap: 5 }}>
              <FontAwesome name="check" size={22} color="green" />
              <Text>24/7 Xidmət</Text>
            </View>
          </View>
          <View>
            <Text>Günlük /</Text>
            <Text>{item.price} AZN</Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.inpBox}>
          <TextInput style={styles.input} placeholder="Axtarın" />
          <FontAwesome name="search" size={22} color="gray" />
        </View>
        <View style={styles.main}>
          <Text style={{ marginBottom: 7 }}>Cars</Text>
          <FlatList data={cars} renderItem={box} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    backgroundColor: "white",
    height: "100%",
    paddingTop: 15,
  },
  inpBox: {
    backgroundColor: "#eee",
    height: 45,
    borderRadius: 10,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  box: {
    borderWidth: 1,
    marginTop: 10,
    borderColor: "#eee",
    borderRadius: 15,
    overflow: "hidden",
  },
  input: {
    flex: 1,
  },
  main: {
    flex: 1,
    paddingVertical: 10,
  },
  boxTop: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 15,
    alignItems: "center",
  },
  imgBox: {
    width: "80%",
  },
});
