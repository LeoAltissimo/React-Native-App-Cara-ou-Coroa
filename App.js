import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import MainView  from './views/MainView';
import MaisJogos from './views/MaisJogos';
import Resultado from './views/Resultado';
import SobreJogo from './views/SobreJogo';

const AppNavigator = createStackNavigator(
  {
    mainView:  MainView,
    maisJogos: MaisJogos,
    resultado: Resultado,
    sobreJogo: SobreJogo,
  },
  {
    initialRouteName: 'mainView',
  }
  );

export default createAppContainer(AppNavigator);