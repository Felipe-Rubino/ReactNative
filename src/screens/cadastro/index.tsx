import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { styles } from "./style";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from "../../routes";
import { useNavigation } from "@react-navigation/native";

export const Cadastro = () => {

  const navigation = useNavigation < NativeStackNavigationProp<StackParams>> ();
  const handleCadastro = () => {
    return (
      navigation.navigate('Login')
    )
  }

  return (
    <>
      <View style={styles.tela}>
        <View>
          <Image
            source={require("../../assets/img/skooblogo.png")}
            style={styles.logo}
          />
        </View>
        <View>
          <Text style={styles.h}> Cadastro </Text>
        </View>
        <View style={styles.div}>
          <TextInput style={styles.input} placeholder="Email" />
          <TextInput style={styles.input} placeholder="Senha" />
        </View>
        <View>
          <TouchableOpacity style={styles.butao}>
            <Text style={styles.cadastro} onPress={handleCadastro}>
              {" "}
              Cadastrar{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
