import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TextInput,
  TouchableOpacity 
} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      altura: 0,
      massa: 0,
      imc: 0,
      resultText: ""
    }
    this.calcular = this.calcular.bind(this)
  }

  calcular() {
    let imc = this.state.massa / (this.state.altura * this.state.altura)
    let s = this.state

    if(imc < 18.5) {
      s.resultText = "Abaixo do Peso"  
    } else if(imc <= 24.9) {
      s.resultText = "Peso Normal"
    } else if(imc <= 29.9) {
      s.resultText = "Sobrepeso"
    } else if (imc <= 34.9) {
      s.resultText = "Obesidade Grau I"
    } else if(imc <= 39.9) {
      s.resultText = "Obesidade Grau II"
    } else if(imc >= 40) {
      s.resultText = "Obesidade Grau III"
    }

    s.imc = imc
    this.setState(s)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputs}>
          <TextInput style={styles.input}
            placeholder="Peso (Kg)"
            keyboardType="numeric"
            onChangeText = {(massa) => {this.setState({massa})}}
          />

          <TextInput style={styles.input}
            placeholder="Altura (M)"
            keyboardType="numeric"
            onChangeText = {(altura) => {this.setState({altura})}}
          />
        </View>

        <Text style={styles.text}>{this.state.imc.toFixed(2)}</Text>
        <Text style={[styles.text, {fontSize: 25}]}>{this.state.resultText}</Text>
        
        <TouchableOpacity style={styles.btn}
          onPress={this.calcular}
        ><Text style={styles.btnText}>Calcular</Text></TouchableOpacity>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputs: {
    flexDirection: "row",
  },
  input: {
    fontSize: 30,
    margin: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#CCC"
  },
  btn: {
    backgroundColor: "#78e08f",
    marginTop: 50,
    marginBottom: 200,
    padding: 30,
    width: 300,
    borderRadius: 2
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center"
  },
  text: {
    fontSize: 50,
    color: "#CCC"
  }
});
