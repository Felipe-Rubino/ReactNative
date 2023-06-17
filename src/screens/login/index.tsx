import { useNavigation } from "@react-navigation/native";
import { styles } from "./style";
import { View, Text, TextInput, TouchableOpacity, Image} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from "../../routes";
import { StatusBar } from "expo-status-bar";
export const Login = () => {

    const navigation = useNavigation < NativeStackNavigationProp<StackParams>> ();

    const handleLogin = () => {
        return (
            navigation.navigate('cadastrar')
        )
    }

    return (
        <>
            <View style={styles.tela}>
                <StatusBar style="light" />
                <View>
                    <Image 
                        source={require('../../assets/img/skooblogo.png')}
                        style={styles.logo}

                    />
                </View>
                <View >
                    <Text style={styles.texto}> Skoob </Text>
                </View>
                <View style={styles.div}>
                    <TextInput style={styles.input} placeholder='Email'/>
                    <TextInput style={styles.input} placeholder='Senha'/>
                </View>
                <View >
                    <TouchableOpacity style={styles.butao} >
                        <Text style={styles.entrar}> Entrar </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.cadastro}>
                    <Text style={styles.cadastre}> Não tem conta? </Text>
                    <TouchableOpacity>
                        <Text style={styles.cadastre} onPress={handleLogin}> Cadastre-se </Text>
                    </TouchableOpacity>
                </View>
            </View>


        </>
    );
};
