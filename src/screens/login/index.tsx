import { useNavigation } from "@react-navigation/native";
import { styles } from "./style";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from "../../routes";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Feather } from "@expo/vector-icons";
export const Login = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  const [showSenha, setShowSenha] = useState(false);

  const esconderSenha = () => {
    setShowSenha(!showSenha);
  };

  const handleLogin = () => {
    return navigation.navigate("cadastrar");
  };

  const handleHome = () => {
    return navigation.navigate("Home")
  }
  const [text, setText] = useState("");
  return (
    <>
      <View style={styles.tela}>
        <StatusBar style="light" />
        <View>
          <Image
            source={require("../../assets/img/skooblogo.png")}
            style={styles.logo}
          />
        </View>
        <View>
          <Text style={styles.texto}> Skoob </Text>
        </View>
        <View style={styles.div}>
          <TextInput
            style={styles.input}
            value={text}
            onChangeText={setText}
            placeholder="Email"
          />
          <View>
            <TextInput style={styles.input} placeholder="Senha" />
           
              {showSenha ? (
                <Feather
                  name="eye-off"
                  size={28}
                  color="black"
                  style={{ position: "absolute", right: 10, top: 10 }}
                />
              ) : (
                <Feather
                  name="eye"
                  size={28}
                  color="black"
                  style={{ position: "absolute", right: 10, top: 10 }}
                />
              )}
         
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.butao} activeOpacity={1}>
            <Text style={styles.entrar} onPress={handleHome}> Entrar </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cadastro}>
          <Text style={styles.cadastre}> Não tem conta? </Text>
          <TouchableOpacity>
            <Text style={styles.cadastre} onPress={handleLogin}>
              {" "}
              Cadastre-se{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
