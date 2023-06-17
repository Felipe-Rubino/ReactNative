import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from '../screens/login';
import { Cadastro } from '../screens/cadastro';


export type StackParams = { 
    Login: any ;
    cadastrar: any;
}

const Stack = createNativeStackNavigator <StackParams> ();
export const AppRoutes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="cadastrar" component={Cadastro} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}