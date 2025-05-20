import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

export default function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    const weightFloat = parseFloat(weight);
    const heightFloat = parseFloat(height);

    if (!weightFloat || !heightFloat) {
      setBmi('Invalid');
      setCategory('');
      return;
    }

    const bmiValue = weightFloat / (heightFloat * heightFloat);
    const roundedBMI = bmiValue.toFixed(2);
    setBmi(roundedBMI);

    let bmiCategory = '';
    if (bmiValue < 18.5) {
      bmiCategory = 'Underweight';
    } else if (bmiValue < 25) {
      bmiCategory = 'Normal';
    } else if (bmiValue < 30) {
      bmiCategory = 'Overweight';
    } else {
      bmiCategory = 'Obese';
    }

    setCategory(bmiCategory);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.calculator}>
        <Text style={styles.screenTitle}>BMI</Text>

        <TextInput
          style={styles.input}
          placeholder="Weight (kg)"
          placeholderTextColor="#888"
          keyboardType="numeric"
          value={weight}
          onChangeText={setWeight}
        />

        <TextInput
          style={styles.input}
          placeholder="Height (m)"
          placeholderTextColor="#888"
          keyboardType="numeric"
          value={height}
          onChangeText={setHeight}
        />

        <TouchableOpacity style={styles.button} onPress={calculateBMI}>
          <Text style={styles.buttonText}>CALCULATE</Text>
        </TouchableOpacity>

        {bmi !== '' && (
          <View style={styles.resultBox}>
            <Text style={styles.resultText}>BMI: {bmi}</Text>
            <Text style={styles.resultCategory}>{category}</Text>
          </View>
        )}
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    justifyContent: 'center',
    alignItems: 'center',
  },
  calculator: {
    width: 300,
    backgroundColor: '#303030',
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 10,
  },
  screenTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#00E676',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#424242',
    borderRadius: 10,
    color: '#fff',
    fontSize: 18,
    paddingHorizontal: 15,
    marginVertical: 8,
  },
  button: {
    width: '100%',
    backgroundColor: '#00E676',
    borderRadius: 10,
    paddingVertical: 14,
    marginTop: 16,
  },
  buttonText: {
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  resultBox: {
    marginTop: 24,
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#424242',
    borderRadius: 12,
    width: '100%',
  },
  resultText: {
    fontSize: 22,
    color: '#fff',
    fontWeight: '600',
  },
  resultCategory: {
    fontSize: 18,
    color: '#90CAF9',
    marginTop: 4,
  },
});
