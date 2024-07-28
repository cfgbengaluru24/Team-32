import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState('');

  const handleSearch = () => {
    onSearch(input);
    setInput('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Token ID"
        value={input}
        onChangeText={setInput}
      />
      <Button title="Search" onPress={handleSearch} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
  },
});
