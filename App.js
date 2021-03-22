
import React, { Component } from 'react';
import { Text, Animated, StyleSheet, View, TouchableOpacity } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      largura: new Animated.Value(150),
      altura: new Animated.Value(50),
      opacidade: new Animated.Value(0),
    }
    this.gerar = this.gerar.bind(this);

  }

  gerar() {
    Animated.sequence([
      Animated.timing(
        this.state.opacidade, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: false,
      }
      ),
      Animated.timing(
        this.state.altura, {
        toValue: 700,
        duration: 2900,
        useNativeDriver: false,
      }
      )
    ]).start();
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        {/*Trata o header*/}
        <View style={{
          height: 80,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          backgroundColor: "#4169E1",
        }} >
          <TouchableOpacity onPress={this.gerar}>
            <Text style={{ fontSize: 25, color: '#ffff' }}>
              Gerar grafico
            </Text>
          </TouchableOpacity>

        </View>
        {/*Na linha abaixo trata de uma view com animação*/}
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center' }}>
          <Text>Vendas</Text>
          <Animated.View style={{
            justifyContent: "center",
            width: this.state.largura,
            height: this.state.altura,
            margin: 'auto',
            padding: 'auto', backgroundColor: "blue",
            opacity: this.state.opacidade,
          }}>

            <Text
              style={styles.texto} >
              R$150
            </Text>

          </Animated.View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  texto: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  }
});

