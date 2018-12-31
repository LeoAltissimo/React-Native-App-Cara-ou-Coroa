import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';

const logo = require('../assets/img/logo.png');
const playBtn = require('../assets/img/botao_jogar.png');
const outrosJogos = require('../assets/img/outros_jogos.png');
const sobreJogo = require("../assets/img/sobre_jogo.png")

export default class MainView extends React.Component{
    render(){
        return(
            <View style={style.container}>
                <View style={style.corpo}>
                    <View style={style.corpoCentral}>
                        <Image style={style.logoImg} source={logo}/>
                        <TouchableOpacity 
                            onPress={ () => {
                                this.props.navigation.navigate('resultado', { face: (Math.floor((Math.random() * 10) % 2)) })
                            } }
                        >
                            <Image source={playBtn}/>
                        </TouchableOpacity>
                    </View>
                    <View style={style.corpoFooter}>
                        <TouchableOpacity
                            onPress={ () => {
                                this.props.navigation.navigate('sobreJogo')
                            } }
                        >
                            <Image source={sobreJogo}/>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={ () => {
                                this.props.navigation.navigate('maisJogos')
                            } }
                        >
                            <Image source={outrosJogos}/>
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
    },
    corpoFooter: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    logoImg: {
        marginBottom: 50
    }

});