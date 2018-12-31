import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';

const cara = require('../assets/img/moeda_cara.png');
const coroa = require('../assets/img/moeda_coroa.png');

export default class MainView extends React.Component{
    render(){
        const { navigation } = this.props;
        const image = ( navigation.getParam('face', 0) == 0 ) ? cara : coroa;
        return(
            <View style={style.container}>
                <View style={style.corpo}>
                    <View style={style.corpoCentral}>
                    <TouchableOpacity
                        onPress={ () => this.props.navigation.goBack() }
                    >
                        <Image source={image}/>
                    </TouchableOpacity>
                    </View>
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
    },
    corpoCentral: {
        flex: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
});