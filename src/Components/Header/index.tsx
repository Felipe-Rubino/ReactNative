import React from "react";
import { View, Text } from "react-native";
import { styles } from "./style";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const Header = () => {
  return (
    <>
      <View>
        <View style={styles.main}>
          <View style={styles.linha}>
            <View style={styles.medal}>
              <MaterialCommunityIcons
                name="medal-outline"
                color="white"
                size={40}
              />
            </View>
            <Text style={styles.logo}> Skoob </Text>
            <View style={styles.medal}>
              <MaterialCommunityIcons
                name="barcode-scan"
                color="white"
                size={40}
              />
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Header;
