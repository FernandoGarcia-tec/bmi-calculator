import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
export default function App() {
const [weight, setWeight] = useState('');
const [height, setHeight] = useState('');
const [bmi, setBmi] = useState('');
const [category, setCategory] = useState('');
const calculateBMI = () => {
const weightFloat = parseFloat(weight);
const heightFloat = parseFloat(height);
if (!weightFloat || !heightFloat) {
setBmi('Please enter valid values');
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
<View style={styles.container}>
<Text style={styles.title}>BMI Calculator</Text>
<TextInput
style={styles.input}
placeholder="Enter weight (kg)"
keyboardType="numeric"
value={weight}
onChangeText={setWeight}
/>
<TextInput
style={styles.input}
placeholder="Enter height (m)"
keyboardType="numeric"
value={height}
onChangeText={setHeight}
/>
<Button title="Calculate BMI" onPress={calculateBMI} />
{bmi !== '' && (
<Text style={styles.result}>Your BMI is: {bmi}</Text>
)}
{category !== '' && (
<Text style={styles.result}>Category: {category}</Text>
)}
</View>
);
}
const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
padding: 16,
backgroundColor: '#F5F5F5',
},
title: {
fontSize: 28,
marginBottom: 20,
},
input: {
height: 40,
width: '80%',
borderColor: 'gray',
borderWidth: 1,
marginBottom: 12,
paddingHorizontal: 10,
borderRadius: 5,
backgroundColor: '#FFF',
},
result: {
fontSize: 20,
marginTop: 20,
},
});