import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from '../screens/login';
import { Cadastro } from '../screens/cadastro';
import { Home } from '../screens/Home';

export type StackParams = { 
    Login: any ;
    cadastrar: any;
    Home: any;
}

const Stack = createNativeStackNavigator <StackParams> ();
export const AppRoutes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="cadastrar" component={Cadastro} />
                {/* <Stack.Screen name="Home" component={Home} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}