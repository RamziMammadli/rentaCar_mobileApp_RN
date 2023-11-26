import { StyleSheet, Text, View, TouchableOpacity, Image, Linking } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Detail = ({ route }) => {
  const { item } = route.params;
  const navigation = useNavigation();

  const monthlyDiscountedPrice = (item.price * 0.9) * 30; // 10% discount
  const yearlyDiscountedPrice = (item.price * 0.85) * 365; // 15% discount

  return (
    <SafeAreaView>
      <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesome name="arrow-left" size={22} color={"gray"} />
          </TouchableOpacity>
        <View>
          
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 7,
              width: "100%",
            }}
          >
            <Text style={{ fontSize: 24 }}>{item.brand}</Text>
            <FontAwesome name="bookmark" size={22} />
          </View>
          <View style={{ width: "100%" }}>
            <Image
              source={{ uri: item.image }}
              style={{ width: "auto", height: 200 }}
            />
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 17 }}>{item.model}</Text>
            <Text style={{ fontSize: 17 }}>İl: {item.year}</Text>
          </View>
        </View>
        <View style={{ gap: 15 }}>
          <View style={styles.ab}>
          <View>
            <Text style={{ fontSize: 17 }}>Qiymət</Text>
            <Text style={{ fontSize: 15 }}>Günlük</Text>
            </View>
            <Text style={{ fontSize: 17 }}>Günlük / {item.price} AZN</Text>
          </View>
          <View style={styles.ab}>
            <View>
            <Text style={{ fontSize: 17 }}>Qiymət</Text>
            <Text style={{ fontSize: 15 }}>10% endirim</Text>
            </View>
            <Text style={{ fontSize: 17 }}>Aylıq / {monthlyDiscountedPrice} AZN</Text>
          </View>
          <View style={styles.ab}>
          <View>
            <Text style={{ fontSize: 17 }}>Qiymət</Text>
            <Text style={{ fontSize: 15 }}>15% endirim</Text>
            </View>
            <Text style={{ fontSize: 17 }}>İllik / {yearlyDiscountedPrice} AZN</Text>
          </View>
        </View>
      </View>
      <View style={{ backgroundColor: "black", height: "10%", justifyContent:'center',alignItems:'center' }}>
        <TouchableOpacity
          style={{ backgroundColor: "green", borderRadius: 15, height: 60, width:'95%', justifyContent:'center',alignItems:'center' }}
          onPress={() => Linking.openURL('tel:00994558780701')}
        >
          <Text style={{ color: "white", fontSize:18 }}>Book now!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    backgroundColor: "white",
    height: "90%",
    paddingTop: 15,
    justifyContent:'space-around'
  },
  ab: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "green",
    paddingHorizontal: 15,
    paddingVertical: 30,
    borderRadius: 15,
    alignItems:'center'
  },
});
