import { View, FlatList, Text, Image, } from "react-native"
import { styles } from "./style"
import { StatusBar } from "expo-status-bar";
import Header from "../../Components/Header";
import { useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const Home = () => { 
    
   
    const perPage = 20;

    const [data, setData] = useState([
        { id : 1, name : 'It, a coisa', image : require("../../assets/img/.png"), description: "Lorem ipsum dolor sit amet, consectetur adip"},
        { id : 2, name : 'Jantar Secreto', image : require("../../assets/img/jantar.png"), description: "Lorem ipsum dolor sit amet, consectetur adip"},
        { id : 3, name : 'Mulher no escuro', image : require("../../assets/img/escuro.png"), description: "Lorem ipsum dolor sit amet, consectetur adip"},
        { id : 4, name : 'O vilarejo', image : require("../../assets/img/vilarejo.png"), description: "Lorem ipsum dolor sit amet, consectetur adip"}
        ])
    return (
        <>
        <View style={styles.tela}>
        <StatusBar style="light" />
             <Header />

        <FlatList style={styles.lista} 
            data={data}
            keyExtractor={ item => String(item.id)}
            renderItem={ ({item}) => <ListItem data={item}/>}
            />  
        </View>
        </>
    )

        
}
interface Data {
    id: number;
    name: string;
    image: any;
    description: string;
}

interface Props {
    data : Data;
}

function ListItem({data} :  Props){
    return(
        <View style={styles.listitem}>
            <Text style={styles.nome}>{data.name} </Text>
            <View style={styles.image}>
            <Image
            source={data.image}
            style={styles.logo}
            resizeMode="contain"
            />
            <View style={styles.view}>
                <Text style={styles.descricao}>{data.description}</Text>
            </View>
            <View style={styles.medal}>
              <MaterialCommunityIcons
                name="cards-heart-outline"
                color="white"
                size={20}
              />
              <MaterialCommunityIcons
                name="book-outline"
                color="white"
                size={20}
              />
            </View>
            </View>
        </View>
    )
}

