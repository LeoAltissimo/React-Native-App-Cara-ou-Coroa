import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class MainView extends React.Component{
    render(){
        return(
            <View style={style.container}>
                <View style={style.corpo}>
                    <Text>Lorem Ipsun Dorem</Text>
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1
    },
    corpo: {
        flex: 10,
        backgroundColor: "#61BD8C"
    }
});